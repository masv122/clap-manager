<template>
  <q-layout view="lHr Lpr lFf">
    <Dialogs />
    <q-header class="bg-negative" elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-img
          src="~assets/clap_manager_icon.png"
          :ratio="16/9"
          spinner-color="primary"
          spinner-size="82px"
          width="100px"
        />
        <q-toolbar-title>CLAP Manager</q-toolbar-title>
        <q-btn
          color="white"
          text-color="dark"
          :to="{name: 'Login'}"
          v-if="$q.screen.width > 500"
          label="Iniciar sesion"
        />
        <q-btn @click="rightDrawer = !rightDrawer" flat round dense icon="notifications" />
      </q-toolbar>
      <q-tabs class="text-white q-ml-auto">
        <q-route-tab name="home" :to="{name: 'Inicio'}" icon="home" label="Inicio" exact />
        <q-route-tab name="sectores" :to="{name: 'Sectores'}" icon="place" label="Sectores" exact />
        <q-route-tab
          name="personas"
          :to="{name: 'Personas'}"
          icon="supervisor_account"
          label="Personas"
        />
        <q-route-tab name="pagos" :to="{name: 'Pagos'}" icon="payments" label="Pagos" exact />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawer" show-if-above bordered>
      <MenuDrawer />
      <q-img class="absolute-top" src="~assets/clap_manager_drawer.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <q-icon name="account_circle" />
          </q-avatar>
          <q-btn
            color="white"
            text-color="dark"
            :to="{name: 'Login'}"
            v-if="$q.screen.width < 500"
            label="Iniciar sesion"
          />
          <div class="text-weight-bold">Inicia sesion para almacenar tus registros</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>

      <div class="absolute-bottom flex q-mx-sm q-mb-sm">
        <div class="text-weight-light q-pt-md">Version: {{ version }}</div>
        <q-btn color="primary" icon="settings" flat round class="q-ml-auto" />
      </div>
    </q-drawer>
    <q-drawer
      v-model="rightDrawer"
      :width="200"
      :breakpoint="500"
      side="right"
      overlay
      behavior="mobile"
      bordered
      content-class="bg-white"
    >
      <q-scroll-area class="fit">
        <!-- <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>-->
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-11">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuDrawer from "components/MenuDrawer.vue";
import Header from "components/Header.vue";
import Dialogs from "components/Dialogs.vue";
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "MainLayout",
  components: {
    MenuDrawer,
    // Header,
    Dialogs
  },
  data() {
    return {
      text: "",
      tab: "mails",
      rightDrawer: false,
      leftDrawer: false
    };
  },
  computed: {
    ...mapState("global", ["version"]),
  },
  methods: {
    ...mapActions("global", ["loadData"]),
    ...mapActions("sectores", ["cargarSectores"]),
    ...mapActions("personas", ["cargarNucleos", "cargarIntegrantes", "cargarJefes"]),
    ...mapMutations("sectores", ["updateCargandoSectores"]),
    ...mapMutations("personas", ["updateCargandoPersonas"])
  },
  async created() {
    this.updateCargandoSectores;
    await this.cargarSectores();
    this.updateCargandoSectores;
    this.updateCargandoPersonas;
    await this.cargarNucleos();
    await this.cargarIntegrantes();
    await this.cargarJefes();
    this.updateCargandoPersonas;
    await this.loadData();
  }
};
</script>

