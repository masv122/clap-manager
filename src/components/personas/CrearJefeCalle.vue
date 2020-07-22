<template>
  <q-form @submit.prevent :class="clasesCrear">
    <div class="text-h5 q-ml-xs q-pt-md">
      <q-icon name="supervised_user_circle" class="q-mr-md" />
      {{ modificar ? 'Informacion jefe de calle' : 'Crear Jefe de Calle' }}
    </div>
    <q-separator color="negative" inset />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._codigo.$model"
      type="text"
      label="Codigo"
      error-message="Debe escribir el codigo del jefe de calle"
      :error="$v._codigo.$invalid"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._direccion.$model"
      type="text"
      label="Direccion"
      error-message="Debe proporcionar una direccion"
      :error="$v._direccion.$invalid"
    />
    <div class="text-h5 q-ml-xs q-pt-md">
      <q-icon name="place" class="q-mr-md" />Asignar Sector
    </div>
    <q-separator color="negative" inset />
    <q-select
      label="Sector"
      use-input
      behavior="menu"
      hide-selected
      fill-input
      lazy-rules
      input-debounce="0"
      :options="sectoresOpt"
      @filter="filterSectores"
      style="padding-bottom: 32px"
      label-color="negative"
      color="negative"
      v-model="_sector"
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
  </q-form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "CrearJefeCalle",
  props: {
    modificar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { sectoresOpt: [] };
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
    _codigo: {
      required
    },
    _direccion: {
      required
    },
    _sector: {
      required
    }
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector"]),
    ...mapGetters("personas", ["codigo", "direccion"]),
    _codigo: {
      get() {
        return this.codigo;
      },
      set(value) {
        this.updateCodigo(value);
      }
    },
    _direccion: {
      get() {
        return this.direccion;
      },
      set(value) {
        return this.updateDireccion(value);
      }
    },
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    },
    clasesCrear() {
      return this.modificar ? [] : ["q-gutter-md", "q-px-md", "q-pb-md"];
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateCodigo",
      "updateDireccion",
      "updateDatosTipoPersonaInvalido"
    ]),
    filterSectores(val, update, abort) {
      let opciones = this.sectores;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.sectoresOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    }
  },
  created() {
    this.sectoresOpt = this.sectores;
  }
};
</script>

<style lang="scss" scoped>
</style>