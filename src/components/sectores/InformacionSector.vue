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
    <q-card-actions v-if="modificar" align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarSector" />
      <q-btn flat round icon="delete" color="red" @click="eliminar" />
    </q-card-actions>
    <q-card-actions v-else align="right">
      <q-btn flat round icon="launch" color="primary" @click="detalles" />
    </q-card-actions>
  </q-card>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import eliminarClase from "src/mixins/eliminarClase";
  import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
  export default {
    name: "InformacionSector",
    mixins: [eliminarClase, redireccionamientoCRUD],
    props: {
      nombre: {
        type: String,
        default: "",
      },
      estado: {
        type: String,
        default: "",
      },
      municipio: {
        type: String,
        default: "",
      },
      parroquia: {
        type: String,
        default: "",
      },
      modificar: {
        type: Boolean,
        default: false,
      },
      id: {
        type: [String, Number],
        default: null,
      },
    },
    computed: {
      ...mapGetters("sectores", ["sector", "buscarSector"]),
    },
    methods: {
      ...mapMutations("sectores", ["updateSector"]),
      eliminar() {
        const resultado = this.eliminarSector();
        if (resultado) this.$router.push({ name: "Sectores" });
      },
      cargarSector() {
        this.updateSector(this.buscarSector(this.id));
      },
      detalles() {
        this.cargarSector();
        this.detallesSector();
      },
    },
  };
</script>

<style lang="scss" scoped></style>
