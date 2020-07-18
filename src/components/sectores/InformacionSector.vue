<template>
  <div>
    <q-field borderless label="Nombre" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombre }}</div>
      </template>
    </q-field>
    <q-field borderless label="Estado" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ estado }}</div>
      </template>
    </q-field>
    <q-field borderless label="Municipio" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ municipio }}</div>
      </template>
    </q-field>
    <q-field borderless label="Parroquia" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ parroquia }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "InformacionSector",
  props: {
    nombre: {
      type: String,
      default: ""
    },
    estado: {
      type: String,
      default: ""
    },
    municipio: {
      type: String,
      default: ""
    },
    parroquia: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>