<template>
  <div>
    <q-dialog
      v-model="_detallesSector"
      persistent
      :full-height="$q.screen.lt.sm"
      :full-width="$q.screen.lt.sm"
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
              <informacion-sector
                v-if="!!sector"
                :nombre="sector.nombre"
                :estado="sector.estado"
                :municipio="sector.municipio"
                :parroquia="sector.parroquia"
              />
            </div>
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="supervised_user_circle" />Jefe de calle
              </div>
              <informacion-jefe
                v-if="!!sector"
                :nombre="!!sector.jefe ? buscarJefe(sector.jefe).nombre : 'sin jefe de calle asignado'"
                :cedula="!!sector.jefe ? buscarJefe(sector.jefe).cedula : null "
                :codigo="!!sector.jefe ? buscarJefe(sector.jefe).codigo : 'sin jefe de calle asignado'"
              />
            </div>
            <div class="col" v-if="!!sector">
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
import InformacionSector from "components/sectores/InformacionSector.vue";
import InformacionJefe from "components/personas/InformacionJefe.vue";

export default {
  name: "DetallesSector",
  components: {
    InformacionSector,
    InformacionJefe
  },
  data() {
    return {
      integrantes: [],
      pagos: []
    };
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
      this.integrantes = await this.sector.getIntegrantes();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
