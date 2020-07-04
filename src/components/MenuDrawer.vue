<template>
  <q-scroll-area
    style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
  >
    <q-list bordered>
      <q-expansion-item
        group="drawer"
        icon="place"
        label="Sector"
        header-class="text-warning"
      >
        <q-card>
          <q-btn
            color="positive"
            align="left"
            icon="add"
            label="Agregar"
            @click="updateAgregar"
            flat
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            color="red"
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

      <q-expansion-item
        group="drawer"
        icon="perm_identity"
        label="Persona"
        header-class="text-primary"
      >
        <q-card>
          <q-btn
            color="positive"
            align="left"
            icon="add"
            label="Agregar"
            flat
            @click="updateAgregarPersona"
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            color="red"
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

      <q-expansion-item group="drawer" icon="payments" label="Pago" header-class="text-negative">
        <q-card>
          <q-btn
            color="positive"
            align="left"
            icon="add"
            label="Agregar"
            flat
            @click="updateAgregarPago"
            class="full-width q-mb-sm q-pl-md"
          />
          <q-btn
            color="red"
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

      <q-expansion-item group="drawer" icon="print" label="Reportes" header-class="text-positive">
        <q-card>
          <q-btn
            color="secondary"
            align="left"
            class="full-width q-pl-md"
            flat
            icon="place"
            label="Sector"
          />
          <q-btn
            color="secondary"
            align="left"
            class="full-width q-pl-md"
            flat
            icon="perm_identity"
            label="Persona"
          />
          <q-btn
            color="secondary"
            align="left"
            class="full-width q-pl-md"
            flat
            icon="payments"
            label="Pago"
          />
        </q-card>
      </q-expansion-item>
      <q-separator />
      <q-item clickable v-ripple :to="{name: 'Usuario'}">
        <q-item-section avatar>
          <q-icon color="info" name="account_circle" />
        </q-item-section>
        <q-item-section>Usuario</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "MenuDrawer",
  methods: {
    ...mapMutations("sectores", ["updateAgregar"]),
    ...mapMutations("personas", ["updateAgregarPersona"]),
    ...mapMutations("pagos", ["updateAgregarPago"]),
  },
};
</script>
