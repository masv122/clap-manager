<template>
    <q-dialog v-model="_detallesPago" persistent v-if="!!pago">
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="article" class="q-mr-md" />Detalles Pago
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <div class="column">
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="group" />Informacion del nucleo
              </div>
              <informacion-nucleo
                :nombre-nucleo="buscarNucleo(pago.nucleo).nombre"
                :nombre="!!buscarNucleo(pago.nucleo).cedula ? buscarIntegrante(buscarNucleo(pago.nucleo).cedula).nombre : 'Sin jefe familiar, asigne uno'"
                :cedula="buscarNucleo(pago.nucleo).cedula"
                :direccion="buscarNucleo(pago.nucleo).direccion"
              />
            </div>
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="info" />Informacion detallada
              </div>
              <informacion-pago
                :referencia="pago.id"
                :monto="pago.monto"
                :fecha="pago.fecha"
                :estado="pago.estado"
                :banco="pago.banco"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InformacionNucleo from "components/personas/InformacionNucleo.vue";
import InformacionPago from "components/pagos/InformacionPago.vue";
export default {
  name: "DetallesPago",
  components: {
    InformacionNucleo,
    InformacionPago
  },
  computed: {
    ...mapGetters("pagos", ["detallesPago", "pago"]),
    ...mapGetters("personas", ["buscarNucleo", "buscarIntegrante"]),
    _detallesPago: {
      get() {
        return this.detallesPago;
      },
      set(value) {
        this.updateDetallesPago(value);
      }
    }
  },
  methods: {
    ...mapMutations("pagos", ["updateDetallesPago"])
  },
};
</script>

<style lang="scss" scoped>
</style>
