<template>
  <div class="q-pt-md q-mx-md">
    <div class="fit row justify-end">
      <div class="col-auto q-gutter-xs">
          <q-btn color="positive" flat @click="updateAgregar" icon="add" label="Agregar" />
          <q-btn color="primary" flat icon="print" label="Imprimir" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavSectores",
  computed: {
  },
  methods: {
    ...mapMutations("sectores", [
      "updateAgregar",
    ]),
  }
};
</script>

<style lang="scss" scoped>
</style>
