<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      :visible-columns="visibleColumns"
      title="Nucleos"
      :data="_nucleos"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="cargandoPersonas"
      no-data-label="Sin registro de nucleos"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="negative" />
      </template>
      <template v-slot:top-right>
        <sector-nucleo-select solo-sector inline v-if="!data" />
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
              @click="updateTipoPersona({value: 'nucleo'});updateNucleo(props.row)"
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
                @click="updateTipoPersona({value: 'nucleo'});updateNucleo(props.row)"
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
import SectorNucleoSelect from "components/SectorNucleoSelect.vue";
import MenuRegistros from "components/MenuRegistros.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "TablaNucleos",
  components: {
    SectorNucleoSelect,
    MenuRegistros
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
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
          field: row => this.buscarSector(row.sector).nombre
        },
        {
          name: "id",
          label: "Identificador",
          field: "id"
        },
        {
          name: "integrantes",
          label: "integrantes",
          field: row => {
            const nombres = [];
            row.integrantes.forEach(element => {
              const integrante = this.buscarIntegrante(element);
              nombres.push(integrante.nombre);
            });
            return nombres;
          }
        }
      ]
    };
  },
  methods: {
    ...mapMutations("personas", [
      "updateNucleo",
      "updateTipoPersona"
    ]),

  },
  computed: {
    ...mapGetters("personas", [
      "nucleos",
      "nucleo",
      "cargandoPersonas",
      "buscarIntegrante",
      "nucleosSector"
    ]),
    ...mapGetters("sectores", ["buscarSector", "sector"]),
    _nucleo: {
      get() {
        return this.nucleo;
      },
      set(value) {
        this.updateNucleo(value);
      }
    },
    _nucleos() {
      if (!!this.data) return this.data;
      else if (!!this.sector) return this.nucleosSector(this.sector);
      else return this.nucleos;
    }
  }
};
</script>
