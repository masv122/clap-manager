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
        <div class="col text-h6 ellipsis">Datos del pago</div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Numero de referencia</div>
      <div class="text-caption text-grey">{{ referencia }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Monto</div>
      <div class="text-caption text-grey">{{ monto }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Fecha</div>
      <div class="text-caption text-grey">{{ fecha }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Estado</div>
      <div class="text-caption text-grey">{{ estado }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Banco</div>
      <div class="text-caption text-grey">{{ banco }}</div>
    </q-card-section>
    <q-card-actions v-if="modificar" align="right">
      <q-btn flat round icon="edit" color="warning" @click="modificarPago" />
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
    name: "InformacionPago",
    mixins: [eliminarClase, redireccionamientoCRUD],
    props: {
      referencia: {
        type: [String, Number],
        default: null,
      },
      monto: {
        type: Number,
        default: null,
      },
      fecha: {
        type: String,
        default: "",
      },
      estado: {
        type: String,
        default: "",
      },
      banco: {
        type: String,
        default: "",
      },
      modificar: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      ...mapGetters("pagos", ["pago", "buscarPago"]),
    },
    methods: {
      ...mapMutations("pagos", ["updatePago"]),
      eliminar() {
        const resultado = this.eliminarPago();
        if (resultado) this.$router.push({ name: "Pagos" });
      },
      cargarPago() {
        this.updatePago(this.buscarPago(this.id));
      },
      detalles() {
        this.cargarPago();
        this.detallesPago();
      },
    },
  };
</script>

<style lang="scss" scoped></style>
