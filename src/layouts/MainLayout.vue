<template>
  <q-layout view="lHr Lpr lFf">
    <Dialogs/>
    <q-header class="bg-negative" elevated>
      <Header />
      <q-tabs class="text-white q-ml-auto">
        <q-route-tab name="home" :to="{name: 'Inicio'}" icon="home" label="Inicio" exact/>
        <q-route-tab name="sectores" :to="{name: 'Sectores'}" icon="place" label="Sectores" exact />
        <q-route-tab
          name="personas"
          :to="{name: 'Personas'}"
          icon="supervisor_account"
          label="Personas"
          exact
        />
        <q-route-tab name="pagos" :to="{name: 'Pagos'}" icon="payments" label="Pagos" exact />
      </q-tabs>
    </q-header>

    <q-drawer v-model="_leftDrawer" show-if-above bordered>
      <MenuDrawer />
      <q-img class="absolute-top" src="~assets/clap_manager_drawer.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <q-icon name="account_circle" />
          </q-avatar>
          <div class="text-weight-bold">Inicia sesion para almacenar tus registros</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>

      <div class="absolute-bottom flex q-mx-sm q-mb-sm">
        <div class="text-weight-light q-pt-md">Version: v-0a4</div>
        <q-btn color="primary" icon="settings" flat round class="q-ml-auto" />
      </div>
    </q-drawer>
    <q-drawer
      v-model="_rightDrawer"
      :width="200"
      :breakpoint="500"
      side="right"
      overlay
      behavior="mobile"
      bordered
      content-class="bg-white"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>
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
import Dialogs from 'components/Dialogs.vue';
import { mapMutations, mapGetters } from "vuex";
const menuList = [
  {
    icon: "inbox",
    label: "Inbox",
    separator: true
  },
  {
    icon: "send",
    label: "Outbox",
    separator: false
  },
  {
    icon: "delete",
    label: "Trash",
    separator: false
  },
  {
    icon: "error",
    label: "Spam",
    separator: true
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false
  }
];
export default {
  name: "MainLayout",
  components: {
    MenuDrawer,
    Header,
    Dialogs
  },
  data() {
    return {
      text: "",
      tab: "mails",
      essentialLinks: [
        {
          title: "Docs",
          caption: "quasar.dev",
          icon: "school",
          link: "https://quasar.dev"
        },
        {
          title: "Github",
          caption: "github.com/quasarframework",
          icon: "code",
          link: "https://github.com/quasarframework"
        },
        {
          title: "Discord Chat Channel",
          caption: "chat.quasar.dev",
          icon: "chat",
          link: "https://chat.quasar.dev"
        },
        {
          title: "Forum",
          caption: "forum.quasar.dev",
          icon: "record_voice_over",
          link: "https://forum.quasar.dev"
        },
        {
          title: "Twitter",
          caption: "@quasarframework",
          icon: "rss_feed",
          link: "https://twitter.quasar.dev"
        },
        {
          title: "Facebook",
          caption: "@QuasarFramework",
          icon: "public",
          link: "https://facebook.quasar.dev"
        },
        {
          title: "Quasar Awesome",
          caption: "Community Quasar projects",
          icon: "favorite",
          link: "https://awesome.quasar.dev"
        }
      ],
      menuList
    };
  },
  computed: {
    ...mapGetters("global", ["leftDrawer", "rightDrawer"]),
    _leftDrawer: {
      get() {
        return this.leftDrawer;
      },
      set(value) {
        this.updateLeftDrawer(value);
      }
    },
    _rightDrawer: {
      get() {
        return this.rightDrawer;
      },
      set(value) {
        this.updateRightDrawer(value);
      }
    }
  },
  methods: {
    ...mapMutations("global", ["updateLeftDrawer", "updateRightDrawer"])
  },
  created() {}
};
</script>

