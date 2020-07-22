<template>
  <div class="row q-gutter-y-md">
    <q-toolbar class="col-sm-8">
      <sector-nucleo-select inline/>
    </q-toolbar>
    <q-toolbar class="col-4 q-gutter-xs" v-if="!$q.screen.lt.sm">
      <q-btn color="positive" flat @click="updateAgregarPago" icon="add" label="Agregar" />
      <q-btn color="primary" flat icon="print" label="Imprimir" />
    </q-toolbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SectorNucleoSelect from "components/SectorNucleoSelect.vue";
export default {
  name: "NavPagos",
  components: {
    SectorNucleoSelect
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("pagos", ["updateAgregarPago"])
  }
};
</script>

<style lang="scss" scoped>
</style>
