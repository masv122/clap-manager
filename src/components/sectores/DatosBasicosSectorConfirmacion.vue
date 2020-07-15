<template>
  <div class="row">
    <div class="col">
      <div class="text-h6 q-ml-xl">
        <q-icon name="info" />Datos del sector
      </div>
      <q-field borderless label="Nombre" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ nombre }}</div>
        </template>
      </q-field>
      <q-field borderless label="Estado" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ estados[estado - 1].nombre }}</div>
        </template>
      </q-field>
      <q-field borderless label="Municipio" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ municipios[municipio - 1].nombre }}</div>
        </template>
      </q-field>
      <q-field borderless label="Parroquia" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ parroquias[parroquia - 1].nombre }}</div>
        </template>
      </q-field>
    </div>
    <div class="col">
      <div class="text-h6 q-ml-xl">
        <q-icon name="supervised_user_circle" />Jefe de calle
      </div>
      <q-field borderless label="Nombre" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ jefeSector[0].nombre }}</div>
        </template>
      </q-field>
      <q-field borderless label="Cedula" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ jefeSector[0].cedula }}</div>
        </template>
      </q-field>
      <q-field borderless label="Codigo" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ jefeSector[0].codigo }}</div>
        </template>
      </q-field>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters("sectores", ["nombre", "estado", "municipio", "parroquia"]),
    ...mapGetters("personas", ["jefeSector"]),
    ...mapGetters("global", ["estados", "municipios", "parroquias"])
  }
};
</script>

<style lang="scss" scoped>
</style>