<template>
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
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.derechos {
  padding-top: 0.5rem;
}
.frameworks {
  font-size: 2rem;
}
.creditos img {
  padding-left: 0.5rem;
}
</style>