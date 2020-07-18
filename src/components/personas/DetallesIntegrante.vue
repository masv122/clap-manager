<template>
  <div>
    <div class="column">
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="info" />Informacion personal
        </div>
        <InformacionPersonal
          :nombre="integrante.nombre"
          :apellido="integrante.apellido"
          :cedula="integrante.cedula"
          :telefono="integrante.telefono"
        />
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="group" />Informacion del nucleo
        </div>
        <InformacionNucleo
          :nombreNucleo="buscarNucleo(integrante.nucleo).nombre"
          :nombre="buscarIntegranteCedula(buscarNucleo(integrante.nucleo).cedula).nombre"
          :cedula="buscarNucleo(integrante.nucleo).cedula"
          :direccion="buscarNucleo(integrante.nucleo).direccion"
        />
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="place" />Sector
        </div>
        <informacion-sector
          :nombre="buscarSector(buscarNucleo(integrante.nucleo).sector).nombre"
          :estado="buscarSector(buscarNucleo(integrante.nucleo).sector).estado"
          :municipio="buscarSector(buscarNucleo(integrante.nucleo).sector).municipio"
          :parroquia="buscarSector(buscarNucleo(integrante.nucleo).sector).parroquia"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InformacionPersonal from "components/personas/InformacionPersonal.vue";
import InformacionNucleo from "components/personas/InformacionNucleo.vue";
import InformacionSector from "components/sectores/InformacionSector.vue";
export default {
  name: "DetallesIntegrante",
  components: {
    InformacionPersonal,
    InformacionNucleo,
    InformacionSector
  },
  computed: {
    ...mapGetters("personas", [
      "integrante",
      "buscarNucleo",
      "buscarIntegranteCedula"
    ]),
    ...mapGetters("sectores", ["buscarSector"])
  }
};
</script>

<style lang="scss" scoped>
</style>
