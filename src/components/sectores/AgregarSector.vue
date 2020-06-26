<template>
  <div>
    <q-dialog
      v-model="_agregarSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
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
              <q-select
                label-color="negative"
                color="negative"
                label="Estado"
                :value="model"
                use-input
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                :rules="[ val => val !== null && val !== '' || 'Seleccione un estado']"
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
                style="padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                label-color="negative"
                color="negative"
                :value="model"
                use-input
                label="Municipio"
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                :rules="[ val => val !== null && val !== '' || 'Seleccione un municipio']"
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
                style="padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                label-color="negative"
                color="negative"
                :value="model"
                use-input
                label="Parroquia"
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                :rules="[ val => val !== null && val !== '' || 'Seleccione una parroquia']"
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
                style="padding-bottom: 32px"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-input
                v-model="text"
                type="text"
                label-color="negative"
                color="negative"
                label="Ingrese nombre del sector"
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
              <div class="row">
                <div class="col">
                  <div class="text-h6 q-ml-xl">
                    <q-icon name="info" />Datos del sector
                  </div>
                  <q-field borderless label="Direccion" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Direccion</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Nombre" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Nombre</div>
                    </template>
                  </q-field>
                </div>
                <div class="col">
                  <div class="text-h6 q-ml-xl">
                    <q-icon name="supervised_user_circle" />Jefe de calle
                  </div>
                  <q-field borderless label="Nombre" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Nombre</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Cedula" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Cedula</div>
                    </template>
                  </q-field>
                  <q-field borderless label="Codigo" stack-label>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline">Codigo</div>
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
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
export default {
  name: "AgregarSector",
  components: {
    TablaJefesDeCalleGrid
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
    ...mapGetters("sectores", ["agregarSector"]),
    _agregarSector: {
      get() {
        return this.agregarSector;
      },
      set(value) {
        this.updateAgregarSector(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateAgregarSector"]),
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