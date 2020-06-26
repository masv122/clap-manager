<template>
  <q-page :style-fn="myTweak" padding>
    <NavPagos />
    <ModificarPago />
    <ConfirmacionEliminacion />
    <AgregarPago />
    <TablaPagos />
  </q-page>
</template>

<script>
import AgregarPago from "components/pagos/AgregarPago.vue";
import ModificarPago from "components/pagos/ModificarPago.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import NavPagos from "components/pagos/NavPagos.vue";
import TablaPagos from "components/pagos/TablaPagos.vue";
export default {
  name: "Pagos",
  components: {
    AgregarPago,
    ConfirmacionEliminacion,
    ModificarPago,
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