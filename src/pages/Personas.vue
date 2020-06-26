<template>
  <q-page :style-fn="myTweak" padding>
    <ModificarPersona />
    <NavPersonas />
    <ConfirmacionEliminacion />
    <AgregarPersona />
    <router-view />
  </q-page>
</template>

<script>
import AgregarPersona from "components/personas/AgregarPersona.vue";
import ModificarPersona from "components/personas/ModificarPersona.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import NavPersonas from "components/personas/NavPersonas.vue";
export default {
  name: "Personas",
  components: {
    AgregarPersona,
    ConfirmacionEliminacion,
    ModificarPersona,
    NavPersonas
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