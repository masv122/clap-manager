<template>
  <div>
    <div class="column">
      <div class="col">
        <div class="text-h6 q-ml-xl">
          <q-icon name="info" />Informacion personal
        </div>
        <q-field borderless label="Nombre" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Nombre</div>
          </template>
        </q-field>
        <q-field borderless label="Apellidos" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Apellidos</div>
          </template>
        </q-field>
        <q-field borderless label="Cedula" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Cedula</div>
          </template>
        </q-field>
        <q-field borderless label="Telefono" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">Telefono</div>
          </template>
        </q-field>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "DetallesJefeCalle"
};
</script>

<style lang="scss" scoped>
</style>
