<template>
  <q-layout view="hHh Lpr fFf" class="bg-negative">
    <q-header elevated class="bg-white text-negative">
      <Header />
    </q-header>
    <div class="column justify-end">
      <div class="col self-center q-mt-lg">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
    <q-footer elevated class="bg-white text-black">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script>
import Header from "components/login/Header.vue";
import Footer from "components/login/Footer.vue";

export default {
  name: "Login",
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
</style>