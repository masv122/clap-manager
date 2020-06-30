<template>
  <div>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="updateLeftDrawer"
      />
      <q-img
        src="~assets/clap_manager_icon.png"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
        width="100px"
      />
      <q-toolbar-title>CLAP Manager</q-toolbar-title>
      <q-btn color="white" text-color="dark" :to="{name: 'Login'}"  label="Iniciar sesion" />
      <q-btn @click="updateRightDrawer" flat round dense icon="notifications" />
    </q-toolbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations("global", ["updateLeftDrawer", "updateRightDrawer"]),
  },
};
</script>

<style lang="scss" scoped>
</style>