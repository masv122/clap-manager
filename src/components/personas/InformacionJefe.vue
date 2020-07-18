<template>
  <div>
    <q-field borderless label="Nombre" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombre }}</div>
      </template>
    </q-field>
    <q-field borderless label="Cedula" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ cedula }}</div>
      </template>
    </q-field>
    <q-field borderless label="Codigo" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ codigo }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "InformacionJefe",
  props: {
    nombre: {
      type: String,
      default: ""
    },
    cedula: {
      type: Number,
      default: null
    },
    codigo: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>