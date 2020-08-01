<template>
  <div>
    <nav-pagos v-if="!$q.screen.lt.sm" />
    <dialog-modificar-pago />
    <dialog-detalles-pago />
    <tabla-pagos />
    <FBA />
  </div>
</template>

<script>
  import DialogModificarPago from "components/pagos/DialogModificarPago.vue";
  import DialogDetallesPago from "components/pagos/DialogDetallesPago.vue";
  import NavPagos from "components/pagos/NavPagos.vue";
  import TablaPagos from "components/pagos/TablaPagos.vue";
  import FBA from "components/FBA.vue";
  export default {
    name: "Registros",
    components: {
      DialogModificarPago,
      DialogDetallesPago,
      TablaPagos,
      NavPagos,
      FBA,
    },
  };
</script>

<style lang="scss" scoped></style>
