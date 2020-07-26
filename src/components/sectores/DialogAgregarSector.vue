<template>
  <q-dialog
    v-model="_agregarSector"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
    @hide="reset"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white q-mb-md">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="add" />Agregar Sector
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-pt-none">
        <agregar-sector />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import AgregarSector from "components/sectores/AgregarSector.vue";
export default {
  name: "DialogAgregarSector",
  components: {
    AgregarSector
  },
  data() {
    return {};
  },
  validations: {},
  watch: {},
  computed: {
    ...mapGetters("sectores", ["agregar"]),
    _agregarSector: {
      get() {
        return this.agregar;
      },
      set(value) {
        this.updateAgregar(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", [
      "updateAgregar",
      "updateEstado",
      "updateMunicipio",
      "updateParroquia",
      "updateNombre",
      "updateDatosBasicosSectorInvalidos"
    ]),
    ...mapMutations("personas", ["updateJefeSector"]),
    reset() {
      this.updateEstado(null);
      this.updateMunicipio(null);
      this.updateParroquia(null);
      this.updateNombre("");
      this.step = 1;
      this.updateJefeSector([]);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>