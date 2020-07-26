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
        <div class="col text-h6 ellipsis">Datos del sector</div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"></div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Nombre</div>
      <div class="text-caption text-grey">{{ nombre }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Estado</div>
      <div class="text-caption text-grey">{{ estado }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Municipio</div>
      <div class="text-caption text-grey">{{ municipio }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Parroquia</div>
      <div class="text-caption text-grey">{{ parroquia }}</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarSector" />
      <q-btn flat round icon="delete" color="red" @click="eliminar" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";
import eliminarClase from "src/mixins/eliminarClase";
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
export default {
  name: "InformacionSector",
  mixins: [eliminarClase, redireccionamientoCRUD],
  props: {
    nombre: {
      type: String,
      default: ""
    },
    estado: {
      type: String,
      default: ""
    },
    municipio: {
      type: String,
      default: ""
    },
    parroquia: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("sectores", ["sector"])
  },
  methods: {
    eliminar() {
      this.elminarSector();
      this.$router.push({ name: "sectores" });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>