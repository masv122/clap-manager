<template>
  <div class="q-gutter-md">
    <div v-if="!modificar" class="text-h5 q-ml-xs q-pt-md">
      <q-icon name="group" />Crear nuevo nucleo
    </div>
    <q-separator v-if="!modificar" color="negative" inset />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._nombreNucleo.$model"
      error-message="Debe proporcionar un nombre para el nucleo"
      :error="$v._nombreNucleo.$invalid"
      type="text"
      label="Nombre"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._direccion.$model"
      error-message="Debe proporcionar una direccion para el nucleo"
      :error="$v._direccion.$invalid"
      type="text"
      label="Direccion"
    />
    <div class="text-h5 q-ml-xs q-pt-xs">
      <q-icon name="place" />Asignacion de sector
    </div>
    <q-separator color="negative" inset />
    <q-select
      label="Sector"
      error-message="Debe seleccionar un sector al nucleo"
      :error="$v._sector.$invalid"
      use-input
      behavior="menu"
      hide-selected
      fill-input
      lazy-rules
      :rules="[ val => val !== null && val !== '' || 'Seleccione un sector']"
      input-debounce="0"
      :options="opciones"
      @filter="filterFn"
      style="padding-bottom: 32px"
      label-color="negative"
      color="negative"
      v-model="$v._sector.$model"
      option-value="id"
      option-label="nombre"
      emit-value
      map-options
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
          <q-item-section>
            <q-item-label v-html="scope.opt.nombre" />
            <q-item-label caption>{{ scope.opt.getDirecion() }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">No results</q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "CrearNucleo",
  props: {
    modificar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opciones: []
    };
  },
  watch: {
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateDatosTipoPersonaInvalido(newValue.$invalid);
      }
    }
  },
  validations: {
    _nombreNucleo: {
      required
    },
    _sector: {
      required
    },
    _direccion: {
      required
    }
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector"]),
    ...mapGetters("personas", ["nombreNucleo", "direccion"]),
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    },
    _nombreNucleo: {
      get() {
        return this.nombreNucleo;
      },
      set(value) {
        this.updateNombreNucleo(value);
      }
    },
    _direccion: {
      get() {
        return this.direccion;
      },
      set(value) {
        this.updateDireccion(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateNombreNucleo",
      "updateDatosTipoPersonaInvalido",
      "updateDireccion"
    ]),
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.opciones = this.sectores.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    }
  },
  created() {
    this.opciones = this.sectores;
  }
};
</script>

<style lang="scss" scoped>
</style>