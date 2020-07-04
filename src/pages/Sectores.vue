<template>
  <q-page :style-fn="myTweak" padding>
    <div class="shadow-1 bg-white">
      <NavSectores />
      <ModificarSector />
      <ConfirmacionEliminacion />
      <DetallesSector />
      <TablaSectores :loading="loading" />
    </div>
  </q-page>
</template>

<script>
import NavSectores from "components/sectores/NavSectores.vue";
import DetallesSector from "components/sectores/DetallesSector.vue";
import TablaSectores from "components/sectores/TablaSectores.vue";
import ModificarSector from "components/sectores/ModificarSector.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import { mapActions } from "vuex";
export default {
  name: "Sectores",
  components: {
    NavSectores,
    DetallesSector,
    TablaSectores,
    ConfirmacionEliminacion,
    ModificarSector
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    myTweak(offset) {
      return { minHeight: offset ? `calc(100vh - ${offset}px` : "100vh" };
    },
    ...mapActions("sectores", ["cargarSectores"])
  },
  async created() {
    this.loading = true;
    await this.cargarSectores();
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
</style>
