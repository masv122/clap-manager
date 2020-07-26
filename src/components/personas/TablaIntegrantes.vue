<template>
  <q-table
    :grid="$q.screen.xs"
    :visible-columns="visibleColumns"
    title="Integrantes"
    :data="_integrantes"
    :columns="columns"
    row-key="id"
    :filter="filter"
    :loading="cargandoPersonas"
    no-data-label="Sin registro de integrantes"
  >
    <template v-slot:loading>
      <q-inner-loading showing color="negative" />
    </template>
    <template v-slot:top-right>
      <sector-nucleo-select inline v-if="!data" />
      <q-select
        v-model="visibleColumns"
        multiple
        dense
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        label-color="negative"
        color="negative"
        :options="columns"
        option-value="name"
        options-cover
        style="min-width: 150px"
        class="q-mr-md"
      />
      <q-input color="negative" dense debounce="300" v-model="filter" placeholder="Buscar">
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
            @click="updateTipoPersona({value: 'integrante'});updateIntegrante(props.row)"
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
              @click="updateTipoPersona({value: 'integrante'});updateIntegrante(props.row)"
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
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SectorNucleoSelect from "components/SectorNucleoSelect.vue";
import MenuRegistros from "components/MenuRegistros.vue";
export default {
  name: "TablaIntegrantes",
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  components: {
    SectorNucleoSelect,
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
          field: "id"
        },
        {
          name: "telefono",
          label: "Telefono",
          field: "telefono"
        },
        {
          name: "nucleo",
          label: "Nucleo",
          field: row => this.buscarNucleo(row.nucleo).nombre
        },
        {
          name: "fechaNacimiento",
          label: "Nacimiento",
          field: "fechaNacimiento"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("personas", [
      "updateIntegrante",
      "updateCargandoPersonas",
      "updateTipoPersona",
    ]),
  },
  computed: {
    ...mapGetters("personas", [
      "integrantes",
      "cargandoPersonas",
      "integrantesNucleo",
      "nucleo",
      "buscarNucleo"
    ]),
    ...mapGetters("sectores", ["sectores", "buscarSector", "sector"]),
    _integrantes() {
      if (!!this.data) return this.data;
      else if (!!this.nucleo) return this.integrantesNucleo(this.nucleo);
      else return this.integrantes;
    }
  },
  destroyed() {
    this.updateIntegrante(null);
  }
};
</script>
