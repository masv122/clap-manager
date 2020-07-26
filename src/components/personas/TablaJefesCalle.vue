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
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">{{ col.label }}</q-th>
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">{{ col.value }}</q-td>
          <q-td auto-width>
            <q-btn
              flat
              round
              dense
              icon="more_vert"
              @click="updateTipoPersona({value: 'jefe'});updateJefe(props.row)"
            >
              <menu-registros />
            </q-btn>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card>
            <q-card-section>
              <q-btn
                flat
                round
                dense
                icon="more_horiz"
                @click="updateTipoPersona({value: 'jefe'});updateJefe(props.row)"
              >
                <menu-registros />
              </q-btn>
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuRegistros from "components/MenuRegistros.vue";
export default {
  name: "TablaJefesCalle",
  components: {
    MenuRegistros
  },
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
        "sector"
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
          field: "id"
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
          field: row => this.buscarSector(row.sector).nombre
        }
      ]
    };
  },
  methods: {
    ...mapMutations("personas", ["updateJefe", "updateTipoPersona"]),
    confirmacion() {},
    computed: {
      ...mapGetters("personas", ["jefes", "jefe", "cargandoPersonas"]),
      ...mapGetters("sectores", ["buscarSector"])
    }
  }
};
</script>
