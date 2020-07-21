<template>
  <div class="q-gutter-md">
    <div v-if="!modificar" class="text-h5 q-ml-xs q-pt-md">
      <q-icon name="group" />Crear nuevo nucleo
    </div>
    <q-separator v-if="!modificar" color="negative" inset />
    <datos-basicos-nucleo />
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
import DatosBasicosNucleo from "components/personas/DatosBasicosNucleo.vue";
export default {
  name: "CrearNucleo",
  components: {
    DatosBasicosNucleo
  },
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
    _sector: {
      required
    },
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector"]),
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    },
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateDatosTipoPersonaInvalido",
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