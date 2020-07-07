<template>
  <div>
    <q-dialog
      v-model="_agregarPersona"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Agregar Persona
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
              <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
                <DatosPersonales />
                <q-stepper-navigation>
                  <q-btn
                    @click="step = 2"
                    color="primary"
                    icon-right="chevron_right"
                    label="Siguiente"
                    :disable="datosPersonalesInvalidos"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Seleccione el tipo de persona"
                caption="Optional"
                icon="perm_identity"
                :done="step > 2"
              >
                <TipoPersona />
                <AsignarNucleo v-if="tipoPersona && tipoPersona.value === 'asignar'" />
                <CrearNucleo v-else-if="tipoPersona && tipoPersona.value === 'crear'" />
                <CrearJefeCalle v-else-if="tipoPersona && tipoPersona.value === 'jefe'" />
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
                    :disable="datosNucleoInvalidos"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step :name="3" title="Confirme la informacion" icon="check">
                <div class="row">
                  <div class="col">
                    <DatosPersonalesConfirmacion />
                  </div>
                  <div class="col">
                    <DatosNucleoConfirmacion
                      v-if="tipoPersona && (tipoPersona.value === 'asignar' || tipoPersona.value === 'crear')"
                    />
                    <DatosJefeConfirmacion v-else />
                  </div>
                </div>
                <q-stepper-navigation>
                  <q-btn
                    flat
                    @click="step = 2"
                    icon="chevron_left"
                    color="negative"
                    label="Regresar"
                    class="q-ml-sm"
                  />
                  <q-btn color="positive" icon-right="check" label="Agregar" />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { date } from "quasar";
import DatosPersonales from "components/personas/DatosPersonales.vue";
import TipoPersona from "components/personas/TipoPersona.vue";
import AsignarNucleo from "components/personas/AsignarNucleo.vue";
import CrearNucleo from "components/personas/CrearNucleo.vue";
import CrearJefeCalle from "components/personas/CrearJefeCalle.vue";
import DatosPersonalesConfirmacion from "components/personas/DatosPersonalesConfirmacion.vue";
import DatosNucleoConfirmacion from "components/personas/DatosNucleoConfirmacion.vue";
import DatosJefeConfirmacion from "components/personas/DatosJefeConfirmacion.vue";
export default {
  name: "AgregarPersona",
  components: {
    DatosPersonales,
    TipoPersona,
    AsignarNucleo,
    CrearNucleo,
    CrearJefeCalle,
    DatosPersonalesConfirmacion,
    DatosNucleoConfirmacion,
    DatosJefeConfirmacion
  },
  data() {
    return {
      step: 1
    };
  },

  computed: {
    ...mapGetters("personas", [
      "agregarPersona",
      "tipoPersona",
      "nombreNucleo",
      "nombre",
      "apellido",
      "cedula",
      "telefono",
      "fechaNacimiento",
      "datosPersonalesInvalidos",
      "datosNucleoInvalidos"
    ]),
    ...mapGetters("sectores", ["sectores", "sector"]),
    _agregarPersona: {
      get() {
        return this.agregarPersona;
      },
      set(value) {
        this.updateAgregarPersona(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateAgregarPersona"]),
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.options = stringOptions.filter(
          v => v.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    setModel(val) {
      this.model = val;
    },
    onReset() {
      this.model = null;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>