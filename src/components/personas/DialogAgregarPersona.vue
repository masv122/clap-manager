<template>
  <q-dialog
    v-model="_agregarPersona"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
    @show="reset"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white q-mb-md">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="add" />Agregar Persona
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-pt-none">
        <agregar-persona />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AgregarPersona from "components/personas/AgregarPersona.vue";
export default {
  name: "DialogAgregarPersona",
  components: {
    AgregarPersona
  },
  computed: {
    ...mapGetters("personas", [
      "agregarPersona",
    ]),
    _agregarPersona: {
      get() {
        return this.agregarPersona;
      },
      set(value) {
        this.updateAgregarPersona(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateAgregarPersona",
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateFechaNacimiento",
      "updateTipoPersona",
      "updateNucleo",
      "updateNombreNucleo",
      "updateDireccion",
      "updateCodigo"
    ]),
    confirmar() {
      this.confirmarPersona();
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>