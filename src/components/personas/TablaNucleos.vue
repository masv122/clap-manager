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
        <sector-nucleo-select solo-sector inline />
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
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup @click="updateDetallesPersona">
                    <q-item-section avatar>
                      <q-icon name="article" color="info" />
                    </q-item-section>
                    <q-item-section>Detalles</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="updateModificarPersona">
                    <q-item-section avatar>
                      <q-icon name="edit" color="amber" />
                    </q-item-section>
                    <q-item-section>Modificar</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="confirmacion">
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
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import SectorNucleoSelect from "components/SectorNucleoSelect.vue";
import { mapGetters, mapMutations } from "vuex";
import * as API from "src/mixins/API";
export default {
  name: "TablaNucleos",
  components: {
    SectorNucleoSelect
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
      "updateAgregarPersona",
      "updateModificarPersona",
      "updateDetallesPersona",
      "updateTipoPersona"
    ]),
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: !!this.nucleo.integrantes
            ? "El nucleo posee integrantes registrados.\n Si lo elimina tambien se eliminaran los mismos.\n ¿Seguro que quiere eliminar este nucleo?"
            : "¿Seguro que quiere eliminar este nucleo familiar",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            if (!!this.nucleo.integrantes) {
              const result = await this.nucleo.getRegistrosAsociados();
              await API.eliminarIntegrantes(result.integrantes);
            }
            await API.eliminarNucleo(this.nucleo);
          } catch (error) {
            alert("error al eliminar el nucleo 101: " + error);
          }
        });
    }
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
      return !!this.sector ? this.nucleosSector(this.sector) : this.nucleos;
    }
  }
};
</script>
