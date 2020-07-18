<template>
  <div>
    <div class="column">
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="group" />Informacion del nucleo
        </div>
        <InformacionNucleo
          :nombreNucleo="nucleo.nombre"
          :nombre="buscarIntegrante(nucleo.cedula).nombre"
          :cedula="nucleo.cedula"
          :direccion="nucleo.direccion"
        />
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="place" />Sector
        </div>
        <informacion-sector
          :nombre="buscarSector(nucleo.sector).nombre"
          :estado="buscarSector(nucleo.sector).estado"
          :municipio="buscarSector(nucleo.sector).municipio"
          :parroquia="buscarSector(nucleo.sector).parroquia"
        />
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="info" />Informacion de control
        </div>
        <q-field borderless label="Integrantes registrados" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Integrantes registrados</div>
          </template>
        </q-field>
        <q-field borderless label="Pagos registrados" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Pagos registrados</div>
          </template>
        </q-field>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InformacionNucleo from "components/personas/InformacionNucleo.vue";
import InformacionSector from "components/sectores/InformacionSector.vue";
export default {
  name: "DetallesNucleo",
  components: {
    InformacionNucleo,
    InformacionSector
  },
  computed: {
    ...mapGetters("personas", ["nucleo", "buscarIntegrante"]),
    ...mapGetters("sectores", ["buscarSector"])
  }
};
</script>

<style lang="scss" scoped>
</style>
