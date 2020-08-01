<template>
  <div class="column">
    <informacion-nucleo
      modificar
      :nombre-nucleo="!!nucleo ? nucleo.nombre : ''"
      :nombre="
        !!nucleo
          ? !!nucleo.cedula
            ? buscarIntegrante(nucleo.cedula).nombre
            : 'Sin jefe familiar, asigne uno'
          : ''
      "
      :cedula="!!nucleo ? nucleo.cedula : 0"
      :direccion="!!nucleo ? nucleo.direccion : ''"
      :id="!!nucleo ? nucleo.id : ''"
      class="col q-mt-lg"
    />
    <informacion-sector
      :nombre="!!nucleo ? buscarSector(nucleo.sector).nombre : ''"
      :estado="!!nucleo ? buscarSector(nucleo.sector).estado : ''"
      :municipio="!!nucleo ? buscarSector(nucleo.sector).municipio : ''"
      :parroquia="!!nucleo ? buscarSector(nucleo.sector).parroquia : ''"
      :id="!!nucleo ? buscarSector(nucleo.sector).id : ''"
      class="col q-mt-xl"
    />
    <informacion-detallada
      :integrantes="integrantes"
      :pagos="pagos"
      class="col q-mt-xl"
      v-if="!!nucleo"
    />
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import InformacionNucleo from "components/personas/InformacionNucleo.vue";
  import InformacionSector from "components/sectores/InformacionSector.vue";
  import InformacionDetallada from "components/InformacionDetallada.vue";
  export default {
    name: "DetallesNucleo",
    components: {
      InformacionNucleo,
      InformacionSector,
      InformacionDetallada,
    },
    props: {
      id: {
        type: [String, Number],
        default: null,
      },
    },
    data() {
      return {
        integrantes: [],
        pagos: [],
      };
    },
    computed: {
      ...mapGetters("personas", ["nucleo", "buscarIntegrante", "buscarNucleo"]),
      ...mapGetters("sectores", ["buscarSector"]),
    },
    methods: {
      ...mapMutations("personas", ["updateNucleo"]),
    },
    async mounted() {
      if (!!this.id) this.updateNucleo(this.buscarNucleo(this.id));
      const result = await this.nucleo.getRegistrosAsociados();
      this.integrantes = result.integrantes;
      this.pagos = result.pagos;
    },
  };
</script>

<style lang="scss" scoped></style>
