<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :visible-columns="visibleColumns"
      title="Sectores"
      :data="sectores"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="cargandoSectores"
      selection="single"
      :selected.sync="_sector"
      no-data-label="Sin registro de sectores"
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
  name: "TablaSectores",
  data() {
    return {
      filter: "",
      visibleColumns: ["nombre", "estado", "municipio", "parroquia"],
      columns: [
        {
          name: "nombre",
          label: "Nombre",
          field: "nombre"
        },
        {
          name: "estado",
          label: "Estado",
          field: "estado"
        },
        {
          name: "municipio",
          label: "Municipio",
          field: "municipio"
        },
        {
          name: "parroquia",
          label: "Parroquia",
          field: "parroquia"
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
    ...mapMutations("sectores", ["updateSectorSel"])
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sectorSel", "cargandoSectores"]),
    _sector: {
      get() {
        return this.sectorSel;
      },
      set(value) {
        this.updateSectorSel(value);
      }
    }
  }
};
</script>
