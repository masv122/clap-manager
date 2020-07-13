<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :visible-columns="visibleColumns"
      title="Integrantes"
      :data="_integrantes"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="cargandoPersonas"
      selection="single"
      :selected.sync="_integrante"
      no-data-label="Sin registro de integrantes"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="negative" />
      </template>
      <template v-slot:top-right>
        <q-select
          label="Sector"
          use-input
          outlined
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
          v-model="sector"
          option-value="id"
          option-label="nombre"
          emit-value
          map-options
          class="q-mr-md"
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
          use-input
          outlined
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
          v-model="nucleo"
          option-value="id"
          option-label="nombre"
          emit-value
          map-options
          class="q-mr-md"
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
        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
          class="q-mr-md"
        />
        <q-input dense debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TablaIntegrantes",
  data() {
    return {
      filter: "",
      nucleo: null,
      sector: null,
      sectoresOpt: [],
      nucleosOpt: [],
      visibleColumns: [
        "nombre",
        "apellido",
        "cedula",
        "telefono",
        "nucleo",
        "fechaNacimiento"
      ],
      columns: [
        {
          name: "nombre",
          label: "Nombre(s)",
          field: "nombre"
        },
        {
          name: "apellido",
          label: "Apellido(s)",
          field: "apellido"
        },
        {
          name: "cedula",
          label: "Cedula",
          field: "cedula"
        },
        {
          name: "telefono",
          label: "Telefono",
          field: "telefono"
        },
        {
          name: "nucleo",
          label: "Nucleo",
          field: "nucleo"
        },
        {
          name: "fechaNacimiento",
          label: "Nacimiento",
          field: "fechaNacimiento"
        },
        {
          name: "id",
          label: "Identificador",
          field: "id"
        }
      ]
    };
  },
  watch: {
    sector(newValue, oldValue) {
      if (newValue !== oldValue) this.nucleosOpt = this.nucleosSector(newValue);
    }
  },
  methods: {
    ...mapMutations("personas", ["updateIntegranteSel"]),
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
  computed: {
    ...mapGetters("personas", [
      "integrantes",
      "integranteSel",
      "cargandoPersonas",
      "integrantesNucleo",
      "nucleos",
      "nucleosSector"
    ]),
    ...mapGetters("sectores", ["sectores"]),
    _integrante: {
      get() {
        return this.integranteSel;
      },
      set(value) {
        this.updateIntegranteSel(value);
      }
    },
    _integrantes() {
      return this.nucleo
        ? this.integrantesNucleo(this.nucleo)
        : this.integrantes;
    }
  },
  created() {
    this.sectoresOpt = this.sectores;
    this.nucleosOpt = this.nucleos;
  }
};
</script>
