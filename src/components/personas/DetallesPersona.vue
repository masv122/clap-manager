<template>
  <div>
    <detalles-integrante
      :id="id"
      v-if="!!tipoPersona && tipoPersona.value === 'integrante'"
    />
    <detalles-nucleo
      :id="id"
      v-if="!!tipoPersona && tipoPersona.value === 'nucleo'"
    />
    <detalles-jefe-calle v-if="!!tipoPersona && tipoPersona.value === 'jefe'" />
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import DetallesIntegrante from "components/personas/DetallesIntegrante.vue";
  import DetallesNucleo from "components/personas/DetallesNucleo.vue";
  import DetallesJefeCalle from "components/personas/DetallesJefeCalle.vue";
  export default {
    name: "DetallesPersona",
    props: {
      tipo: {
        type: String,
        default: "",
      },
      id: { type: [String, Number], default: null },
    },
    components: {
      DetallesIntegrante,
      DetallesNucleo,
      DetallesJefeCalle,
    },
    computed: {
      ...mapGetters("personas", [
        "tipoPersona",
        "integrante",
        "buscarIntegrante",
        "buscarNucleo",
        "buscarJefe",
      ]),
    },
    methods: {
      ...mapMutations("personas", [
        "updateTipoPersona",
        "updateIntegrante",
        "updateJefe",
        "updateNucleo",
      ]),
    },
    mounted() {
      if (!!this.tipo && !!this.id) {
        this.updateTipoPersona({ value: this.tipo });
      }
    },
  };
</script>

<style lang="scss" scoped></style>
