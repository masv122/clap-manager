<template>
  <q-card class="my-card">
    <q-card-section>
      <q-btn
        fab
        color="negative"
        icon="group"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">Nucleo Familiar</div>
        <div
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        ></div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Nombre del nucleo</div>
      <div class="text-caption text-grey">{{ nombreNucleo }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Jefe(a) del nucleo</div>
      <div class="text-caption text-grey">{{ nombre }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Cedula</div>
      <div class="text-caption text-grey">{{ cedula }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Direccion</div>
      <div class="text-caption text-grey">{{ direccion }}</div>
    </q-card-section>
    <q-card-actions v-if="modificar" align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarNucleoFamiliar" />
      <q-btn flat round icon="delete" color="red" @click="eliminar" />
    </q-card-actions>
    <q-card-actions v-else align="right">
      <q-btn flat round icon="launch" color="primary" @click="detalles" />
    </q-card-actions>
  </q-card>
</template>

<script>
  import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
  import { mapGetters, mapMutations } from "vuex";
  import eliminarClase from "src/mixins/eliminarClase";
  export default {
    name: "InformacionNucleo",
    mixins: [eliminarClase, redireccionamientoCRUD],
    props: {
      nombreNucleo: {
        type: String,
        default: "",
      },
      nombre: {
        type: String,
        default: "",
      },
      cedula: {
        type: Number,
        default: null,
      },
      direccion: {
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
      ...mapGetters("personas", ["nucleo", "buscarNucleo"]),
    },
    methods: {
      ...mapMutations("personas", ["updateNucleo", "updateTipoPersona"]),
      eliminar() {
        const resultado = this.eliminarNucleo();
        if (resultado) this.$router.push({ name: "Personas" });
      },
      cargarNucleo() {
        this.updateTipoPersona({ value: "nucleo" });
        this.updateNucleo(this.buscarNucleo(this.id));
      },
      modificarNucleoFamiliar() {
        this.cargarNucleo();
        this.modificarPersona();
      },
      detalles() {
        this.cargarNucleo();
        this.detallesPersona();
      },
    },
  };
</script>

<style lang="scss" scoped></style>
