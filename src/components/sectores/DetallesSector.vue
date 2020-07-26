<template>
  <div class="column">
    <informacion-sector
      v-if="!!sector"
      :nombre="sector.nombre"
      :estado="sector.estado"
      :municipio="sector.municipio"
      :parroquia="sector.parroquia"
      class="q-mt-lg col"
    />
    <informacion-jefe
      v-if="!!sector"
      :nombre="!!sector.jefe ? buscarJefe(sector.jefe).nombre : 'sin jefe de calle asignado'"
      :cedula="!!sector.jefe ? buscarJefe(sector.jefe).cedula : null "
      :codigo="!!sector.jefe ? buscarJefe(sector.jefe).codigo : 'sin jefe de calle asignado'"
      :direccion="!!sector.jefe ? buscarJefe(sector.jefe).direccion : 'sin jefe de calle asignado'"
      class="q-mt-xl col"
    />
    <informacion-detallada
      :nucleos="sector.nucleos"
      :integrantes="!!integrantes ? integrantes : []"
      :pagos="!!pagos ? pagos : []"
      class="q-mt-xl col"
      v-if="!!sector"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InformacionSector from "components/sectores/InformacionSector.vue";
import InformacionJefe from "components/personas/InformacionJefe.vue";
import InformacionDetallada from "components/sectores/InformacionDetallada.vue";

export default {
  name: "DetallesSector",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  components: {
    InformacionSector,
    InformacionJefe,
    InformacionDetallada
  },
  data() {
    return {
      integrantes: [],
      pagos: []
    };
  },
  computed: {
    ...mapGetters("sectores", ["sector", "buscarSector"]),
    ...mapGetters("personas", ["buscarJefe"])
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    async cargarData() {}
  },
  async created() {
    if (!!this.id) this.updateSector(this.buscarSector(this.id));
    this.integrantes = await this.sector.getIntegrantes();
    this.pagos = await this.sector.getPagos();
  }
};
</script>

<style lang="scss" scoped>
</style>
