<template>
  <div class="fit row q-gutter-y-md">
    <q-toolbar class="col-lg-auto">
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
    <q-toolbar class="col-lg-auto">
      <q-btn-group push rounded class="q-mx-auto">
        <q-btn color="positive" push @click="updateAgregarPersona" icon="add" label="Agregar" />
        <q-btn color="info" push @click="updateDetallesPersona" icon="article" label="Detalles" />
        <q-btn color="amber" push @click="updateModificarPersona" icon="edit" label="Modificar" />
        <q-btn
          color="negative"
          push
          @click="updateConfirmacionEliminacion"
          icon="delete"
          label="Eliminar"
        />
        <q-btn color="primary" push icon="print" label="Imprimir" />
      </q-btn-group>
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
      "updateModificarPersona",
      "updateDetallesPersona"
    ]),
    ...mapMutations("global", ["updateConfirmacionEliminacion"])
  }
};
</script>

<style lang="scss" scoped>
</style>
