<template>
  <q-card class="my-card">
    <q-card-section>
      <q-btn
        fab
        color="negative"
        icon="supervised_user_circle"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">Jefe de calle</div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"></div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Nombre</div>
      <div class="text-caption text-grey">{{ nombre }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Cedula</div>
      <div class="text-caption text-grey">{{ cedula }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Codigo</div>
      <div class="text-caption text-grey">{{ codigo }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Direccion</div>
      <div class="text-caption text-grey">{{ direccion }}</div>
    </q-card-section>
    <q-card-actions v-if="modificar" align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarPersona" />
      <q-btn flat round icon="delete" color="red" @click="eliminar" />
    </q-card-actions>
    <q-card-actions v-else align="right">
      <q-btn flat round icon="launch" color="primary" @click="cargarJefe" :disable="!!!cedula" />
    </q-card-actions>
  </q-card>
</template>

<script>
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
import { mapGetters, mapMutations } from "vuex";
import eliminarClase from "src/mixins/eliminarClase";
export default {
  name: "InformacionJefe",
  mixins: [eliminarClase, redireccionamientoCRUD],
  props: {
    nombre: {
      type: String,
      default: "",
    },
    cedula: {
      type: Number,
      default: null,
    },
    codigo: {
      type: String,
      default: "",
    },
    direccion: {
      type: String,
      default: "",
    },
    modificar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("personas", ["jefe", "buscarJefe"]),
  },
  methods: {
    ...mapMutations("personas", ["updateTipoPersona", "updateJefe"]),
    eliminar() {
      const resultado = this.eliminarJefe();
      if (resultado) this.$router.push({ name: "Personas" });
    },
    cargarJefe() {
      this.updateTipoPersona({ value: "jefe" });
      this.updateJefe(this.buscarJefe(Number.parseInt(this.cedula)));
      this.detallesPersona();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>