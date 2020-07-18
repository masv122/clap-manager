<template>
  <div>
    <q-dialog
      v-model="_agregarSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
      @hide="reset"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Agregar Sector
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
            <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
              <DatosBasicosSector />
              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  color="primary"
                  :disable="datosBasicosSectorInvalidos"
                  icon-right="chevron_right"
                  label="Siguiente"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Seleccione un jefe de calle"
              caption="Optional"
              icon="supervised_user_circle"
              :done="step > 2"
            >
              <TablaJefesDeCalleGrid />
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 1"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  @click="step = 3"
                  color="primary"
                  icon-right="chevron_right"
                  label="Siguiente"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step :name="3" title="Confirme la informacion" icon="check">
              <DatosBasicosSectorConfirmacion />
              <q-stepper-navigation>
                <q-btn
                  flat
                  @click="step = 2"
                  icon="chevron_left"
                  color="negative"
                  label="Regresar"
                  class="q-ml-sm"
                />
                <q-btn
                  color="positive"
                  icon-right="check"
                  label="Confirmar"
                  @click="confirmarSector"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Sector from "src/class/sector";
import * as API from "src/mixins/API";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
import DatosBasicosSector from "components/sectores/DatosBasicosSector.vue";
import DatosBasicosSectorConfirmacion from "components/sectores/DatosBasicosSectorConfirmacion.vue";
export default {
  name: "AgregarSector",
  components: {
    TablaJefesDeCalleGrid,
    DatosBasicosSector,
    DatosBasicosSectorConfirmacion
  },
  data() {
    return {
      text: "",
      step: 1
    };
  },
  validations: {},
  watch: {},
  computed: {
    ...mapGetters("sectores", [
      "agregar",
      "nombre",
      "estado",
      "municipio",
      "parroquia",
      "datosBasicosSectorInvalidos"
    ]),
    ...mapGetters("global", ["estados", "municipios", "parroquias"]),
    ...mapGetters("personas", ["jefeSector"]),
    _agregarSector: {
      get() {
        return this.agregar;
      },
      set(value) {
        this.updateAgregar(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateAgregar"]),
    ...mapMutations("sectores", [
      "updateEstado",
      "updateMunicipio",
      "updateParroquia",
      "updateNombre",
      "updateDatosBasicosSectorInvalidos"
    ]),
    ...mapMutations("personas", ["updateJefeSector"]),
    async confirmarSector() {
      try {
        const sector = new Sector(
          this.nombre,
          this.estados[this.estado - 1].nombre,
          this.municipios[this.municipio - 1].nombre,
          this.parroquias[this.parroquia - 1].nombre,
          null,
          !!this.jefeSector[0] ? this.jefeSector[0].id : null
        );
        const resultado = await API.guardarSector(sector);
        if (!!sector.jefe) await API.actualizarSectorJefe(resultado, sector);
        if (resultado) this.updateAgregar();
      } catch (error) {
        alert(error);
      }
    },
    reset() {
      this.updateEstado(null);
      this.updateMunicipio(null);
      this.updateParroquia(null);
      this.updateNombre("");
      this.step = 1;
      this.updateJefeSector([]);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>