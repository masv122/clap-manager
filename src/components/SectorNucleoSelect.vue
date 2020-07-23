<template>
  <div class="row q-gutters-md">
    <div :class="soloSector ? ['col-12'] : isInline">
      <q-select
        label="Sector"
        use-input
        dense
        options-dense
        behavior="menu"
        hide-selected
        fill-input
        lazy-rules
        input-debounce="0"
        :options="sectoresOpt"
        @filter="filterSectores"
        label-color="negative"
        color="negative"
        v-model="$v._sector.$model"
        option-value="id"
        option-label="nombre"
        emit-value
        error-message="Debe seleccionar un sector"
        :error="sectorRequerido ? $v._sector.$invalid : false"
        map-options
        class="q-mr-md"
        clearable
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
    <div :class="isInline">
      <q-select
        label="Nucleo"
        use-input
        dense
        options-dense
        behavior="menu"
        hide-selected
        fill-input
        lazy-rules
        input-debounce="0"
        :options="nucleosOpt"
        @filter="filterNucleos"
        label-color="negative"
        color="negative"
        v-model="$v._nucleo.$model"
        option-value="id"
        option-label="nombre"
        emit-value
        map-options
        error-message="Debe seleccionar un nucleo"
        :error="nucleoRequerido ? $v._nucleo.$invalid : false"
        class="q-mr-md"
        v-if="!soloSector"
        clearable
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "SectorNucleoSelect",
  props: {
    soloSector: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    nucleoRequerido: {
      type: Boolean,
      default: false
    },
    sectorRequerido: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sectoresOpt: [],
      nucleosOpt: []
    };
  },
  validations: {
    _sector: {
      required
    },
    _nucleo: {
      required
    }
  },
  computed: {
    ...mapGetters("personas", ["nucleos", "nucleo", "nucleosSector"]),
    ...mapGetters("sectores", ["sectores", "sector"]),
    isInline() {
      return this.inline ? ["col-6"] : ["col-12"];
    },
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    },
    _nucleo: {
      get() {
        return this.nucleo;
      },
      set(value) {
        this.updateNucleo(value);
      }
    }
  },
  watch: {
    async sector(newValue, oldValue) {
      if (newValue !== oldValue) this.nucleosOpt = this.nucleosSector(newValue);
      this.updateNucleo(null);
    },
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateNucleoSelectInvalido(newValue._nucleo.$invalid);
        this.updateSectorSelectInvalido(newValue._sector.$invalid);
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateNucleo"]),
    ...mapMutations("global", [
      "updateNucleoSelectInvalido",
      "updateSectorSelectInvalido"
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

<style lang="scss" scoped>
</style>