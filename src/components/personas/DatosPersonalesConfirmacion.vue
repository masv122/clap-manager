<template>
  <div>
    <div class="text-h5 q-ml-xl">
      <q-icon name="info" />Datos personales
    </div>
    <q-field borderless label="Nombres" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{nombre}}</div>
      </template>
    </q-field>
    <q-field borderless label="Apellidos" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{apellido}}</div>
      </template>
    </q-field>
    <q-field borderless label="Cedula" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{cedula}}</div>
      </template>
    </q-field>
    <q-field borderless label="Telefono" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{telefono}}</div>
      </template>
    </q-field>
    <q-field borderless label="Fecha de nacimiento" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{fechaNacimiento}}</div>
      </template>
    </q-field>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DatosPersonalesConfirmacion",
  ...mapGetters("personas", [
    "nombre",
    "apellido",
    "cedula",
    "telefono",
    "fechaNacimiento"
  ])
};
</script>

<style lang="scss" scoped>
</style>