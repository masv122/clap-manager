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
                <q-input
                  label-color="negative"
                  clearable
                  color="negative"
                  v-model="text"
                  type="text"
                  label="Nombre"
                />
                <q-input
                  label-color="negative"
                  clearable
                  color="negative"
                  v-model="text"
                  type="text"
                  label="Apellido"
                />
                <q-input
                  label-color="negative"
                  clearable
                  color="negative"
                  v-model.number="text"
                  type="number"
                  label="Cedula"
                />
                <q-input
                  label-color="negative"
                  clearable
                  color="negative"
                  v-model="text"
                  type="tel"
                  label="Telefono"
                  mask="(####) ### - ####"
                />
                <q-stepper-navigation>
                  <q-btn
                    @click="step = 2"
                    color="primary"
                    icon-right="chevron_right"
                    label="Siguiente"
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
                <AsignarNucleo v-if="false" />
                <CrearNucleo v-if="false" />
                <CrearJefeCalle />
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
                <div class="row">
                  <div class="col">
                    <div class="text-h5 q-ml-xl">
                      <q-icon name="info" />Datos personales
                    </div>
                    <q-field borderless label="Nombre" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Nombre</div>
                      </template>
                    </q-field>
                    <q-field borderless label="Apellido" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Apellido</div>
                      </template>
                    </q-field>
                    <q-field borderless label="Cedula" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Cedula</div>
                      </template>
                    </q-field>
                    <q-field borderless label="Telefono" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Telefono</div>
                      </template>
                    </q-field>
                  </div>
                  <div class="col">
                    <div class="text-h5 q-ml-xl">
                      <q-icon name="group" />Datos del Nucleo
                    </div>
                    <q-field borderless label="Direccion" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Direccion</div>
                      </template>
                    </q-field>
                    <q-field borderless label="Sector" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline">Sector</div>
                      </template>
                    </q-field>
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
                  <q-btn color="primary" icon-right="add" label="Agregar" />
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
const stringOptions = [
  "Google",
  "Facebook",
  "Twitter",
  "Apple",
  "Oracle"
].reduce((acc, opt) => {
  for (let i = 1; i <= 5; i++) {
    acc.push(opt + " " + i);
  }
  return acc;
}, []);

import { mapGetters, mapMutations } from "vuex";
import TipoPersona from "components/personas/TipoPersona.vue";
import AsignarNucleo from "components/personas/AsignarNucleo.vue";
import CrearNucleo from "components/personas/CrearNucleo.vue";
import CrearJefeCalle from "components/personas/CrearJefeCalle.vue";
export default {
  name: "AgregarPersona",
  components: {
    TipoPersona,
    AsignarNucleo,
    CrearNucleo,
    CrearJefeCalle
  },
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions,
      text: "",
      step: 1
    };
  },
  computed: {
    ...mapGetters("personas", ["agregarPersona"]),
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