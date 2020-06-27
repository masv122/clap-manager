<template>
  <div>
    <q-dialog
      v-model="_modificarSector"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="edit" class="q-mr-md"/>Modificar Sector
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-ma-md">
          <q-form @submit.prevent @reset="onReset" class="q-gutter-md">
            <div class="text-h6 q-mt-md">
              <q-icon name="info" class="q-mr-md" />Datos del sector
              <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
            </div>
            <q-separator />
            <q-input
              v-model="text"
              type="text"
              label-color="negative"
              color="negative"
              label="Ingrese nombre del sector"
            />
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
            <div class="text-h6 q-mt-md">
              <q-icon name="supervised_user_circle" class="q-mr-md" />Reasignar jefe de calle
              <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
            </div>
            <q-separator />
            <TablaJefesDeCalleGrid />
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
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
export default {
  name: "ModificarSector",
  components: {
    TablaJefesDeCalleGrid
  },
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions,
      text: ""
    };
  },
  computed: {
    ...mapGetters("sectores", ["modificarSector"]),
    _modificarSector: {
      get() {
        return this.modificarSector;
      },
      set() {
        this.updateModificarSector();
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateModificarSector"]),
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
