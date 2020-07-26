<template>
  <q-page :style-fn="myTweak" padding>
    <router-view />
  </q-page>
</template>

<script>
export default {
  name: "Sectores",
  methods: {
    myTweak(offset) {
      return { minHeight: offset ? `calc(100vh - ${offset}px` : "100vh" };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
