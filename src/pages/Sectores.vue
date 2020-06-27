<template>
  <q-page :style-fn="myTweak" padding>
    <div class="shadow-1">
      <ModificarSector />
      <ConfirmacionEliminacion />
      <AgregarSector />
      <NavSectores />
      <TablaSectores />
    </div>
  </q-page>
</template>

<script>
import NavSectores from "components/sectores/NavSectores.vue";
import TablaSectores from "components/sectores/TablaSectores.vue";
import AgregarSector from "components/sectores/AgregarSector.vue";
import ModificarSector from "components/sectores/ModificarSector.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
export default {
  name: "Sectores",
  components: {
    NavSectores,
    TablaSectores,
    AgregarSector,
    ConfirmacionEliminacion,
    ModificarSector
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
