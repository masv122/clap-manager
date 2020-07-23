<template>
  <div>
    <q-field borderless label="Numero de referencia" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ referencia }}</div>
      </template>
    </q-field>
    <q-field borderless label="Monto" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ monto }}</div>
      </template>
    </q-field>
    <q-field borderless label="Fecha" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ fecha }}</div>
      </template>
    </q-field>
    <q-field borderless label="Estado" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ estado }}</div>
      </template>
    </q-field>
    <q-field borderless label="Banco" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{ banco }}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "InformacionPago",
  props: {
    referencia: {
      type: String,
      default: ""
    },
    monto: {
      type: String,
      default: ""
    },
    fecha: {
      type: String,
      default: ""
    },
    estado: {
      type: String,
      default: ""
    },
    banco: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>