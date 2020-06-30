<template>
  <q-page padding>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="sectores" label="Sectores" />
        <q-tab name="personas" label="Personas" />
        <q-tab name="pagos" label="Pagos" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="sectores">
          <div class="text-h6">Mails</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="personas">
          <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="pagos">
          <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "sectores"
    };
  }
};
</script>
