<template>
  <q-dialog v-model="_modificarPago" persistent @hide="resetear">
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white q-mb-md">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="edit" class="q-mr-md" />Modificar Pago
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-ma-md">
        <div class="text-h6 q-mb-md">
          <q-icon name="info" class="q-mr-md" />Datos del pago
        </div>
        <q-separator class="q-mb-md" />
        <formulario-datos-pago modificar />
      </q-card-section>
      <q-separator />
      <q-card-actions class="q-ma-md" align="center">
        <q-btn
          label="Guardar"
          icon="save"
          type="submit"
          color="primary"
          @click="confirmarPago"
          class="q-ml-sm"
          :loading="guardando"
          :disabled="formularioModificarPagoInvalido"
        />
        <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import * as API from "src/mixins/API";
import FormularioDatosPago from "components/pagos/FormularioDatosPago.vue";
import Pago from "src/class/pago";
export default {
  name: "ModificarPago",
  components: {
    FormularioDatosPago
  },
  data() {
    return {
      guardando: false
    };
  },
  computed: {
    ...mapGetters("pagos", [
      "modificarPago",
      "pago",
      "monto",
      "banco",
      "estado",
      "fecha",
      "referencia",
      "formularioModificarPagoInvalido"
    ]),
    _modificarPago: {
      get() {
        return this.modificarPago;
      },
      set() {
        this.updateModificarPago();
      }
    }
  },
  methods: {
    ...mapMutations("pagos", [
      "updateModificarPago",
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
        this.pago.nucleo,
        this.referencia,
        this.pago.rev
      );
      const result = await API.guardarPago(pago);
      this.guardando = false;
      if (!!result) this.updateModificarPago();
    },
    resetear() {
      this.updateMonto(0);
      this.updateBanco(null);
      this.updateEstado("pendiente");
      this.updateFecha("");
      this.updateReferencia(0);
      this.updateNucleo(null);
      this.updateSector(null);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
