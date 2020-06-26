<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
        <q-icon name="filter_alt" class="q-mr-md" />Filtrar Pagos
      </q-toolbar-title>
      <q-select
        class="q-mr-md"
        label="Sector"
        label-color="white"
        color="white"
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
        label-color="white"
        color="white"
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
    </q-toolbar>
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
  name: "NavPagos",
  data() {
    return {
      model: null,
      stringOptions,
      options: stringOptions
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

<style lang="scss" scoped>
</style>