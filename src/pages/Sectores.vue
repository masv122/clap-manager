<template>
  <q-page :style-fn="myTweak" padding>
    <router-view />
  </q-page>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Sectores",
  methods: {
  ...mapMutations("sectores", ["updateSector"]),
    myTweak(offset) {
      return { minHeight: offset ? `calc(100vh - ${offset}px` : "100vh" };
    }
  },
    destroyed() {
    this.updateSector(null)
  }
};
</script>

<style lang="scss" scoped>
</style>
