<template>
  <div>
    <div class="text-h5 q-ml-xl">
      <q-icon name="group" />Datos del Jefe de calle
    </div>
    <q-field borderless label="Codigo" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">Codigo</div>
      </template>
    </q-field>
    <q-field borderless label="Direccion" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">Direccion</div>
      </template>
    </q-field>
    <q-field borderless label="Sector" stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline">Sector</div>
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  name: "DatosJefeConfirmacion"
};
</script>

<style lang="scss" scoped>
</style>