<template>
  <q-menu>
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup @click="detalles">
        <q-item-section avatar>
          <q-icon name="article" color="info" />
        </q-item-section>
        <q-item-section>Detalles</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="modificar">
        <q-item-section avatar>
          <q-icon name="edit" color="amber" />
        </q-item-section>
        <q-item-section>Modificar</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="eliminar">
        <q-item-section avatar>
          <q-icon name="delete" color="negative" />
        </q-item-section>
        <q-item-section>Eliminar</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-icon name="print" color="primary" />
        </q-item-section>
        <q-item-section>Imprimir</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
import * as API from "src/mixins/API";
import { mapGetters, mapMutations } from "vuex";
import eliminarClase from "src/mixins/eliminarClase";
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
export default {
  name: "MenuRegistros",
  mixins: [eliminarClase, redireccionamientoCRUD],
  computed: {
    ...mapGetters("sectores", ["sector"]),
    ...mapGetters("personas", ["integrante", "nucleo", "jefe", "tipoPersona"]),
    ...mapGetters("pagos", ["pago"])
  },
  methods: {
    idPersona() {
      if (!!this.tipoPersona)
        switch (this.tipoPersona.value) {
          case "integrante":
            return this.integrante.id;
            break;
          case "nucleo":
            return this.nucleo.id;
            break;
          case "jefe":
            return this.jefe.id;
            break;
          default:
            return null;
            break;
        }
      else return null;
    },
    detalles() {
      if (this.$route.path.includes("sectores")) this.detallesSector();
      else if (this.$route.path.includes("personas")) this.detallesPersona();
      else if (this.$route.path.includes("pagos")) this.detallesPago();
    },
    modificar() {
      if (this.$route.path.includes("sectores")) this.modificarSector();
      else if (this.$route.path.includes("personas")) this.modificarPersona();
      else if (this.$route.path.includes("pagos")) this.modificarPago();
    },
    eliminar() {
      if (this.$route.path.includes("sectores")) this.eliminarSector();
      else if (this.$route.path.includes("personas")) {
        switch (this.tipoPersona.value) {
          case "integrante":
            this.eliminarIntegrante();
            break;
          case "nucleo":
            this.eliminarNucleo();
            break;
          case "jefe":
            this.eliminarJefe();
            break;
          default:
            break;
        }
      } else if (this.$route.path.includes("pagos")) this.eliminarPago();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>