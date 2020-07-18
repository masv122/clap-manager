<template>
  <div>
    <q-select
      label-color="negative"
      color="negative"
      label="Estado"
      v-model="estadoModel"
      use-input
      option-value="id"
      option-label="nombre"
      emit-value
      map-options
      behavior="menu"
      hide-selected
      fill-input
      error-message="Debe seleccionar un estado"
      :error="modificar ? $v._estadoMod.$invalid : $v._estado.$invalid"
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
      v-model="municipioModel"
      error-message="Debe seleccionar un municipio"
      :error="modificar ? $v._municipioMod.$invalid : $v._municipio.$invalid"
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
      v-model="parroquiaModel"
      error-message="Debe seleccionar una parroquia"
      :error="modificar ? $v._parroquiaMod.$invalid : $v._parroquia.$invalid"
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
      v-model="nombreModel"
      type="text"
      error-message="Debe escribir un nombre para el sector"
      :error="modificar ? $v._nombreMod.$invalid : $v._nombre.$invalid"
      label-color="negative"
      color="negative"
      label="Ingrese nombre del sector"
    />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
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
      parroquiasOpt: null,
      estadoModWatcher: null,
      municipioModWatcher: null
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
    },
    _estadoMod: {
      required
    },
    _municipioMod: {
      required
    },
    _parroquiaMod: {
      required
    },
    _nombreMod: {
      required
    }
  },
  computed: {
    ...mapGetters("sectores", [
      "estado",
      "municipio",
      "parroquia",
      "nombre",
      "sector",
      "estadoMod",
      "municipioMod",
      "parroquiaMod",
      "nombreMod"
    ]),
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
    estadoModel: {
      get() {
        return this.modificar
          ? this.$v._estadoMod.$model
          : this.$v._estado.$model;
      },
      set(value) {
        this.modificar
          ? (this.$v._estadoMod.$model = value)
          : (this.$v._estado.$model = value);
      }
    },
    municipioModel: {
      get() {
        return this.modificar
          ? this.$v._municipioMod.$model
          : this.$v._municipio.$model;
      },
      set(value) {
        this.modificar
          ? (this.$v._municipioMod.$model = value)
          : (this.$v._municipio.$model = value);
      }
    },
    parroquiaModel: {
      get() {
        return this.modificar
          ? this.$v._parroquiaMod.$model
          : this.$v._parroquia.$model;
      },
      set(value) {
        this.modificar
          ? (this.$v._parroquiaMod.$model = value)
          : (this.$v._parroquia.$model = value);
      }
    },
    nombreModel: {
      get() {
        return this.modificar
          ? this.$v._nombreMod.$model
          : this.$v._nombre.$model;
      },
      set(value) {
        this.modificar
          ? (this.$v._nombreMod.$model = value)
          : (this.$v._nombre.$model = value);
      }
    },
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
    },
    _estadoMod: {
      get() {
        return this.estadoMod;
      },
      set(value) {
        this.updateEstadoMod(value);
      }
    },
    _municipioMod: {
      get() {
        return this.municipioMod;
      },
      set(value) {
        this.updateMunicipioMod(value);
      }
    },
    _parroquiaMod: {
      get() {
        return this.parroquiaMod;
      },
      set(value) {
        this.updateParroquiaMod(value);
      }
    },
    _nombreMod: {
      get() {
        return this.nombreMod;
      },
      set(value) {
        this.updateNombreMod(value);
      }
    }
  },
  watch: {
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        const value = this.modificar
          ? newValue._estadoMod.$invalid ||
            newValue._municipioMod.$invalid ||
            newValue._parroquiaMod.$invalid ||
            newValue._nombreMod.$invalid
          : newValue._estado.$invalid ||
            newValue._municipio.$invalid ||
            newValue._parroquia.$invalid ||
            newValue._nombre.$invalid;
        this.updateDatosBasicosSectorInvalidos(value);
      }
    },
    estado: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.updateMunicipio(null);
        this.municipiosOpt = this.municipiosEnEstado(newValue);
      }
    },
    municipio: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.updateParroquia(null);
        this.parroquiasOpt = this.parroquiasEnMunicipio(newValue);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", [
      "updateNombre",
      "updateEstado",
      "updateMunicipio",
      "updateParroquia",
      "updateSector",
      "updateEstadoMod",
      "updateMunicipioMod",
      "updateParroquiaMod",
      "updateNombreMod",
      "updateDatosBasicosSectorInvalidos"
    ]),
    onClick() {
      console.log(this.$v);
    },
    filterEstados(val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.estadosOpt = this.estados.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterMunicipio(val, update, abort) {
      let estado = this.modificar ? this.estadoMod : this.estado;
      const opts = !!estado ? this.municipiosEnEstado(estado) : this.municipios;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.municipiosOpt = opts.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterParroquia(val, update, abort) {
      let municipio = this.modificar ? this.municipioMod : this.municipio;
      const opts = !!municipio
        ? this.parroquiasEnMunicipio(municipio)
        : this.parroquias;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.parroquiasOpt = opts.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    establecerDatos() {
      this.updateEstadoMod(this.estadoPorNombre(this.sector.estado).id);
      this.updateMunicipioMod(this.municipioPorNombre(this.sector.municipio).id);
      this.updateParroquiaMod(this.parroquiasPorNombre(this.sector.parroquia).id);
      this.updateNombreMod(this.sector.nombre);
    }
  },
  async mounted() {
    this.estadosOpt = this.estados;
    this.municipiosOpt = this.municipios;
    this.parroquiasOpt = this.parroquias;
    if (this.modificar) this.establecerDatos();
    this.estadoModWatcher = this.$watch("estadoMod", (newValue, oldValue) => {
      if (newValue !== oldValue) this.updateMunicipioMod(null);
      this.municipiosOpt = this.municipiosEnEstado(newValue);
    });
    this.municipioModWatcher = this.$watch(
      "municipioMod",
      (newValue, oldValue) => {
        if (newValue !== oldValue) this.updateParroquiaMod(null);
        this.parroquiasOpt = this.parroquiasEnMunicipio(newValue);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>