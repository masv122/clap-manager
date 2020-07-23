<template>
  <div>
    <q-dialog
      v-model="_agregarPago"
      persistent
      :full-height="$q.screen.lt.sm"
      :full-width="$q.screen.lt.sm"
      @hide="resetear"
      @show="resetear"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Agregar pago
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
            <q-step :name="1" title="Seleccione un nucleo" icon="group" :done="step > 1">
              <sector-nucleo-select nucleo-requerido/>
              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  color="primary"
                  icon-right="chevron_right"
                  label="Siguiente"
                  :disable="nucleoSelectInvalido"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Complete los datos"
              caption="Optional"
              icon="info"
              :done="step > 2"
            >
              <formulario-datos-pago />
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 1"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  @click="step = 3"
                  color="primary"
                  icon-right="chevron_right"
                  label="Siguiente"
                  :disabled="formularioPagoInvalido"
                />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="3" title="Confirme la informacion" icon="check">
              <div class="row" v-if="step === 3">
                <informacion-pago
                  :referencia="referencia"
                  :monto="monto"
                  :fecha="fecha"
                  :estado="estado"
                  :banco="banco.nombre"
                  class="col"
                />
                <informacion-nucleo
                  :nombre-nucleo="buscarNucleo(nucleo).nombre"
                  :nombre="!!buscarNucleo(nucleo).cedula ? buscarIntegrante(buscarNucleo(nucleo).cedula).nombre : 'Sin jefe familiar, asigne uno'"
                  :cedula="buscarNucleo(nucleo).cedula"
                  :direccion="buscarNucleo(nucleo).direccion"
                  class="col"
                />
              </div>
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 2"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  :loading="guardando"
                  color="positive"
                  icon-right="check"
                  label="Agregar"
                  @click="confirmarPago"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import SectorNucleoSelect from "components/SectorNucleoSelect.vue";
import InformacionNucleo from "components/personas/InformacionNucleo.vue";
import FormularioDatosPago from "components/pagos/FormularioDatosPago.vue";
import InformacionPago from "components/pagos/InformacionPago.vue";
import * as API from "src/mixins/API";
import { mapGetters, mapMutations } from "vuex";
import Pago from "src/class/pago";
export default {
  name: "AgregarIntegrante",
  components: {
    SectorNucleoSelect,
    InformacionNucleo,
    FormularioDatosPago,
    InformacionPago
  },
  data() {
    return {
      step: 1,
      guardando: false
    };
  },
  computed: {
    ...mapGetters("global", ["nucleoSelectInvalido"]),
    ...mapGetters("pagos", [
      "agregarPago",
      "monto",
      "banco",
      "estado",
      "fecha",
      "referencia",
      "formularioPagoInvalido"
    ]),
    ...mapGetters("personas", ["nucleo", "buscarNucleo", "buscarIntegrante"]),
    _agregarPago: {
      get() {
        return this.agregarPago;
      },
      set() {
        this.updateAgregarPago();
      }
    }
  },
  methods: {
    ...mapMutations("pagos", [
      "updateAgregarPago",
      "updateMonto",
      "updateBanco",
      "updateEstado",
      "updateFecha",
      "updateReferencia"
    ]),
    ...mapMutations("personas", ["updateNucleo"]),
    ...mapMutations("sectores", ["updateSector"]),
    async confirmarPago() {
      this.guardando = true;
      let pago = new Pago(
        this.monto,
        this.banco.codigo,
        this.estado,
        this.fecha,
        this.nucleo,
        this.referencia
      );
      const resultado = await API.guardarPago(pago);
      await API.actualizarPagosNucleo(pago);
      this.guardando = false;
      this.updateAgregarPago();
    },
    resetear() {
      this.updateMonto(null);
      this.updateBanco(null);
      this.updateEstado("pendiente");
      this.updateFecha("");
      this.updateReferencia(null);
      this.updateNucleo(null);
      this.updateSector(null);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
