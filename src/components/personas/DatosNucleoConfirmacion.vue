<template>
  <div>
    <div class="text-h5 q-ml-xl">
      <q-icon name="group" />Datos del Nucleo
    </div>
    <q-field borderless label="Nombre" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{}}</div>
      </template>
    </q-field>
    <q-field borderless label="Direccion" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{Direccion}}</div>
      </template>
    </q-field>
    <q-field borderless label="Sector" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{Sector}}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DatosNucleoConfirmacion",
  computed: {
    ...mapGetters("personas", ["nombreNucleo"])
  },
};
</script>

<style lang="scss" scoped>
</style>