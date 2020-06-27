<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos Personales
        <q-btn class="float-right" color="negative" icon="redo" label="Restablecer" />
      </div>
      <q-separator />
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
        v-model="text"
        type="tel"
        label="Telefono"
        mask="(####) ### - ####"
      />
      <q-input
        label-color="negative"
        clearable
        color="negative"
        v-model="text"
        type="tel"
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
  name: "ModificarJefe",
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
