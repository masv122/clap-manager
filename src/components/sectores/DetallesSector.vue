<template>
  <div>
    <q-dialog
      v-model="_detallesSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
      @show="cargarData"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="article" class="q-mr-md" />Detalles Sector
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <div class="column">
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="info" />Datos del sector
              </div>
              <q-field borderless label="Nombre" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ sector.nombre }}</div>
                </template>
              </q-field>
              <q-field borderless label="Estado" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ sector.estado }}</div>
                </template>
              </q-field>
              <q-field borderless label="Municipio" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ sector.municipio }}</div>
                </template>
              </q-field>
              <q-field borderless label="Parroquia" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ sector.parroquia }}</div>
                </template>
              </q-field>
            </div>
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="supervised_user_circle" />Jefe de calle
              </div>
              <q-field borderless label="Nombre" stack-label>
                <template v-slot:control>
                  <div
                    class="self-center full-width no-outline"
                  >{{ !!sector.jefe ? buscarJefe(sector.jefe).nombre : "sin jefe de calle asignado" }}</div>
                </template>
              </q-field>
              <q-field borderless label="Cedula" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ !!sector.jefe ? buscarJefe(sector.jefe).cedula : "sin jefe de calle asignado" }}</div>
                </template>
              </q-field>
              <q-field borderless label="Codigo" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ !!sector.jefe ? buscarJefe(sector.jefe).codigo : "sin jefe de calle asignado" }}</div>
                </template>
              </q-field>
            </div>
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="supervised_user_circle" />Informacion detallada
              </div>
              <q-field borderless label="Nucleos registrados" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ sector.nucleos.length }}</div>
                </template>
              </q-field>
              <q-field borderless label="Integrantes registrados" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">{{ integrantes.length }}</div>
                </template>
              </q-field>
              <q-field borderless label="Pagos registrados" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Pagos registrados</div>
                </template>
              </q-field>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DetallesSector",
  data() {
    return {
      integrantes: [],
      pagos: []
    }
  },
  computed: {
    ...mapGetters("sectores", ["detalles", "sector"]),
    ...mapGetters("personas", ["buscarJefe"]),
    _detallesSector: {
      get() {
        return this.detalles;
      },
      set(value) {
        this.updateDetalles(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateDetalles"]),
    async cargarData() {
      this.integrantes = await this.sector.getIntegrantes()
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
