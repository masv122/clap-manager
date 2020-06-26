<template>
  <div class="q-gutter-md">
    <q-form @submit.prevent class="q-gutter-md shadow-1 round q-px-md q-pb-md">
      <div class="text-h5 q-ml-xs q-pt-md">
        <q-icon name="group" /> Crear Jefe de Calle
      </div>
      <q-separator color="negative" inset />
      <q-input
        label-color="negative"
        clearable
        color="negative"
        v-model="text"
        type="text"
        label="Codigo"
      />
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
  name: "AsignarNucleo",
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

<style lang="scss" scoped>
</style>