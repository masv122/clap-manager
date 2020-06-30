<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          color="negative"
          icon="arrow_left"
          label="Volver"
          :to="{name: 'Inicio'}"
          class="q-ml-auto"
        />
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      bordered
      content-class="bg-indigo-10 text-white"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="light-blue-2" size="md" name="home" />
            </q-item-section>

            <q-item-section>Inicio</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="light-blue-2" size="md" name="info" />
            </q-item-section>

            <q-item-section>Informacion Personal</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="light-blue-2" size="md" name="admin_panel_settings" />
            </q-item-section>

            <q-item-section>Configuracion de cuenta</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="light-blue-2" size="md" name="analytics" />
            </q-item-section>

            <q-item-section>Registros</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="light-blue-2" size="md" name="drafts" />
            </q-item-section>

            <q-item-section>Drafts</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="absolute-top" style="height: 150px">
        <div class="absolute-center bg-transparent">
          <q-avatar size="200px">
            <q-icon name="account_circle" />
          </q-avatar>
        </div>
      </div>
      <div class="absolute-bottom flex q-mx-lg q-mb-sm q-px-md bg-indigo-9 shadow-10">
        <div class="column justify-end">
          <div class="col self-center q-my-sm">
            <div class="creditos">
              <q-img
                :src="require('assets/logo_icono_lunar_software.svg')"
                width="40px"
                alt="logo_lunar_software"
                class="q-mr-md"
              />
              <q-img
                :src="require('assets/logo_letras_lunar_software.svg')"
                width="160px"
                alt="logo_lunar_software"
              />
            </div>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data() {
    return {
      drawer: false
    };
  }
};
</script>
