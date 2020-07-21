<template>
  <div>
    <div class="column">
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="info" />Informacion personal
        </div>
        <InformacionPersonal
          :nombre="jefe.nombre"
          :apellido="jefe.apellido"
          :cedula="jefe.id"
          :telefono="jefe.telefono"
        />
        <div class="text-h6 q-ml-xl">
          <q-icon name="supervised_user_circle" />Informacion del jefe
        </div>
        <q-field borderless label="Codigo" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">{{ jefe.codigo }}</div>
          </template>
        </q-field>
        <q-field borderless label="Direccion" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">{{ jefe.direccion }}</div>
          </template>
        </q-field>
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="place" />Sector
        </div>
        <informacion-sector
          :nombre="!!jefe.sector ? buscarSector(jefe.sector).nombre : 'Sin sector asignado'"
          :estado="!!jefe.sector ? buscarSector(jefe.sector).estado : 'Sin sector asignado'"
          :municipio="!!jefe.sector ? buscarSector(jefe.sector).municipio : 'Sin sector asignado'"
          :parroquia="!!jefe.sector ? buscarSector(jefe.sector).parroquia : 'Sin sector asignado'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InformacionPersonal from "components/personas/InformacionPersonal.vue";
import InformacionSector from "components/sectores/InformacionSector.vue";
export default {
  name: "DetallesJefeCalle",
  components: {
    InformacionPersonal,
    InformacionSector
  },
  computed: {
    ...mapGetters("personas", ["jefe"]),
    ...mapGetters("sectores", ["buscarSector"])
  }
};
</script>

<style lang="scss" scoped>
</style>
