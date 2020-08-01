<template>
  <q-card class="my-card">
    <q-card-section>
      <q-btn
        fab
        color="negative"
        icon="info"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">Datos del Integrante</div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"></div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Nombre</div>
      <div class="text-caption text-grey">{{ nombre }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Apellidos</div>
      <div class="text-caption text-grey">{{ apellido }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Cedula</div>
      <div class="text-caption text-grey">{{ cedula }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Telefono</div>
      <div class="text-caption text-grey">{{ telefono }}</div>
    </q-card-section>
    <q-card-actions v-if="modificar" align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarPersona" />
      <q-btn flat round icon="delete" color="red" @click="eliminar" />
    </q-card-actions>
    <q-card-actions v-else align="right">
      <q-btn flat round icon="launch" color="primary" @click="detallesPersona" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
import eliminarClase from "src/mixins/eliminarClase";
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
export default {
  name: "InformacionPersonal",
  mixins: [eliminarClase, redireccionamientoCRUD],
  props: {
    nombre: {
      type: String,
      default: ""
    },
    apellido: {
      type: String,
      default: ""
    },
    cedula: {
      type: Number,
      default: null
    },
    telefono: {
      type: String,
      default: ""
    },
    modificar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters("personas", ["integrante", "nucleo", "jefe", "tipoPersona"])
  },
  methods: {
     eliminar() {
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>