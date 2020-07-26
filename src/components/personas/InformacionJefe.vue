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
    <q-card-actions align="right">
      <q-btn flat round icon="launch" color="primary" @click="detallesPersona"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
export default {
  name: "InformacionJefe",
    mixins: [ redireccionamientoCRUD],
  props: {
    nombre: {
      type: String,
      default: ""
    },
    cedula: {
      type: Number,
      default: null
    },
    codigo: {
      type: String,
      default: ""
    },
    direccion: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>