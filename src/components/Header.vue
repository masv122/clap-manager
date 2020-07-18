<template>
  <div>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        @click="updateLeftDrawer"
      />
      <q-toolbar-title>CLAP Manager</q-toolbar-title>
      <q-btn color="white" text-color="dark" :to="{name: 'Login'}" v-if="$q.screen.width > 500"  label="Iniciar sesion" />
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