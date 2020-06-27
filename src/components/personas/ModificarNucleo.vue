<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="group" class="q-mr-md" />Reasignar Sector
        <q-btn class="float-right" color="negative" icon="add" label="Crear Nucleo" />
      </div>
      <q-separator />
      <q-select
        label="Sector"
        :value="model"
        use-input
        label-color="negative"
        color="negative"
        behavior="menu"
        hide-selected
        fill-input
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Seleccione un sector']"
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
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos del nucleo
        <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
      </div>
      <q-separator />
      <q-input
        label-color="negative"
        clearable
        color="negative"
        v-model="text"
        type="text"
        label="Direccion"
      />
    </q-form>
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
export default {
  name: "ReasignarNucleo",
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions,
      text: ""
    };
  },
  methods: {
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
    }
  }
};
</script>
