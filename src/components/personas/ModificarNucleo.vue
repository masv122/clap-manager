<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="group" class="q-mr-md" />Reasignar Sector
      </div>
      <q-separator />
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
      <div class="text-h6 q-mt-md">
        <q-icon name="group" class="q-mr-md" />Reasignar Jefe Familiar
      </div>
      <q-separator />
      <q-select
        v-model="_cedula"
        use-input
        input-debounce="0"
        label="Jefe Familiar"
        :options="cedulas"
        @filter="filterSectores"
        label-color="negative"
        color="negative"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
            <q-item-section>
              <q-item-label v-html="scope.opt" />
              <q-item-label caption>{{ buscarIntegrante(scope.opt).nombre }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">Sin resultados</q-item-section>
          </q-item>
        </template>
      </q-select>
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos del nucleo
      </div>
      <q-separator />
      <datos-basicos-nucleo modificar />
    </q-form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";
import DatosBasicosNucleo from "components/personas/DatosBasicosNucleo.vue";

export default {
  name: "ModificarNucleo",
  components: {
    DatosBasicosNucleo
  },
  data() {
    return {
      cedulas: [],
      sectoresOpt: []
    };
  },
  validations: {
    _sector: {
      required
    },
    _cedula: {
      required
    }
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector"]),
    ...mapGetters("personas", ["nucleo", "cedula", "buscarIntegrante"]),
    _sector: {
      get() {
        return this.sector;
      },
      set(value) {
        this.updateSector(value);
      }
    },
    _cedula: {
      get() {
        return this.cedula;
      },
      set(value) {
        this.updateCedula(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateDatosTipoPersonaInvalido",
      "updateCedula"
    ]),
    filterSectores(val, update, abort) {
      let opciones = this.sectores;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.sectoresOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterCedulas(val, update, abort) {
      let opciones = this.nucleo.integrantes;
      update(() => {
        this.cedulas = opciones.filter(v => v === val);
      });
    }
  },
  created() {
    this.sectoresOpt = this.sectores;
    this.cedulas = this.nucleo.integrantes;
    this.updateSector(this.nucleo.sector);
    this.updateCedula(this.nucleo.cedula);
  }
};
</script>
