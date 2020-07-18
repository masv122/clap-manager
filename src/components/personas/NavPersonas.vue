<template>
  <div class="fit row q-gutter-y-md">
    <q-toolbar class="col-sm-8">
      <q-tabs v-model="tab" class="q-mx-auto text-negative">
        <q-route-tab
          :to="{ name: 'integrantes'}"
          name="integrantes"
          icon="perm_identity"
          label="Integrantes"
        />
        <q-route-tab :to="{ name: 'nucleos'}" name="nucleos" icon="group" label="Nucleos" />
        <q-route-tab
          :to="{ name: 'jefes de calle'}"
          name="jefes"
          icon="supervised_user_circle"
          label="Jefes de calle"
        />
      </q-tabs>
    </q-toolbar>
    <q-toolbar class="col-4 q-gutter-xs" v-if="!$q.screen.lt.sm">
        <q-btn color="positive" flat @click="updateAgregarPersona" icon="add" label="Agregar" />
        <q-btn color="primary" flat icon="print" label="Imprimir" />
    </q-toolbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavPersonas",
  data() {
    return {
      tab: "integrantes"
    };
  },
  methods: {
    ...mapMutations("personas", [
      "updateAgregarPersona",
    ]),
  }
};
</script>

<style lang="scss" scoped>
</style>
