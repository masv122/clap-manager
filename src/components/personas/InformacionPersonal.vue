<template>
  <div>
    <q-field borderless label="Nombre" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ nombre }}</div>
      </template>
    </q-field>
    <q-field borderless label="Apellidos" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ apellido }}</div>
      </template>
    </q-field>
    <q-field borderless label="Cedula" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ cedula }}</div>
      </template>
    </q-field>
    <q-field borderless label="Telefono" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ telefono }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "InformacionPersonal",
  props: {
    nombre: {
      type: String,
      default: ""
    },
    apellido: {
      type: String,
      default: ""
    },
    cedula: {
      type: Number,
      default: null
    },
    telefono: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>