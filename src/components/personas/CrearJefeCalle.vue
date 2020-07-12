<template>
  <q-form @submit.prevent class="q-gutter-md q-px-md q-pb-md">
    <div class="text-h5 q-ml-xs q-pt-md">
      <q-icon name="group" />Crear Jefe de Calle
    </div>
    <q-separator color="negative" inset />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._codigo.$model"
      type="text"
      label="Codigo"
      error-message="Debe escribir el codigo del jefe de calle"
      :error="$v._codigo.$invalid"
    />
      <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._direccion.$model"
      type="text"
      label="Direccion"
      error-message="Debe proporcionar una direccion"
      :error="$v._direccion.$invalid"
    />
  </q-form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "AsignarNucleo",
  data() {
    return {
    };
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
    _codigo: {
      required
    },
    _direccion: {
      required
    }
  },
  computed: {
    ...mapGetters("personas", ["codigo", "direccion"]),
    _codigo: {
      get() {
        return this.codigo;
      },
      set(value) {
        this.updateCodigo(value);
      }
    },
    _direccion: {
      get() {
        return this.direccion;
      },
      set(value) {
        return this.updateDireccion(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", [
      "updateCodigo",
      "updateDireccion",
      "updateDatosTipoPersonaInvalido"
    ])
  }
};
</script>

<style lang="scss" scoped>
</style>