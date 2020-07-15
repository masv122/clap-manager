<template>
  <q-page :style-fn="myTweak" padding>
    <div class="shadow-1 bg-white q-mt-md">
      <NavPersonas v-if="!$q.screen.lt.sm" />
      <ModificarPersona />
      <ConfirmacionEliminacion />
      <DetallesPersona />
      <router-view />
    </div>
    <FBA />
  </q-page>
</template>

<script>
import DetallesPersona from "components/personas/DetallesPersona.vue";
import ModificarPersona from "components/personas/ModificarPersona.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import NavPersonas from "components/personas/NavPersonas.vue";
import FBA from "components/FBA.vue";
export default {
  name: "Personas",
  components: {
    DetallesPersona,
    ConfirmacionEliminacion,
    ModificarPersona,
    NavPersonas,
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
