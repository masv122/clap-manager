<template>
  <q-card>
    <q-card-section>
      <ModificarIntegrante
        v-if="!!tipoPersona && tipoPersona.value === 'integrante'"
      />
      <ModificarNucleo v-if="!!tipoPersona && tipoPersona.value === 'nucleo'" />
      <ModificarJefe v-if="!!tipoPersona && tipoPersona.value === 'jefe'" />
    </q-card-section>
    <q-separator />
    <q-card-actions align="center">
      <q-btn
        label="Guardar"
        icon="save"
        type="submit"
        color="primary"
        @click="confirmarPersona('modificar')"
        class="q-ml-sm"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
  import ModificarIntegrante from "components/personas/ModificarIntegrante.vue";
  import confirmarPersona from "src/mixins/confirmarPersona";
  import ModificarNucleo from "components/personas/ModificarNucleo.vue";
  import ModificarJefe from "components/personas/ModificarJefe.vue";
  import { mapGetters, mapMutations } from "vuex";
  export default {
    name: "ModificarPersona",
    components: {
      ModificarIntegrante,
      ModificarNucleo,
      ModificarJefe,
    },
    mixins: [confirmarPersona],
    data() {
      return {};
    },
    computed: {
      ...mapGetters("sectores", ["sector"]),
      ...mapGetters("personas", [
        "nombre",
        "apellido",
        "cedula",
        "telefono",
        "fechaNacimiento",
        "detallesPersona",
        "integrante",
        "nucleo",
        "jefe",
        "nombreNucleo",
        "direccion",
        "codigo",
        "tipoPersona",
        "esJefeFamiliar",
      ]),
    },
    methods: {
      ...mapMutations("sectores", ["updateSector"]),
      ...mapMutations("personas", [
        "updateNombre",
        "updateApellido",
        "updateCedula",
        "updateTelefono",
        "updateFechaNacimiento",
        "updateTipoPersona",
        "updateNucleo",
        "updateNombreNucleo",
        "updateDireccion",
        "updateCodigo",
      ]),
      reset() {
        this.step = 1;
        this.updateTipoPersona(null);
        this.updateNucleo(null);
        this.updateSector(null);
        this.updateNombreNucleo(null);
        this.updateDireccion(null);
        this.updateCodigo(null);
        this.updateNombre(null);
        this.updateApellido(null);
        this.updateCedula(null);
        this.updateTelefono(null);
        this.updateFechaNacimiento(null);
      },
    },
    beforeDestroy() {
      this.reset();
    },
  };
</script>

<style lang="scss" scoped></style>
