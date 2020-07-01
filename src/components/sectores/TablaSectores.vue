<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :data="sectores"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-left></template>
      <template v-slot:top-right>
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
import { mapGetters } from "vuex";
export default {
  name: "TablaSectores",
  data() {
    return {
      filter: "",
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
        }
      ]
    };
  },
  computed: {
    ...mapGetters("sectores", ["sectores"])
  }
};
</script>
