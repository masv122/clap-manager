<template>
  <div>
    <q-dialog
      v-model="_modificarPago"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="edit" class="q-mr-md" />Modificar Pago
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-ma-md">
          <q-form @submit.prevent @reset="onReset" class="q-gutter-md">
            <div class="text-h6 q-mt-md">
              <q-icon name="info" class="q-mr-md" />Datos del pago
              <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
            </div>
            <q-separator />
            <q-input
              v-model="text"
              type="number"
              label-color="negative"
              color="negative"
              label="Monto"
            />
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
          </q-form>
        </q-card-section>
        <q-separator />
        <q-card-actions class="q-ma-md" align="center">
          <q-btn
            label="Guardar"
            icon="save"
            type="submit"
            color="primary"
            class="q-ml-sm full-width"
          />
        </q-card-actions>
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
  name: "ModificarPago",
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
      ]
    };
  },
  computed: {
    ...mapGetters("pagos", ["modificarPago"]),
    _modificarPago: {
      get() {
        return this.modificarPago;
      },
      set() {
        this.updateModificarPago();
      }
    }
  },
  methods: {
    ...mapMutations("pagos", ["updateModificarPago"]),
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
