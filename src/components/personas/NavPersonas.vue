<template>
  <div>
    <q-toolbar class="bg-amber text-white">
      <q-tabs v-model="tab">
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
      <q-btn-group rounded class="q-ml-auto">
        <q-btn
          color="positive"
          rounded
          @click="updateAgregarPersona"
          icon="add"
          label="Agregar"
        />
        <q-btn
          color="amber"
          rounded
          @click="updateModificarPersona"
          icon="edit"
          label="Modificar"
        />
        <q-btn
          color="negative"
          rounded
          @click="upateConfirmacionEliminacion"
          icon="delete"
          label="Eliminar"
        />
        <q-btn color="primary" rounded icon="print" label="Imprimir" />
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
      "updateModificarPersona"
    ]),
    ...mapMutations("global", ["upateConfirmacionEliminacion"])
  }
};
</script>

<style lang="scss" scoped>
</style>