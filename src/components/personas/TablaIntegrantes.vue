<template>
  <div class="q-pa-md">
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
        <q-select
          label="Sector"
          use-input
          dense
          options-dense
          behavior="menu"
          hide-selected
          fill-input
          lazy-rules
          input-debounce="0"
          :options="sectoresOpt"
          @filter="filterSectores"
          label-color="negative"
          color="negative"
          v-model="sector"
          option-value="id"
          option-label="nombre"
          emit-value
          map-options
          class="q-mr-md"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label v-html="scope.opt.nombre" />
                <q-item-label caption>{{ scope.opt.getDirecion() }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          label="Nucleo"
          error-message="Debe seleccionar un nucleo"
          use-input
          dense
          options-dense
          behavior="menu"
          hide-selected
          fill-input
          lazy-rules
          input-debounce="0"
          :options="nucleosOpt"
          @filter="filterNucleos"
          label-color="negative"
          color="negative"
          v-model="nucleo"
          option-value="id"
          option-label="nombre"
          emit-value
          map-options
          class="q-mr-md"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label v-html="scope.opt.cedula" />
                <q-item-label caption>{{ scope.opt.nombre }}</q-item-label>
                <q-item-label caption>{{ scope.opt.direccion }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>
        </q-select>
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
import { mapGetters, mapMutations } from "vuex";
import * as API from "src/mixins/API";
export default {
  name: "TablaIntegrantes",
  data() {
    return {
      filter: "",
      nucleo: null,
      sector: null,
      sectoresOpt: [],
      nucleosOpt: [],
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
          field: "nucleo"
        },
        {
          name: "fechaNacimiento",
          label: "Nacimiento",
          field: "fechaNacimiento"
        }
      ]
    };
  },
  watch: {
    async sector(newValue, oldValue) {
      if (newValue !== oldValue) this.nucleosOpt = this.nucleosSector(newValue);
      this.updateCargandoPersonas();
      this.cargarIntegrantes(
        await this.buscarSector(newValue).getIntegrantes()
      );
      this.updateCargandoPersonas();
      this.nucleo = null;
    }
  },
  methods: {
    ...mapMutations("personas", [
      "updateIntegrante",
      "cargarIntegrantes",
      "updateAgregarPersona",
      "updateModificarPersona",
      "updateDetallesPersona",
      "updateCargandoPersonas",
      "updateTipoPersona"
    ]),
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere eliminar este integrante",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            await API.eliminarIntegrante(this.integrante);
          } catch (error) {
            alert("error al eliminar el integrante 101: " + error);
          }
        });
    },
    filterSectores(val, update, abort) {
      let opciones = this.sectores;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.sectoresOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterNucleos(val, update, abort) {
      let opciones = this.nucleos;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.sectoresOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    }
  },
  computed: {
    ...mapGetters("personas", [
      "integrantes",
      "integrante",
      "cargandoPersonas",
      "integrantesNucleo",
      "nucleos",
      "nucleosSector"
    ]),
    ...mapGetters("sectores", ["sectores", "buscarSector"]),
    _integrantes() {
      return !!this.nucleo
        ? this.integrantesNucleo(this.nucleo)
        : this.integrantes;
    }
  },
  created() {
    this.sectoresOpt = this.sectores;
    this.nucleosOpt = this.nucleos;
  },
  destroyed() {
    this.updateIntegrante(null);
  }
};
</script>
