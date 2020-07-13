<template>
  <q-page :style-fn="myTweak" padding>
    <div class="shadow-1 bg-white">
      <NavSectores v-if="!$q.screen.lt.sm" />
      <ModificarSector />
      <ConfirmacionEliminacion />
      <DetallesSector />
      <TablaSectores />
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" v-if="$q.screen.lt.sm">
      <q-fab color="negative" text-color="white" icon="keyboard_arrow_left" direction="left">
        <q-fab-action color="positive" text-color="white" icon="add" />
        <q-fab-action color="info" text-color="white" icon="article" />
        <q-fab-action color="primary" text-color="white" icon="print" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import NavSectores from "components/sectores/NavSectores.vue";
import DetallesSector from "components/sectores/DetallesSector.vue";
import TablaSectores from "components/sectores/TablaSectores.vue";
import ModificarSector from "components/sectores/ModificarSector.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
export default {
  name: "Sectores",
  components: {
    NavSectores,
    DetallesSector,
    TablaSectores,
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
