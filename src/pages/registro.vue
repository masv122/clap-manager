<template>
  <q-page padding>
    <q-card class="login">
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="text-h5 text-negative">Registro</div>
            <div class="text-subtitle1 text-negative">Registrate para que puedas respaldar tus registros</div>
            <q-separator />
            <q-input
              v-model="name"
              label-color="negative"
              color="negative"
              label="Introduzca su cedula"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            >
              <template v-slot:prepend>
                <q-icon name="perm_identity" color="negative" />
              </template>
            </q-input>
            <q-input
              label-color="negative"
              color="negative"
              type="password"
              v-model="age"
              label="Ingrese su contraseña"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" color="negative" />
              </template>
            </q-input>
            <q-input
              label-color="negative"
              color="negative"
              type="password"
              v-model="age"
              label="Vuelva a introduciar su contraseña"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" color="negative" />
              </template>
            </q-input>
            <q-input
              label-color="negative"
              color="negative"
              type="email"
              v-model="age"
              label="Ingrese su correo"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            >
              <template v-slot:prepend>
                <q-icon name="email" color="negative" />
              </template>
            </q-input>
            <div>
              <q-btn label="Registrarse" type="submit" class="full-width" color="negative" />
            </div>
            <q-btn label="¿Ya estas registrado? ingresa" class="full-width" color="negative" flat />
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Registro",
  data() {
    return {
      name: null,
      age: null,
      accept: false
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>