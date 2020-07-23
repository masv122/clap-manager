<template>
  <q-page :style-fn="myTweak" padding>
    <div>
      <NavSectores v-if="!$q.screen.lt.sm" />
      <ModificarSector />
      <DetallesSector />
      <TablaSectores />
    </div>
    <FBA/>
  </q-page>
</template>

<script>
import NavSectores from "components/sectores/NavSectores.vue";
import DetallesSector from "components/sectores/DetallesSector.vue";
import TablaSectores from "components/sectores/TablaSectores.vue";
import ModificarSector from "components/sectores/ModificarSector.vue";
import FBA from "components/FBA.vue";
export default {
  name: "Sectores",
  components: {
    NavSectores,
    DetallesSector,
    TablaSectores,
    ModificarSector,
    FBA
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
