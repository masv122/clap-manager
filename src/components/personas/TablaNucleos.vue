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
      :loading="cargandoPersonas"
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
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn flat round dense icon="more_vert">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="article" color="info" />
                    </q-item-section>
                    <q-item-section>Detalles</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="edit" color="amber" />
                    </q-item-section>
                    <q-item-section>Modificar</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="delete" color="negative" />
                    </q-item-section>
                    <q-item-section>Eliminar</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="print" color="primary" />
                    </q-item-section>
                    <q-item-section>Imprimir</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">{{ col.value }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
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
          field: async row => await row.getSector().nombre
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
    ...mapMutations("personas", [
      "updateNucleoSel",
      "updateAgregarPersona",
      "updateModificarPersona",
      "updateDetallesPersona"
    ])
  },
  computed: {
    ...mapGetters("personas", ["nucleos", "nucleoSel", "cargandoPersonas"]),
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
