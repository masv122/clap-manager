<template>
  <q-dialog
    v-model="_detallesSector"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white q-mb-md">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="article" class="q-mr-md" />Detalles Sector
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-pt-none">
        <detalles-sector />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DetallesSector from "components/sectores/DetallesSector.vue";

export default {
  name: "DialogDetallesSector",
  components: {
    DetallesSector
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("sectores", ["detalles"]),
    _detallesSector: {
      get() {
        return this.detalles;
      },
      set(value) {
        this.updateDetalles(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateDetalles"])
  }
};
</script>

<style lang="scss" scoped>
</style>
