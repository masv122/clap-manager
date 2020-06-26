<template>
  <div>
    <q-dialog v-model="_confirmacionEliminacion" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm">¿Seguro que quieres eliminar esta entrada?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Eliminar" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ConfirmacionEliminacion",
  computed: {
    ...mapGetters("global", ["confirmacionEliminacion"]),
    _confirmacionEliminacion: {
      get() {
        return this.confirmacionEliminacion;
      },
      set() {
        this.upateConfirmacionEliminacion();
      }
    }
  },
  methods: {
    ...mapMutations("global", ["upateConfirmacionEliminacion"])
  }
};
</script>

<style lang="scss" scoped>
</style>