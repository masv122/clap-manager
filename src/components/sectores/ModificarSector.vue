<template>
  <div>
    <q-dialog
      v-model="_modificarSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
      @show="cargarSector"
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
              <q-btn
                class="float-right"
                color="negative"
                icon="redo"
                @click="cargarSector"
                label="Restablecer"
              />
            </div>
            <q-separator />
            <q-input
              v-model="$v.datos.nombre.$model"
              type="text"
              error-message="Debe escribir un nombre para el sector"
              :error="$v.datos.nombre.$invalid"
              label-color="negative"
              color="negative"
              label="Ingrese nombre del sector"
            />
            <q-select
              label-color="negative"
              color="negative"
              label="Estado"
              v-model="$v.datos.estado.$model"
              use-input
              option-value="id"
              option-label="nombre"
              emit-value
              map-options
              behavior="menu"
              hide-selected
              fill-input
              error-message="Debe seleccionar un estado"
              :error="$v.datos.estado.$invalid"
              input-debounce="0"
              :options="estadosOpt"
              @filter="filterEstados"
              style="padding-bottom: 32px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">No results</q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-select
              label-color="negative"
              color="negative"
              use-input
              v-model="$v.datos.municipio.$model"
              error-message="Debe seleccionar un municipio"
              :error="$v.datos.municipio.$invalid"
              option-value="id"
              option-label="nombre"
              emit-value
              map-options
              label="Municipio"
              behavior="menu"
              hide-selected
              fill-input
              input-debounce="0"
              :options="municipiosOpt"
              @filter="filterMunicipio"
              style="padding-bottom: 32px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">No results</q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-select
              label-color="negative"
              color="negative"
              use-input
              v-model="$v.datos.parroquia.$model"
              error-message="Debe seleccionar una parroquia"
              :error="$v.datos.parroquia.$invalid"
              option-value="id"
              option-label="nombre"
              emit-value
              map-options
              label="Parroquia"
              behavior="menu"
              hide-selected
              fill-input
              input-debounce="0"
              :options="parroquiasOpt"
              @filter="filterParroquia"
              style="padding-bottom: 32px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">No results</q-item-section>
                </q-item>
              </template>
            </q-select>
            <div class="text-h6 q-mt-md">
              <q-icon name="supervised_user_circle" class="q-mr-md" />Reasignar jefe de calle
              <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
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
            class="q-ml-sm full-width"
            @click="confirmacion"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Sector from "src/class/sector";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
export default {
  name: "ModificarSector",
  components: {
    TablaJefesDeCalleGrid
  },
  data() {
    return {
      model: null,
      text: "",
      datos: {
        estado: null,
        municipio: null,
        parroquia: null,
        nombre: ""
      },
      id: ""
    };
  },
  watch: {
    datos: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (!!newValue.estado) {
          if (newValue.estado !== oldValue.estado) this.datos.municipio = null;
          this.municipiosOpt = this.municipiosEnEstado(newValue.estado);
        }
        if (!!newValue.municipio) {
          if (newValue.municipio !== oldValue.municipio)
            this.datos.parroquia = null;
          this.parroquiasOpt = this.parroquiasEnMunicipio(newValue.municipio);
        }
      }
    }
  },
  validations: {
    datos: {
      estado: {
        required
      },
      municipio: {
        required
      },
      parroquia: {
        required
      },
      nombre: {
        required
      }
    }
  },
  computed: {
    ...mapGetters("sectores", ["modificar", "sectorSel"]),
    ...mapGetters("global", [
      "estados",
      "municipios",
      "municipiosEnEstado",
      "parroquias",
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
    ...mapMutations("sectores", ["updateModificar"]),
    ...mapActions("sectores", ["modificarSector"]),
    filterEstados(val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.estadosOpt = this.estados.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterMunicipio(val, update, abort) {
      const OPTS = !this.datos.estado
        ? this.municipios
        : this.municipiosEnEstado(this.datos.estado);
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.municipiosOpt = OPTS.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterParroquia(val, update, abort) {
      const OPTS = !this.datos.municipio
        ? this.parroquias
        : this.parroquiasEnMunicipio(this.datos.municipio);
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.parroquiasOpt = OPTS.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
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
    cargarSector() {
      this.datos.nombre = this.sectorSel[0].nombre;
      this.datos.estado = this.estadoPorNombre(this.sectorSel[0].estado);
      this.datos.municipio = this.municipioPorNombre(
        this.sectorSel[0].municipio
      );
      this.datos.parroquia = this.parroquiasPorNombre(
        this.sectorSel[0].parroquia
      );
    },
    async guardarSector() {
      try {
        const SECTOR = new Sector(
          this.datos.nombre,
          this.estados[this.datos.estado.id - 1].nombre,
          this.municipios[this.datos.municipio.id - 1].nombre,
          this.parroquias[this.datos.parroquia.id - 1].nombre,
          this.sectorSel[0].id,
          this.sectorSel[0].rev
        );
        const RESULTADO = await this.$db.local.rel.save("sector", SECTOR);
        let mensaje = !!RESULTADO
          ? "Sector Modificado"
          : "No se pudo modificar el sector";
        let icon = !!RESULTADO ? "check" : "close";
        this.$q.notify({
          message: mensaje,
          icon: icon
        });
        if (RESULTADO) this.updateModificar();
      } catch (error) {
        alert(error);
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
