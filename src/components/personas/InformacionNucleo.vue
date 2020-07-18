<template>
  <div>
    <q-field borderless label="Nombre del nucleo" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombreNucleo }}</div>
      </template>
    </q-field>
    <q-field borderless label="Jefe(a) del nucleo" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombre }}</div>
      </template>
    </q-field>
    <q-field borderless label="Cedula" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ cedula }}</div>
      </template>
    </q-field>
    <q-field borderless label="Direccion" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ direccion }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "InformacionNucleo",
  props: {
    nombreNucleo: {
      type: String,
      default: ""
    },
    nombre: {
      type: String,
      default: ""
    },
    cedula: {
      type: Number,
      default: null
    },
    direccion: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>