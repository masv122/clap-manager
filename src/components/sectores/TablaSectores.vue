<template>
  <q-table
    :grid="$q.screen.xs"
    class="q-mt-md"
    :visible-columns="visibleColumns"
    title="Sectores"
    :data="sectores"
    :columns="columns"
    row-key="id"
    :filter="filter"
    :loading="cargandoSectores"
    no-data-label="Sin registro de sectores"
  >
    <template v-slot:loading>
      <q-inner-loading showing color="negative" />
    </template>
    <template v-slot:top-right>
      <q-select
        v-model="visibleColumns"
        multiple
        label-color="negative"
        color="negative"
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
          <q-btn flat round dense icon="more_vert" @click="updateSector(props.row)">
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
            <q-btn flat round dense icon="more_horiz" @click="updateSector(props.row)">
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
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuRegistros from "components/MenuRegistros.vue";
export default {
  name: "TablaSectores",
  components: {
    MenuRegistros
  },
  data() {
    return {
      filter: "",
      visibleColumns: ["nombre", "estado", "municipio", "parroquia", "jefe"],
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
          name: "jefe",
          label: "Jefe de Calle",
          field: row => {
            if (!!row.jefe) {
              return this.buscarJefe(row.jefe).nombreCompleto();
            } else return "Sin jefe de calle asingado";
          }
        },
        {
          name: "id",
          label: "Identificador",
          field: "id"
        },
        ,
        {
          name: "nucleos",
          label: "nucleos",
          field: row => {
            const nombres = [];
            row.nucleos.forEach(element => {
              const nucleo = this.buscarNucleo(element);
              nombres.push(nucleo.nombre);
            });
            return nombres;
          }
        }
      ]
    };
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"])
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector", "cargandoSectores"]),
    ...mapGetters("personas", ["buscarJefe", "buscarNucleo"])
  },
};
</script>
