<template>
  <q-page :style-fn="myTweak" padding>
    <div class="shadow-1 bg-white q-mt-md">
      <NavPagos />
      <ModificarPago />
      <DetallesPago />
      <ConfirmacionEliminacion />
      <TablaPagos />
    </div>
  </q-page>
</template>

<script>
import ModificarPago from "components/pagos/ModificarPago.vue";
import DetallesPago from "components/pagos/DetallesPago.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import NavPagos from "components/pagos/NavPagos.vue";
import TablaPagos from "components/pagos/TablaPagos.vue";
export default {
  name: "Pagos",
  components: {
    ConfirmacionEliminacion,
    ModificarPago,
    DetallesPago,
    TablaPagos,
    NavPagos
  },
  methods: {
    myTweak(offset) {
      return { minHeight: offset ? `calc(100vh - ${offset}px` : "100vh" };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
