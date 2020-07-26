<template>
  <q-dialog
    v-model="_modificarSector"
    persistent
    :full-height="$q.screen.lt.sm"
    :full-width="$q.screen.lt.sm"
    @show="cargarSector"
    @hide="resetear"
  >
    <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
      <q-toolbar dark class="bg-negative text-white">
        <q-toolbar-title shrink>
          <div class="text-h6">
            <q-icon name="edit" class="q-mr-md" />Modificar Sector
          </div>
        </q-toolbar-title>
        <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
          <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-ma-none">
        <modificar-sector />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ModificarSector from "components/sectores/ModificarSector.vue";
export default {
  name: "DialogModificarSector",
  components: {
    ModificarSector
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("sectores", ["modificar", "sector"]),

    _modificarSector: {
      get() {
        return this.modificar;
      },
      set() {
        this.updateModificar();
      }
    }
  },
  methods: {
    ...mapMutations("sectores", [
      "updateModificar",
      "updateSector",
      "updateEstadoMod",
      "updateMunicipioMod",
      "updateParroquiaMod",
      "updateNombreMod"
    ]),
    ...mapMutations("personas", ["updateJefeSector"]),
    cargarSector() {
      this.updateJefeSector(
        !!this.sector.jefe ? [this.buscarJefe(this.sector.jefe)] : []
      );
    },
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere modificar este sector",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.guardarSector();
        });
    },
    resetear() {
      this.updateSector(null);
      this.updateEstadoMod(null);
      this.updateMunicipioMod(null);
      this.updateParroquiaMod(null);
      this.updateNombreMod("");
      this.updateJefeSector([]);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
