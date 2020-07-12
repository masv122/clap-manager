<template>
  <div>
    <div class="text-h5 q-ml-xl">
      <q-icon name="group" />Datos del Nucleo
    </div>
    <q-field borderless label="Nombre" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{nombreNucleo}}</div>
      </template>
    </q-field>
    <q-field borderless label="Direccion" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{direccion}}</div>
      </template>
    </q-field>
    <q-field borderless label="Sector" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombreSector }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>

export default {
  name: "DatosNucleoConfirmacion",
  props: {
    nombreNucleo: {
      type: String,
      default: ""
    },
    direccion: {
      type: String,
      default: ""
    },
    nombreSector: {
      type: String,
      default: ""
    }
  },

};
</script>

<style lang="scss" scoped>
</style>