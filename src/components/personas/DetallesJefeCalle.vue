<template>
  <div class="column">
    <informacion-personal
      modificar
      :nombre="jefe.nombre"
      :apellido="jefe.apellido"
      :cedula="jefe.id"
      :telefono="jefe.telefono"
      class="q-mt-xl col"
    />

    <informacion-jefe
      v-if="!!sector"
      :nombre="!!sector.jefe ? buscarJefe(sector.jefe).nombre : 'sin jefe de calle asignado'"
      :cedula="!!sector.jefe ? buscarJefe(sector.jefe).cedula : null "
      :codigo="!!sector.jefe ? buscarJefe(sector.jefe).codigo : 'sin jefe de calle asignado'"
      :direccion="!!sector.jefe ? buscarJefe(sector.jefe).direccion : 'sin jefe de calle asignado'"
      class="q-mt-xl col"
    />
    <informacion-sector
      :nombre="!!jefe.sector ? buscarSector(jefe.sector).nombre : 'Sin sector asignado'"
      :estado="!!jefe.sector ? buscarSector(jefe.sector).estado : 'Sin sector asignado'"
      :municipio="!!jefe.sector ? buscarSector(jefe.sector).municipio : 'Sin sector asignado'"
      :parroquia="!!jefe.sector ? buscarSector(jefe.sector).parroquia : 'Sin sector asignado'"
      class="q-mt-xl col"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InformacionPersonal from "components/personas/InformacionPersonal.vue";
import InformacionSector from "components/sectores/InformacionSector.vue";
import InformacionJefe from "components/personas/InformacionJefe.vue";
export default {
  name: "DetallesJefeCalle",
  components: {
    InformacionPersonal,
    InformacionSector,
    InformacionJefe
  },
  computed: {
    ...mapGetters("personas", ["jefe"]),
    ...mapGetters("sectores", ["sector", "buscarSector"])
  }
};
</script>

<style lang="scss" scoped>
</style>
