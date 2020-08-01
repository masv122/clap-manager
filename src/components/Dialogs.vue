<template>
  <div>
    <dialog-agregar-sector />
    <dialog-agregar-persona />
    <dialog-agregar-pago />
  </div>
</template>

<script>
  import DialogAgregarSector from "components/sectores/DialogAgregarSector.vue";
  import DialogAgregarPersona from "components/personas/DialogAgregarPersona.vue";
  import DialogAgregarPago from "components/pagos/DialogAgregarPago.vue";
  export default {
    name: "Dialogs",
    components: {
      DialogAgregarSector,
      DialogAgregarPersona,
      DialogAgregarPago,
    },
  };
</script>

<style lang="scss" scoped></style>
