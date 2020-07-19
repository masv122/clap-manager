<template>
  <div>
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
    <q-select
      label="Nucleo"
      error-message="Debe seleccionar un nucleo"
      :error="$v._nucleo.$invalid"
      use-input
      behavior="menu"
      hide-selected
      fill-input
      lazy-rules
      :rules="[ val => val !== null && val !== '' || 'Seleccione un nucleo']"
      input-debounce="0"
      :options="nucleosOpt"
      @filter="filterNucleos"
      style="padding-bottom: 32px"
      label-color="negative"
      color="negative"
      v-model="$v._nucleo.$model"
      option-value="id"
      option-label="nombre"
      emit-value
      map-options
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
          <q-item-section>
            <q-item-label v-html="scope.opt.cedula" />
            <q-item-label caption>{{ scope.opt.nombre }}</q-item-label>
            <q-item-label caption>{{ scope.opt.direccion }}</q-item-label>
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
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations} from "vuex"
export default {
  name: "SeleccionarNucleo",
    data() {
    return {
      sectoresOpt: [],
      nucleosOpt: []
    };
  },
  validations: {
    _nucleo: {
      required
    }
  },
  watch: {
    sector(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.nucleosOpt = this.nucleosSector(newValue);
        this.updateNucleo(null);
      }
    },
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateDatosTipoPersonaInvalido(newValue.$invalid);
      }
    }
  },
  computed: {
   ...mapGetters("personas", [
      "nucleos",
      "nucleo",
      "nucleosSector",
      "buscarNucleo"
    ]),
    ...mapGetters("sectores", ["sectores", "sector"]),
    _nucleo: {
      get() {
        return this.nucleo;
      },
      set(value) {
        this.updateNucleo(value);
      }
    },
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", [
      "updateNucleo",
      "updateDatosTipoPersonaInvalido"
    ]),
    ...mapMutations("sectores", ["updateSector"]),
    filterSectores(val, update, abort) {
      let opciones = this.sectores;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.sectoresOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterNucleos(val, update, abort) {
      let opciones = this.nucleos;
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
    this.nucleosOpt = this.nucleos;
  }
};
</script>

<style>
</style>