<template>
  <div>
    <q-dialog
      v-model="_modificarPersona"
      persistent
      :full-height="$q.screen.lt.sm"
      :full-width="$q.screen.lt.sm"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Modificar Persona
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-ma-md">
          <ModificarIntegrante v-if="!!tipoPersona && tipoPersona.value === 'integrante'" />
          <ModificarNucleo v-if="!!tipoPersona && tipoPersona.value === 'nucleo'" />
          <ModificarJefe v-if="!!tipoPersona && tipoPersona.value === 'jefe'" />
        </q-card-section>
        <q-separator />
        <q-card-actions class="q-ma-md" align="center">
          <q-btn
            label="Guardar"
            icon="save"
            type="submit"
            color="primary"
            @click="confirmarPersona('modificar')"
            class="q-ml-sm full-width"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
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
    ModificarJefe
  },
  mixins: [confirmarPersona],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("sectores", ["sector"]),
    ...mapGetters("personas", [
      "modificarPersona",
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
      "esJefeFamiliar"
    ]),
    _modificarPersona: {
      get() {
        return this.modificarPersona;
      },
      set() {
        this.updateModificarPersona();
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateModificarPersona"])
  }
};
</script>

<style lang="scss" scoped>
</style>
