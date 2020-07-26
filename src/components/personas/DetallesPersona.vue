<template>
  <div>
    <DetallesIntegrante v-if="!!tipoPersona && tipoPersona.value === 'integrante'" />
    <DetallesNucleo v-if="!!tipoPersona && tipoPersona.value === 'nucleo'" />
    <DetallesJefeCalle v-if="!!tipoPersona && tipoPersona.value === 'jefe'" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DetallesIntegrante from "components/personas/DetallesIntegrante.vue";
import DetallesNucleo from "components/personas/DetallesNucleo.vue";
import DetallesJefeCalle from "components/personas/DetallesJefeCalle.vue";
export default {
  name: "DetallesPersona",
  components: {
    DetallesIntegrante,
    DetallesNucleo,
    DetallesJefeCalle
  },
  computed: {
    ...mapGetters("personas", ["tipoPersona"])
  }
};
</script>

<style lang="scss" scoped>
</style>
