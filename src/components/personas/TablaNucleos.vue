<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :visible-columns="visibleColumns"
      title="Nucleos"
      :data="nucleos"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="cargandoNucleos"
      selection="single"
      :selected.sync="_nucleo"
      no-data-label="Sin registro de nucleos"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="negative" />
      </template>
      <template v-slot:top-right>
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
  name: "TablaNucleos",
  data() {
    return {
      filter: "",
      visibleColumns: ["cedula", "nombre", "direccion", "sector"],
      columns: [
        {
          name: "cedula",
          label: "Cedula",
          field: "cedula"
        },
        {
          name: "nombre",
          label: "Nombre",
          field: "nombre"
        },
        {
          name: "direccion",
          label: "Direccion",
          field: "direccion"
        },
        {
          name: "sector",
          label: "Sector",
          field: "sector"
        },
        {
          name: "id",
          label: "Identificador",
          field: "id"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("personas", ["updateNucleoSel"])
  },
  computed: {
    ...mapGetters("personas", ["nucleos", "nucleoSel", "cargandoNucleos"]),
    _nucleo: {
      get() {
        return this.nucleoSel;
      },
      set(value) {
        this.updateNucleoSel(value);
      }
    }
  }
};
</script>
