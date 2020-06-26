<template>
  <div>
    <q-dialog
      v-model="_modificarPersona"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Modificar Integrantes
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <q-list bordered>
            <q-expansion-item
              group="somegroup"
              icon="info"
              label="Datos"
              default-opened
              header-class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <q-form @submit.prevent @reset="onReset" class="q-gutter-md">
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
                    <div>
                      <q-btn
                        label="Reiniciar"
                        type="reset"
                        color="negative"
                        class="q-ml-sm full-width"
                      />
                      <q-btn
                        label="Siguiente"
                        type="submit"
                        color="primary"
                        class="q-ml-sm full-width"
                      />
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="perm_identity"
              label="Tipo"
              header-class="text-teal"
            >
              <q-card>
                <q-card-section>
                  <q-form @submit.prevent @reset="onReset" class="q-gutter-md">
                    <TipoIntegrante />
                    <AsignarNucleo v-if="false" />
                    <CrearNucleo v-if="false" />
                    <CrearJefeCalle />
                    <div>
                      <q-btn
                        label="Reiniciar"
                        type="reset"
                        color="negative"
                        class="q-ml-sm full-width"
                      />
                      <q-btn
                        label="Siguiente"
                        type="submit"
                        color="primary"
                        class="q-ml-sm full-width"
                      />
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="check"
              label="Confirmacion"
              header-class="bg-teal text-white"
              expand-icon-class="text-white"
            >
              <q-card class="bg-teal-2">
                <q-card-section>
                  <q-form @submit.prevent @reset="onReset()" class="q-gutter-md">
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

                    <div>
                      <q-btn
                        label="Cancelar"
                        type="reset"
                        color="negative"
                        class="q-ml-sm full-width"
                        v-close-popup
                      />
                      <q-btn
                        label="Agregar"
                        type="submit"
                        color="primary"
                        class="q-ml-sm full-width"
                      />
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
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
export default {
  name: "ModificarPersona",
  components: {},
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions,
      text: ""
    };
  },
  computed: {
    ...mapGetters("personas", ["modificarPersona"]),
    _modificarPersona: {
      get() {
        return this.modificarPersona;
      },
      set() {
        this.updateModificarPersona();
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateModificarPersona"]),
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