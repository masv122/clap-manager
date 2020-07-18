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
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup @click="updateDetalles">
                    <q-item-section avatar>
                      <q-icon name="article" color="info" />
                    </q-item-section>
                    <q-item-section>Detalles</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="updateModificar">
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
  name: "TablaSectores",
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
          field: "jefe"
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
    ...mapMutations("sectores", [
      "updateSector",
      "updateAgregar",
      "updateDetalles",
      "updateModificar"
    ]),
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere eliminar este sector",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            await API.eliminarSector(this.sector);

          } catch (error) {
            alert(error);
          }
        });
    }
  },
  computed: {
    ...mapGetters("sectores", ["sectores", "sector", "cargandoSectores"])
  }
};
</script>
