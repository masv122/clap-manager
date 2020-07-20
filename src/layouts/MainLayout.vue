<template>
  <q-layout view="lHr Lpr lFf">
    <Dialogs />
    <q-header class="bg-negative" elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="leftDrawer = !leftDrawer" />
        <!-- <q-img
          src="~assets/clap_manager_icon.png"
          :ratio="16/9"
          spinner-color="primary"
          spinner-size="82px"
          width="100px"
        />-->
        <q-toolbar-title>CLAP Manager</q-toolbar-title>
        <q-btn
          color="white"
          text-color="dark"
          :to="{name: 'Login'}"
          v-if="$q.screen.width > 500"
          label="Iniciar sesion"
        />
        <q-btn color="primary" icon="add" @click="agregar" />
        <q-btn color="primary" icon="article" @click="mostar" />
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
    ...mapState("global", ["version"])
  },
  methods: {
    ...mapActions("global", ["loadData"]),
    ...mapActions("sectores", ["cargarSectores"]),
    ...mapActions("personas", [
      "cargarNucleos",
      "cargarIntegrantes",
      "cargarJefes"
    ]),
    ...mapMutations("sectores", ["updateCargandoSectores"]),
    ...mapMutations("personas", ["updateCargandoPersonas"]),
    agregar() {
      this.$db.local.rel
        .save("sector", {
          estado: "Anzoátegui",
          jefe: null,
          municipio: "Aragua",
          nombre: "hhhhh",
          nucleos: [
            "184ABD6B-9E6D-2885-ADD4-7BE394A547C8",
            "A8623851-BDAA-9156-9A12-A6C1DDE0E7D9"
          ],
          id: "7A4E73EF-4CA6-9580-97E5-32604B726708",
          parroquia: "Cachipo"
        })
        .then(() => {
          return this.$db.local.rel
            .save("nucleo", {
              cedula: 7787878,
              direccion: "jjj",
              integrantes: [7787878, 465656],
              nombre: "familia 1",
              pagos: [],
              id: "184ABD6B-9E6D-2885-ADD4-7BE394A547C8",
              sector: "7A4E73EF-4CA6-9580-97E5-32604B726708"
            })
            .then(() => {
              return this.$db.local.rel.save("integrante", {
                apellido: "Salazare",
                fechaNacimiento: "2020/07/02",
                nombre: "Marcele",
                id: 7787878,
                nucleo: "184ABD6B-9E6D-2885-ADD4-7BE394A547C8",
                telefono: "(5842) 489 - 6216"
              });
            })
            .then(() => {
              return this.$db.local.rel.save("integrante", {
                apellido: "Salazari",
                fechaNacimiento: "2020/07/02",
                nombre: "Marceli",
                id: 465656,
                nucleo: "184ABD6B-9E6D-2885-ADD4-7BE394A547C8",
                telefono: "(5842) 489 - 6216"
              });
            });
        })
        .then(() => {
          return this.$db.local.rel
            .save("nucleo", {
              cedula: 666666,
              direccion: "fgfg",
              integrantes: [666666],
              nombre: "familia 2",
              pagos: [],
              id: "A8623851-BDAA-9156-9A12-A6C1DDE0E7D9",
              sector: "7A4E73EF-4CA6-9580-97E5-32604B726708"
            })
            .then(() => {
              return this.$db.local.rel.save("integrante", {
                apellido: "Salazara",
                fechaNacimiento: "2020/07/02",
                nombre: "Marcela",
                id: 666666,
                nucleo: "A8623851-BDAA-9156-9A12-A6C1DDE0E7D9",
                telefono: "(5842) 489 - 6216"
              });
            });
        });
    },
    async mostar() {
      console.log(await this.$db.local.rel.find("sector"));
    }
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

