<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :visible-columns="visibleColumns"
      title="Jefes de Calle"
      :data="jefes"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="cargandoPersonas"
      selection="single"
      :selected.sync="_jefe"
      no-data-label="Sin registro de jefes"
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
  name: "TablaJefesCalle",
  data() {
    return {
      filter: "",
      visibleColumns: [
        "nombre",
        "apellido",
        "cedula",
        "telefono",
        "fechaNacimiento",
        "codigo",
        "direccion",
        "sector",
        "id"
      ],
      columns: [
        {
          name: "nombre",
          label: "Nombre",
          field: "nombre"
        },
        {
          name: "apellido",
          label: "Apellido",
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
          name: "fechaNacimiento",
          label: "Nacimiento",
          field: "fechaNacimiento"
        },
        {
          name: "codigo",
          label: "Codigo",
          field: "codigo"
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
    ...mapMutations("personas", ["updateJefeSel"])
  },
  computed: {
    ...mapGetters("personas", ["jefes", "jefeSel", "cargandoPersonas"]),
    _jefe: {
      get() {
        return this.jefeSel;
      },
      set(value) {
        this.updateJefeSel(value);
      }
    }
  }
};
</script>
