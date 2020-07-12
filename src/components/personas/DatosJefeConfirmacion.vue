<template>
  <div>
    <div class="text-h5 q-ml-xl">
      <q-icon name="group" />Datos del Jefe de calle
    </div>
    <q-field borderless label="Codigo" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{codigo}}</div>
      </template>
    </q-field>
    <q-field borderless label="Direccion" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{direccion}}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DatosJefeConfirmacion",
  computed: {
    ...mapGetters("personas", ["codigo", "direccion"]),
  },
};
</script>

<style lang="scss" scoped>
</style>