<template>
  <div class="q-pa-md">
    <q-table
      title="Jefes"
      :data="jefes"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="_jefeSector"
      :filter="filter"
      grid
      :visible-columns="visibleColumns"
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <q-card-section>
              <q-checkbox dense v-model="props.selected" :label="props.row.name" />
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
    <q-banner v-show="alerta" dense inline-actions class="text-white bg-red">
      <template v-slot:avatar>
        <q-icon name="warning" color="white" />
      </template>
      Acaba de seleccionar un jefe de calle con sector asignado.
      El sector del jefe de calle sera sustituido por este.
    </q-banner>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      filter: "",
      visibleColumns: [
        "nombre",
        "apellido",
        "cedula",
        "telefono",
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
          field: "cedula"
        },
        {
          name: "telefono",
          label: "Telefono",
          field: "telefono"
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
          field: row => {
            if (!!row) {
              if (!!row.sector) return this.buscarSector(row.sector).nombre;
              else return "Sin sector asignado";
            }
          }
        },
        {
          name: "id",
          label: "Identificador",
          field: "id"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("personas", ["jefes", "jefeSector"]),
    ...mapGetters("sectores", ["buscarSector"]),
    _jefeSector: {
      get() {
        return this.jefeSector;
      },
      set(value) {
        this.updateJefeSector(value);
      }
    },
    alerta() {
      if (!!this.jefeSector[0]) return !!this.jefeSector[0].sector;
      else return false;
    }
  },
  methods: {
    ...mapMutations("personas", ["updateJefeSector"]),
    mostrarAlerta(jefe) {
      console.log(jefe);
    }
  }
};
</script>
<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>