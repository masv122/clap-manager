<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos Personales
        <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
      </div>
      <q-separator />
      <datos-personales />
      <div class="text-h6 q-mt-md">
        <q-icon name="group" class="q-mr-md" />Reasignar Nucleo
        <q-btn class="float-right" color="negative" icon="add" label="Crear Nucleo" />
      </div>
      <q-separator />
      <seleccionar-nucleo />
    </q-form>
  </div>
</template>

<script>
import DatosPersonales from "components/personas/DatosPersonales.vue";
import SeleccionarNucleo from "components/personas/SeleccionarNucleo.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ModificarIntegrante",
  components: {
    DatosPersonales,
    SeleccionarNucleo
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("personas", [
      "nucleos",
      "nucleo",
      "integrante",
      "buscarNucleo"
    ]),
    ...mapGetters("sectores", ["sectores"])
  },
  methods: {
    ...mapMutations("personas", [
      "updateNucleo",
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateFechaNacimiento"
    ]),
    ...mapMutations("sectores", ["updateSector"])
  },
  created() {
    this.updateSector(this.buscarNucleo(this.integrante.nucleo).sector);
    this.updateNucleo(this.integrante.nucleo);
    this.updateNombre(this.integrante.nombre);
    this.updateApellido(this.integrante.apellido);
    this.updateCedula(this.integrante.id);
    this.updateTelefono(this.integrante.telefono);
    this.updateFechaNacimiento(this.integrante.fechaNacimiento);
  }
};
</script>
