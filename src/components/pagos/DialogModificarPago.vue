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
        <modificar-pago />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import ModificarPago from "components/pagos/ModificarPago.vue";
  export default {
    name: "ModificarPago",
    components: {
      ModificarPago,
    },
    data() {
      return {
        guardando: false,
      };
    },
    computed: {
      ...mapGetters("pagos", ["modificarPago"]),
      _modificarPago: {
        get() {
          return this.modificarPago;
        },
        set() {
          this.updateModificarPago();
        },
      },
    },
    methods: {
      ...mapMutations("pagos", [
        "updateModificarPago",
        "updateMonto",
        "updateBanco",
        "updateEstado",
        "updateFecha",
        "updateReferencia",
      ]),
      ...mapMutations("personas", ["updateNucleo"]),
      ...mapMutations("sectores", ["updateSector"]),
      resetear() {
        this.updateMonto(0);
        this.updateBanco(null);
        this.updateEstado("pendiente");
        this.updateFecha("");
        this.updateReferencia(0);
        this.updateNucleo(null);
        this.updateSector(null);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
