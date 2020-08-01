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
        <detalles-pago />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import DetallesPago from "components/pagos/DetallesPago.vue";
  export default {
    name: "DialogDetallesPago",
    components: {
      DetallesPago,
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
        },
      },
    },
    methods: {
      ...mapMutations("pagos", ["updateDetallesPago"]),
    },
  };
</script>

<style lang="scss" scoped></style>
