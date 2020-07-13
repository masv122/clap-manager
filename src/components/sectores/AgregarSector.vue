<template>
  <div>
    <q-dialog
      v-model="_agregarSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
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
          <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
            <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
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
              <q-input
                v-model="$v.datos.nombre.$model"
                type="text"
                error-message="Debe escribir un nombre para el sector"
                :error="$v.datos.nombre.$invalid"
                label-color="negative"
                color="negative"
                label="Ingrese nombre del sector"
              />
              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  color="primary"
                  :disable="$v.datos.$invalid"
                  icon-right="chevron_right"
                  label="Siguiente"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Seleccione un jefe de calle"
              caption="Optional"
              icon="supervised_user_circle"
              :done="step > 2"
            >
              <TablaJefesDeCalleGrid />
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 1"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  @click="step = 3"
                  color="primary"
                  icon-right="chevron_right"
                  label="Siguiente"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step :name="3" title="Confirme la informacion" icon="check">
              <div class="row">
                <div class="col">
                  <div class="text-h6 q-ml-xl">
                    <q-icon name="info" />Datos del sector
                  </div>
                  <q-field borderless label="Direccion" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Direccion</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Nombre" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Nombre</div>
                    </template>
                  </q-field>
                </div>
                <div class="col">
                  <div class="text-h6 q-ml-xl">
                    <q-icon name="supervised_user_circle" />Jefe de calle
                  </div>
                  <q-field borderless label="Nombre" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Nombre</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Cedula" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Cedula</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Codigo" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Codigo</div>
                    </template>
                  </q-field>
                </div>
              </div>
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 2"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  color="positive"
                  icon-right="check"
                  label="Confirmar"
                  @click="confirmarSector"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Sector from "src/class/sector";
import * as API from 'src/mixins/API';
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
export default {
  name: "AgregarSector",
  components: {
    TablaJefesDeCalleGrid
  },
  data() {
    return {
      datos: {
        estado: null,
        municipio: null,
        parroquia: null,
        nombre: ""
      },
      estadosOpt: null,
      municipiosOpt: null,
      parroquiasOpt: null,
      text: "",
      step: 1
    };
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
  computed: {
    ...mapGetters("sectores", ["agregar"]),
    ...mapGetters("global", [
      "estados",
      "municipios",
      "municipiosEnEstado",
      "parroquias",
      "parroquiasEnMunicipio"
    ]),
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
    ...mapMutations("sectores", ["updateAgregar"]),
    ...mapActions("sectores", ["guardarSector"]),
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
    async confirmarSector() {
      try {
        const sector = new Sector(
          this.datos.nombre,
          this.estados[this.datos.estado - 1].nombre,
          this.municipios[this.datos.municipio - 1].nombre,
          this.parroquias[this.datos.parroquia - 1].nombre,
        );
        const resultado = await API.agregarSector(sector);
        let mensaje = !!resultado
          ? "Sector Agregado"
          : "No se pudo agregar el sector";
        let icon = !!resultado ? "check" : "close";
        this.$q.notify({
          message: mensaje,
          icon: icon
        });
        if (resultado) this.updateAgregar();
      } catch (error) {
        alert(error);
      }
    },
    reset() {
      this.datos.estado = null;
      this.datos.municipio = null;
      this.datos.parroquia = null;
      this.datos.nombre = "";
      this.step = 1;
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