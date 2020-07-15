<template>
  <div>
    <q-select
      label-color="negative"
      color="negative"
      label="Estado"
      v-model="$v._estado.$model"
      use-input
      option-value="id"
      option-label="nombre"
      emit-value
      map-options
      behavior="menu"
      hide-selected
      fill-input
      error-message="Debe seleccionar un estado"
      :error="$v._estado.$invalid"
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
      v-model="$v._municipio.$model"
      error-message="Debe seleccionar un municipio"
      :error="$v._municipio.$invalid"
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
      v-model="$v._parroquia.$model"
      error-message="Debe seleccionar una parroquia"
      :error="$v._parroquia.$invalid"
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
      v-model="$v._nombre.$model"
      type="text"
      error-message="Debe escribir un nombre para el sector"
      :error="$v._nombre.$invalid"
      label-color="negative"
      color="negative"
      label="Ingrese nombre del sector"
    />
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DatosBasicosSector",
  props: {
    modificar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      estadosOpt: null,
      municipiosOpt: null,
      parroquiasOpt: null
    };
  },
  validations: {
    _estado: {
      required
    },
    _municipio: {
      required
    },
    _parroquia: {
      required
    },
    _nombre: {
      required
    }
  },
  computed: {
    ...mapGetters("sectores", ["nombre", "estado", "municipio", "parroquia"]),
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
    _estado: {
      get() {
        return this.estado;
      },
      set(value) {
        this.updateEstado(value);
      }
    },
    _municipio: {
      get() {
        return this.municipio;
      },
      set(value) {
        this.updateMunicipio(value);
      }
    },
    _parroquia: {
      get() {
        return this.parroquia;
      },
      set(value) {
        this.updateParroquia(value);
      }
    },
    _nombre: {
      get() {
        return this.nombre;
      },
      set(value) {
        this.updateNombre(value);
      }
    }
  },
  watch: {
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateDatosBasicosSectorInvalidos(newValue.$invalid);
      }
    },
    estado: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this._municipio = null;
        this.municipiosOpt = this.municipiosEnEstado(newValue);
      }
    },
    municipio: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this._parroquia = null;
        this.parroquiasOpt = this.parroquiasEnMunicipio(newValue);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", [
      "updateEstado",
      "updateMunicipio",
      "updateParroquia",
      "updateNombre",
      "sector",
      "updateDatosBasicosSectorInvalidos"
    ]),
    filterEstados(val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.estadosOpt = this.estados.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterMunicipio(val, update, abort) {
      const OPTS = !this.estado
        ? this.municipios
        : this.municipiosEnEstado(this.estado);
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.municipiosOpt = OPTS.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterParroquia(val, update, abort) {
      const OPTS = !this.municipio
        ? this.parroquias
        : this.parroquiasEnMunicipio(this.municipio);
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.parroquiasOpt = OPTS.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    establecerDatos() {
      this.estado = this.estadoPorNombre(this.sector.estado);
      this.municipio = this.municipioPorNombre(this.sector.municipio);
      this.parroquia = this.parroquiasPorNombre(this.sector.parroquia);
      this.nombre = this.sector.nombre;
    }
  },
  async created() {
    this.estadosOpt = this.estados;
    this.municipiosOpt = this.municipios;
    this.parroquiasOpt = this.parroquias;
    if (modificar) this.establecerDatos();
  }
};
</script>

<style lang="scss" scoped>
</style>