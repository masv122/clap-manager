<template>
  <div>
    <AgregarSector />
    <AgregarPersona />
    <AgregarPago />
  </div>
</template>

<script>
import AgregarSector from "components/sectores/AgregarSector.vue";
import AgregarPersona from "components/personas/AgregarPersona.vue";
import AgregarPago from "components/pagos/AgregarPago.vue";
export default {
  name: "Dialogs",
  components: {
    AgregarSector,
    AgregarPersona,
    AgregarPago
  }
};
</script>

<style lang="scss" scoped>
</style>