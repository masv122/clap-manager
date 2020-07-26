<template>
  <div>
    <nav-sectores v-if="!$q.screen.lt.sm" />
    <dialog-modificar-sector />
    <dialog-detalles-sector />
    <tabla-sectores />
    <f-b-a />
  </div>
</template>

<script>
import NavSectores from "components/sectores/NavSectores.vue";
import DialogDetallesSector from "components/sectores/DialogDetallesSector.vue";
import TablaSectores from "components/sectores/TablaSectores.vue";
import DialogModificarSector from "components/sectores/DialogModificarSector.vue";
import FBA from "components/FBA.vue";
export default {
  name: "Registros",
  components: {
    NavSectores,
    DialogDetallesSector,
    TablaSectores,
    DialogModificarSector,
    FBA
  }
};
</script>

<style lang="scss" scoped>
</style>