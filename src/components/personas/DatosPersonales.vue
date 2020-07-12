<template>
  <div>
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._nombre.$model"
      type="text"
      label="Nombres"
      error-message="Debe escribir los nombres de la persona"
      :error="$v._nombre.$invalid"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._apellido.$model"
      type="text"
      label="Apellido"
      error-message="Debe escribir los apellidos de la persona"
      :error="$v._apellido.$invalid"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model.number="$v._cedula.$model"
      type="number"
      label="Cedula"
      error-message="Debe escribir la cedula de la persona"
      :error="$v._cedula.$invalid"
    />
    <q-input
      label-color="negative"
      clearable
      color="negative"
      v-model="$v._telefono.$model"
      type="tel"
      label="Telefono"
      mask="(####) ### - ####"
      error-message="Debe escribir un numero valido"
      :error="$v._telefono.$invalid"
    />
    <q-input
      v-model="$v._fechaNacimiento.$model"
      mask="date"
      label-color="negative"
      label="Fecha de nacimiento "
      :rules="['date']"
      error-message="Debe escribir la fecha de nacimiento de la persona"
      :error="$v._fechaNacimiento.$invalid"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              v-model="$v._fechaNacimiento.$model"
              color="negative"
              @input="() => $refs.qDateProxy.hide()"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  numeric
} from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DatosPersonales",
  watch: {
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateDatosPersonalesInvalidos(newValue.$invalid);
      }
    }
  },
  computed: {
    ...mapGetters("personas", [
      "nombre",
      "apellido",
      "cedula",
      "telefono",
      "fechaNacimiento",
      "datosPersonalesInvalidos"
    ]),
    _nombre: {
      get() {
        return this.nombre;
      },
      set(value) {
        this.updateNombre(value);
      }
    },
    _apellido: {
      get() {
        return this.apellido;
      },
      set(value) {
        this.updateApellido(value);
      }
    },
    _cedula: {
      get() {
        return this.cedula;
      },
      set(value) {
        this.updateCedula(value);
      }
    },
    _telefono: {
      get() {
        return this.telefono;
      },
      set(value) {
        this.updateTelefono(value);
      }
    },
    _fechaNacimiento: {
      get() {
        return this.fechaNacimiento;
      },
      set(value) {
        this.updateFechaNacimiento(value);
      }
    }
  },
  validations: {
    _nombre: {
      required
    },
    _apellido: {
      required
    },
    _cedula: {
      required,
      minLength: minLength(6),
      numeric
    },
    _telefono: {
      minLength: minLength(17)
    },
    _fechaNacimiento: {
      required
    }
  },
  methods: {
    ...mapMutations("personas", [
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateFechaNacimiento",
      "updateDatosPersonalesInvalidos"
    ])
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-actve,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>