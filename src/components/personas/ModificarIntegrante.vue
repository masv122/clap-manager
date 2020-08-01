<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos Personales
      </div>
      <q-separator />
      <formulario-datos-personales modificar />
      <div class="row">
        <div class="col-6 text-h6">
          <q-icon name="group" class="q-mr-md" />
          {{ reasignar ? 'Reasignar Nucleo': 'Crear nucleo' }}
        </div>
        <div class="col-6">
          <q-btn
            class="float-right"
            color="negative"
            icon="add"
            :label="reasignar ? 'Crear Nucleo ': 'Reasignar Nucleo'"
            @click="reasignar = !reasignar"
          >
            <q-tooltip content-class="bg-negative" content-style="font-size: 14px" v-if="reasignar">
              <q-icon name="info" size="sm" />Esta accion creara un nuevo nucleo con este integrante
            </q-tooltip>
          </q-btn>
        </div>
      </div>
      <div class="text-h6 q-mt-md"></div>
      <q-banner
        v-show="!!integrante && esJefeFamiliar(integrante.id) >= 0 && !reasignar"
        dense
        inline-actions
        class="text-white bg-red alerta"
      >
        <template v-slot:avatar>
          <q-icon name="warning" color="white" />
        </template>
        Va a reasignar el jefe familiar del nucleo.
        Debera proporcionar un nuevo jefe familiar para el mismo.
      </q-banner>
      <div v-if="reasignar">
        <q-separator />
        <seleccionar-nucleo />
      </div>
      <crear-nucleo modificar v-else />
    </q-form>
  </div>
</template>

<script>
import FormularioDatosPersonales from "components/personas/FormularioDatosPersonales.vue";
import SeleccionarNucleo from "components/personas/SeleccionarNucleo.vue";
import CrearNucleo from "components/personas/CrearNucleo.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ModificarIntegrante",
  components: {
    FormularioDatosPersonales,
    SeleccionarNucleo,
    CrearNucleo
  },
  data() {
    return {
      reasignar: true
    };
  },
  computed: {
    ...mapGetters("personas", [
      "nucleos",
      "nucleo",
      "integrante",
      "buscarNucleo",
      "esJefeFamiliar"
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
<style scoped>
</style>