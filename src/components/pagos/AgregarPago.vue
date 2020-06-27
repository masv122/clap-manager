<template>
  <div>
    <q-dialog
      v-model="_agregarPago"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <div class="q-pa-md"></div>
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Agregar pago
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
            <q-step :name="1" title="Seleccione un nucleo" icon="group" :done="step > 1">
              <q-select
                label="Sector"
                label-color="negative"
                color="negative"
                :value="model"
                use-input
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                label="Nucleo"
                label-color="negative"
                color="negative"
                :value="model"
                use-input
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
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
              title="Complete los datos"
              caption="Optional"
              icon="info"
              :done="step > 2"
            >
              <q-input
                v-model="text"
                type="number"
                color="negative"
                label-color="negative"
                label="Numero de referencia"
              />
              <q-input
                v-model="text"
                type="number"
                label-color="negative"
                color="negative"
                label="Monto"
              />
              <q-input
                label-color="negative"
                color="negative"
                v-model="date"
                mask="date"
                :rules="['date']"
                label="Seleccione fecha"
              >
                <template v-slot:append>
                  <q-icon name="event"
                color="negative"
                   class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-select
                label="Banco"
                label-color="negative"
                color="negative"
                :value="model"
                use-input
                behavior="menu"
                hide-selected
                fill-input
                lazy-rules
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                @input-value="setModel"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-option-group
                v-model="estado"
                label-color="negative"
                color="negative"
                :options="estados"
                inline
              />
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
              <q-field borderless label="Nucleo" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Nucleo</div>
                </template>
              </q-field>
              <q-field borderless label="Numero de referencia" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Numero de referencia</div>
                </template>
              </q-field>
              <q-field borderless label="Banco" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Banco</div>
                </template>
              </q-field>
              <q-field borderless label="Monto" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Monto</div>
                </template>
              </q-field>
              <q-field borderless label="Estado" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Estado</div>
                </template>
              </q-field>
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
export default {
  name: "AgregarIntegrante",
  components: {},
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions,
      text: "",
      estado: "pendiente",
      estados: [
        { label: "Pendiente", value: "pendiente" },
        { label: "Confirmado", value: "confirmado" }
      ],
      step: 1,
      date: ""
    };
  },
  computed: {
    ...mapGetters("pagos", ["agregarPago"]),
    _agregarPago: {
      get() {
        return this.agregarPago;
      },
      set(value) {
        this.updateAgregarPago(value);
      }
    }
  },
  methods: {
    ...mapMutations("pagos", ["updateAgregarPago"]),
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
