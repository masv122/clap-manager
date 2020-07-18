<template>
  <div>
    <q-dialog
      v-model="_detallesPersona"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
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
          <DetallesIntegrante v-if="integrante"/>
          <DetallesNucleo v-if="nucleo"/>
          <DetallesJefeCalle v-if="jefe"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DetallesIntegrante from "components/personas/DetallesIntegrante.vue";
import DetallesNucleo from "components/personas/DetallesNucleo.vue";
import DetallesJefeCalle from "components/personas/DetallesJefeCalle.vue";
export default {
  name: "DetallesPersona",
  components: {
    DetallesIntegrante,
    DetallesNucleo,
    DetallesJefeCalle
  },
  computed: {
    ...mapGetters("personas", ["detallesPersona", "integrante", "nucleo", "jefe"]),
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
