<template>
  <q-dialog
    v-model="_detallesPersona"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white q-mb-md">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="article" class="q-mr-md" />Detalles Persona
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-pt-none">
        <detalles-persona />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DetallesPersona from "components/personas/DetallesPersona.vue";
export default {
  name: "DialogDetallesPersona",
  components: {
    DetallesPersona,
  },
  computed: {
    ...mapGetters("personas", [
      "detallesPersona",
    ]),
    _detallesPersona: {
      get() {
        return this.detallesPersona;
      },
      set(value) {
        this.updateDetallesPersona(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateDetallesPersona"])
  }
};
</script>

<style lang="scss" scoped>
</style>
