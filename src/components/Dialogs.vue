<template>
  <div>
    <dialog-agregar-sector />
    <dialog-agregar-persona />
    <AgregarPago />
  </div>
</template>

<script>
import DialogAgregarSector from "components/sectores/DialogAgregarSector.vue";
import DialogAgregarPersona from "components/personas/DialogAgregarPersona.vue";
import AgregarPago from "components/pagos/AgregarPago.vue";
export default {
  name: "Dialogs",
  components: {
    DialogAgregarSector,
    DialogAgregarPersona,
    AgregarPago
  }
};
</script>

<style lang="scss" scoped>
</style>