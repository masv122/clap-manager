<template>
  <div>
    <q-dialog
      v-model="_modificarSector"
      persistent
      :full-height="$q.screen.lt.sm"
      :full-width="$q.screen.lt.sm"
      @show="cargarSector"
      @hide="resetear"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="edit" class="q-mr-md" />Modificar Sector
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-ma-md">
          <q-form @submit.prevent class="q-gutter-md">
            <div class="text-h6 q-mt-md">
              <q-icon name="info" class="q-mr-md" />Datos del sector
            </div>
            <q-separator />
            <DatosBasicosSector modificar />
            <div class="text-h6 q-mt-md">
              <q-icon name="supervised_user_circle" class="q-mr-md" />Reasignar jefe de calle
            </div>
            <q-separator />
            <TablaJefesDeCalleGrid />
          </q-form>
        </q-card-section>
        <q-separator />
        <q-card-actions class="q-ma-md" align="center">
          <q-btn
            label="Guardar"
            icon="save"
            type="submit"
            color="primary"
            class="q-ml-sm"
            @click="confirmacion"
          />
          <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Sector from "src/class/sector";
import * as API from "src/mixins/API";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
import DatosBasicosSector from "components/sectores/DatosBasicosSector.vue";
export default {
  name: "ModificarSector",
  components: {
    TablaJefesDeCalleGrid,
    DatosBasicosSector
  },
  data() {
    return {
      idJefe: ""
    };
  },
  computed: {
    ...mapGetters("sectores", [
      "modificar",
      "sector",
      "estadoMod",
      "municipioMod",
      "parroquiaMod",
      "nombreMod"
    ]),
    ...mapGetters("personas", ["jefeSector", "buscarJefe"]),
    ...mapGetters("global", [
      "estados",
      "municipios",
      "parroquias",
      "municipiosEnEstado",
      "parroquiasEnMunicipio",
      "estadoPorNombre",
      "municipioPorNombre",
      "parroquiasPorNombre"
    ]),
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
    cargarSector() {
      this.idJefe = !!this.sector.jefe ? this.sector.jefe : "";
      this.updateJefeSector(
        !!this.sector.jefe ? [this.buscarJefe(this.sector.jefe)] : []
      );
    },
    resetear() {
      this.updateSector(null);
      this.updateEstadoMod(null);
      this.updateMunicipioMod(null);
      this.updateParroquiaMod(null);
      this.updateNombreMod("");
      this.idJefe = null;
      this.updateJefeSector([]);
    },
    async guardarSector() {
      try {
        const sector = new Sector(
          this.nombreMod,
          this.estados[this.estadoMod - 1].nombre,
          this.municipios[this.municipioMod - 1].nombre,
          this.parroquias[this.parroquiaMod - 1].nombre,
          this.sector.nucleos,
          this.jefeSector[0].id,
          this.sector.id,
          this.sector.rev
        );
        const resultado = await API.guardarSector(sector);
        if (this.idJefe !== this.jefeSector[0].id)
          await API.actualizarSectorJefe(resultado, sector);
        if (resultado) this.updateModificar();
      } catch (error) {
        alert("error al modificar el sector 101: " + error);
      }
    }
  },
  async created() {
    this.estadosOpt = this.estados;
    this.municipiosOpt = this.municipios;
    this.parroquiasOpt = this.parroquias;
  }
};
</script>

<style lang="scss" scoped>
</style>
