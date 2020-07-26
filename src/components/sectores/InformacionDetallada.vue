<template>
  <q-card class="my-card">
    <q-card-section>
      <q-btn
        fab
        color="negative"
        icon="analytics"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">Informacion detallada</div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"></div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Nucleos</div>
      <div class="text-caption text-grey">{{ nucleos.length }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Integrantes</div>
      <div class="text-caption text-grey">{{ integrantes.length }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">Pagos</div>
      <div class="text-caption text-grey">{{ pagos.length }}</div>
    </q-card-section>
    <q-tabs v-model="tab" class="text-teal">
      <q-tab class="text-primary" icon="perm_identity" name="integrantes" />
      <q-tab class="text-secondary" icon="group" name="nucleos" />
      <q-tab class="text-info" icon="payments" name="pagos" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="integrantes">
        <tabla-integrantes :data="integrantes" />
      </q-tab-panel>
      <q-tab-panel name="nucleos">
        <tabla-nucleos :data="nucleos" />
      </q-tab-panel>
      <q-tab-panel name="pagos">
        <tabla-pagos :data="pagos" />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import TablaIntegrantes from "components/personas/TablaIntegrantes.vue";
import TablaNucleos from "components/personas/TablaNucleos.vue";
import TablaPagos from "components/pagos/TablaPagos.vue";
export default {
  name: "InformacionDetallada",
  props: {
    nucleos: {
      type: Array,
      default: () => []
    },
    integrantes: {
      type: Array,
      default: () => []
    },
    pagos: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TablaIntegrantes,
    TablaNucleos,
    TablaPagos
  },
  data() {
    return {
      tab: "one"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>