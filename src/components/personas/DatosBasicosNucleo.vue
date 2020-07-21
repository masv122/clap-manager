<template>
  <div>
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._nombreNucleo.$model"
      error-message="Debe proporcionar un nombre para el nucleo"
      :error="$v._nombreNucleo.$invalid"
      type="text"
      label="Nombre"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._direccion.$model"
      error-message="Debe proporcionar una direccion para el nucleo"
      :error="$v._direccion.$invalid"
      type="text"
      label="Direccion"
    />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DatosBasicosNucleo",
  props: {
    modificar: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateDatosTipoPersonaInvalido(newValue.$invalid);
      }
    }
  },
  validations: {
    _nombreNucleo: {
      required
    },
    _direccion: {
      required
    }
  },
  computed: {
    ...mapGetters("personas", ["nombreNucleo", "direccion", "nucleo"]),
    _nombreNucleo: {
      get() {
        return this.nombreNucleo;
      },
      set(value) {
        this.updateNombreNucleo(value);
      }
    },
    _direccion: {
      get() {
        return this.direccion;
      },
      set(value) {
        this.updateDireccion(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", [
      "updateNombreNucleo",
      "updateDatosTipoPersonaInvalido",
      "updateDireccion"
    ])
  },
  created() {
    if (this.modificar) {
      this.updateNombreNucleo(this.nucleo.nombre);
      this.updateDireccion(this.nucleo.direccion);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>