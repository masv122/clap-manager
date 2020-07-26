<template>
  <q-scroll-area
    style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
  >
    <q-list bordered>
      <q-expansion-item group="drawer" icon="place" label="Sector">
        <q-card>
          <q-btn
            align="left"
            icon="add"
            label="Agregar"
            @click="agregarSector"
            flat
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            align="left"
            icon="list"
            label="Sectores"
            flat
            :to="{name:'Sectores'}"
            class="full-width q-pl-md"
          />
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="drawer" icon="perm_identity" label="Persona">
        <q-card>
          <q-btn
            align="left"
            icon="add"
            label="Agregar"
            flat
            @click="agregarPersona"
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            align="left"
            icon="list"
            label="Personas"
            flat
            :to="{name:'Personas'}"
            class="full-width q-pl-md"
          />
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="drawer" icon="payments" label="Pago">
        <q-card>
          <q-btn
            align="left"
            icon="add"
            label="Agregar"
            flat
            @click="agregarPago"
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            align="left"
            flat
            icon="list"
            :to="{name:'Pagos'}"
            label="Pagos"
            class="full-width q-pl-md"
          />
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="drawer" icon="print" label="Reportes">
        <q-card>
          <q-btn align="left" class="full-width q-pl-md" flat icon="place" label="Sector" />
          <q-btn align="left" class="full-width q-pl-md" flat icon="perm_identity" label="Persona" />
          <q-btn align="left" class="full-width q-pl-md" flat icon="payments" label="Pago" />
        </q-card>
      </q-expansion-item>
      <q-separator />
      <q-item clickable v-ripple :to="{name: 'Usuario'}">
        <q-item-section avatar>
          <q-icon name="account_circle" />
        </q-item-section>
        <q-item-section>Usuario</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import redireccionamientoCRUD from "src/mixins/redireccionamientoCRUD";
export default {
  name: "MenuDrawer",
    mixins: [redireccionamientoCRUD],
};
</script>
