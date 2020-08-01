<template>
  <div class="column q-gutter-y-xl q-mt-xs">
    <informacion-personal
      modificar
      :nombre="!!_integrante ? _integrante.nombre : ''"
      :apellido="!!_integrante ? _integrante.apellido : ''"
      :cedula="!!_integrante ? _integrante.id : 0"
      :telefono="!!_integrante ? _integrante.telefono : ''"
      class="col"
    />
    <informacion-nucleo
      :nombre-nucleo="!!_integrante ? buscarNucleo(_integrante.nucleo).nombre : ''"
      :nombre="!!_integrante ? buscarIntegrante(buscarNucleo(_integrante.nucleo).cedula).nombre : ''"
      :cedula="!!_integrante ? buscarNucleo(_integrante.nucleo).cedula : 0"
      :direccion="!!_integrante ? buscarNucleo(_integrante.nucleo).direccion : ''"
      :id="!!_integrante ? buscarNucleo(_integrante.nucleo).id : ''"
      class="col"
    />
    <informacion-sector
      :nombre="!!_integrante ? buscarSector(buscarNucleo(_integrante.nucleo).sector).nombre : ''"
      :estado="!!_integrante ? buscarSector(buscarNucleo(_integrante.nucleo).sector).estado : ''"
      :municipio="!!_integrante ? buscarSector(buscarNucleo(_integrante.nucleo).sector).municipio : ''"
      :parroquia="!!_integrante ? buscarSector(buscarNucleo(_integrante.nucleo).sector).parroquia : ''"
      :id="!!_integrante ? buscarSector(buscarNucleo(_integrante.nucleo).sector).id : ''"
      class="col"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InformacionPersonal from "components/personas/InformacionPersonal.vue";
import InformacionNucleo from "components/personas/InformacionNucleo.vue";
import InformacionSector from "components/sectores/InformacionSector.vue";
export default {
  name: "DetallesIntegrante",
  props: {
    id: {
      type: [Number, String],
      default: null,
    },
  },
  components: {
    InformacionPersonal,
    InformacionNucleo,
    InformacionSector,
  },
  computed: {
    ...mapGetters("personas", [
      "integrante",
      "buscarNucleo",
      "buscarIntegrante",
    ]),
    ...mapGetters("sectores", ["buscarSector"]),
    _integrante() {
      if (!!this.buscarIntegrante(Number.parseInt(this.id)))
        this.updateIntegrante(this.buscarIntegrante(Number.parseInt(this.id)));
      return !!this.integrante
        ? this.integrante
        : this.buscarIntegrante(Number.parseInt(this.id));
    },
  },
  methods: {
    ...mapMutations("personas", ["updateIntegrante"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
