<template>
  <q-dialog
    v-model="_modificarPersona"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="edit" class="q-mr-md" />Modificar Persona
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-ma-none">
        <modificar-persona />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ModificarPersona from "components/personas/ModificarPersona.vue";
export default {
  name: "DialogModificarPersona",
  components: {
    ModificarPersona
  },
  computed: {
    ...mapGetters("personas", ["modificarPersona"]),
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
