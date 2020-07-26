<template>
  <div>
    <nav-personas />
    <dialog-modificar-persona />
    <confirmacion-eliminacion />
    <dialog-detalles-persona />
    <router-view />
    <f-b-a />
  </div>
</template>

<script>
import DialogDetallesPersona from "components/personas/DialogDetallesPersona.vue";
import DialogModificarPersona from "components/personas/DialogModificarPersona.vue";
import ConfirmacionEliminacion from "components/ConfirmacionEliminacion.vue";
import NavPersonas from "components/personas/NavPersonas.vue";
import FBA from "components/FBA.vue";
export default {
  name: "Registros",
  components: {
    DialogDetallesPersona,
    ConfirmacionEliminacion,
    DialogModificarPersona,
    NavPersonas,
    FBA
  }
};
</script>

<style lang="scss" scoped>
</style>