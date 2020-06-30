<template>
  <q-page padding>
    <q-card class="login">
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="text-h5 text-negative">Ingresa tus credenciales</div>
            <q-separator />
            <q-input
              v-model="name"
              label-color="negative"
              color="negative"
              label="Cedula"
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
              label="Contraseña"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" color="negative" />
              </template>
            </q-input>

            <q-toggle color="negative" v-model="accept" label="Recuerdame" />

            <div>
              <q-btn label="Ingresar" type="submit" class="full-width" color="negative" />
            </div>
            <q-btn label="¿No tienes cuenta? registrate" class="full-width" color="negative" flat />
            <q-btn label="Olvide mi contraseña" class="full-width" color="negative" flat />
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Login",
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