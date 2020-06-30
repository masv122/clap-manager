<template>
  <div>
    <div class="column">
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="group" />Informacion del nucleo
        </div>
        <q-field borderless label="Jefe(a) del nucleo" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Jefe(a) del nucleo</div>
          </template>
        </q-field>
        <q-field borderless label="Cedula" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Cedula</div>
          </template>
        </q-field>
        <q-field borderless label="Direccion" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Direccion</div>
          </template>
        </q-field>
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="place" />Sector
        </div>
        <q-field borderless label="Nombre" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Nombre</div>
          </template>
        </q-field>
        <q-field borderless label="Direccion" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Direccion</div>
          </template>
        </q-field>
      </div>
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="info" />Informacion de control
        </div>
        <q-field borderless label="Integrantes registrados" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Integrantes registrados</div>
          </template>
        </q-field>
        <q-field borderless label="Pagos registrados" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Pagos registrados</div>
          </template>
        </q-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetallesNucleo"
};
</script>

<style lang="scss" scoped>
</style>
