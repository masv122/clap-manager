<template>
  <div class="q-gutter-md">
    <q-form @submit.prevent class="q-gutter-md shadow-1 round q-px-md q-pb-md">
      <div class="text-h5 q-ml-xs q-pt-md">
        <q-icon name="group" />Asignacion de nucleo
      </div>
      <q-separator color="negative" inset />
      <seleccionar-nucleo/>
      <div class="text-h5 q-ml-xs q-pt-xs">
        <q-icon name="info" />Datos del nucleo
      </div>
      <q-separator color="negative" inset />
      <q-field borderless label="Direccion" stack-label>
        <template v-slot:control>
          <div
            class="self-center full-width no-outline"
          >{{ nucleo ? buscarNucleo(nucleo).direccion : ""}}</div>
        </template>
      </q-field>
      <q-field borderless label="Nombre" stack-label>
        <template v-slot:control>
          <div
            class="self-center full-width no-outline"
          >{{ nucleo ? buscarNucleo(nucleo).nombre : "" }}</div>
        </template>
      </q-field>
      <q-field borderless label="Cedula" stack-label>
        <template v-slot:control>
          <div
            class="self-center full-width no-outline"
          >{{ nucleo ? buscarNucleo(nucleo).cedula : ""}}</div>
        </template>
      </q-field>
    </q-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SeleccionarNucleo from "components/personas/SeleccionarNucleo.vue";

export default {
  name: "AsignarNucleo",
  components: {
    SeleccionarNucleo,
  },
  computed: {
    ...mapGetters("personas", [
      "nucleo",
      "buscarNucleo"
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
