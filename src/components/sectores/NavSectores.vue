<template>
  <div class="q-pt-md q-mx-md">
    <div class="fit row justify-end">
      <div class="col-auto">
        <q-btn-group push rounded>
          <q-btn color="positive" push @click="updateAgregar" icon="add" label="Agregar" />
          <q-btn
            color="info"
            push
            @click="updateDetalles"
            icon="article"
            label="Detalles"
          />
          <q-btn color="primary" push icon="print" label="Imprimir" />
        </q-btn-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NavSectores",
  computed: {
    ...mapGetters("sectores", ["sector"])
  },
  methods: {
    ...mapMutations("sectores", [
      "updateAgregar",
      "updateDetalles",
      "updateModificar"
    ]),
  }
};
</script>

<style lang="scss" scoped>
</style>
