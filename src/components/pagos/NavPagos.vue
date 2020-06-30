<template>
  <div class="row q-gutter-y-md">
    <q-toolbar class="col-lg-6">
      <q-select
        class="q-mx-auto"
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
        class="q-mx-auto"
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
    </q-toolbar>
    <q-toolbar class="col-lg-6">
      <q-btn-group rounded push class="q-mx-auto">
        <q-btn color="positive" push rounded @click="updateAgregarPago" icon="add" label="Agregar" />
        <q-btn color="info" push @click="updateDetallesPago" icon="article" label="Detalles" />
        <q-btn
          color="amber"
          push
          rounded
          @click="updateModificarPago"
          icon="edit"
          label="Modificar"
        />
        <q-btn
          color="negative"
          rounded
          push
          @click="updateConfirmacionEliminacion"
          icon="delete"
          label="Eliminar"
        />
        <q-btn color="primary" push rounded icon="print" label="Imprimir" />
      </q-btn-group>
    </q-toolbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
    ...mapMutations("pagos", [
      "updateAgregarPago",
      "updateModificarPago",
      "updateDetallesPago"
    ]),
    ...mapMutations("global", ["updateConfirmacionEliminacion"]),
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
