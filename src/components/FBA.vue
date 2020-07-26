<template>
  <q-page-sticky position="bottom-right" :offset="[18, 50]" v-if="$q.screen.lt.sm">
    <q-fab color="negative" text-color="white" icon="keyboard_arrow_left" direction="left">
      <q-fab-action color="primary" text-color="white" icon="print" />
      <q-fab-action color="positive" text-color="white" @click="agregar" icon="add" />
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "FBA",
  methods: {
    ...mapMutations("sectores", ["updateAgregar"]),
    ...mapMutations("personas", ["updateAgregarPersona"]),
    ...mapMutations("pagos", ["updateAgregarPago"]),
    agregar() {
      if (this.$route.path.includes("sectores"))
        this.$router.push({ name: "Agregar sector" });
      else if (this.$route.path.includes("personas"))
        this.updateAgregarPersona();
      else if (this.$route.path.includes("pagos")) this.updateAgregarPago();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>