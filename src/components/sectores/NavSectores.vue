<template>
  <div class="q-pt-md q-mx-md">
    <div class="fit row justify-end">
      <div class="col-auto">
        <q-btn-group push rounded>
          <q-btn color="positive" push @click="updateAgregarSector" icon="add" label="Agregar" />
          <q-btn color="info" push @click="updateDetallesSector" icon="article" label="Detalles" />
          <q-btn color="amber" push @click="updateModificarSector" icon="edit" label="Modificar" />
          <q-btn
            color="negative"
            push
            @click="updateConfirmacionEliminacion"
            icon="delete"
            label="Eliminar"
          />
          <q-btn color="primary" push icon="print" label="Imprimir" />
        </q-btn-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavSectores",
  methods: {
    ...mapMutations("sectores", [
      "updateAgregarSector",
      "updateDetallesSector",
      "updateModificarSector"
    ]),
    ...mapMutations("global", ["updateConfirmacionEliminacion"])
  }
};
</script>

<style lang="scss" scoped>
</style>
