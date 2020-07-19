<template>
  <div>
    <q-dialog v-model="_detallesPago" persistent>
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="article" class="q-mr-md" />Detalles Pago
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <div class="column">
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="group" />Informacion del nucleo
              </div>
              <q-field borderless label="Jefe(a) del nucleo" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Jefe(a) del nucleo</div>
                </template>
              </q-field>
              <q-field borderless label="Cedula" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Cedula</div>
                </template>
              </q-field>
              <q-field borderless label="Direccion" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Direccion</div>
                </template>
              </q-field>
            </div>
            <div class="col">
              <div class="text-h6 q-ml-xl">
                <q-icon name="info" />Informacion detallada
              </div>
              <q-field borderless label="Numero de referencia" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Numero de referencia</div>
                </template>
              </q-field>
              <q-field borderless label="Monto" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Monto</div>
                </template>
              </q-field>
              <q-field borderless label="Fecha" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Fecha</div>
                </template>
              </q-field>
              <q-field borderless label="Estado" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Estado</div>
                </template>
              </q-field>
              <q-field borderless label="Banco" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Banco</div>
                </template>
              </q-field>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DetallesPago",
  computed: {
    ...mapGetters("pagos", ["detallesPago"]),
    _detallesPago: {
      get() {
        return this.detallesPago;
      },
      set(value) {
        this.updateDetallesPago(value);
      }
    }
  },
  methods: {
    ...mapMutations("pagos", ["updateDetallesPago"])
  }
};
</script>

<style lang="scss" scoped>
</style>
