<template>
  <div class="q-pt-md q-mx-md">
    <div class="fit row justify-end">
      <div class="col-auto">
        <q-btn-group push rounded>
          <q-btn color="positive" push @click="updateAgregar" icon="add" label="Agregar" />
          <q-btn
            color="info"
            :disable="sectorSel.length === 0"
            push
            @click="updateDetalles"
            icon="article"
            label="Detalles"
          />
          <q-btn
            color="amber"
            :disable="sectorSel.length === 0"
            push
            @click="updateModificar"
            icon="edit"
            label="Modificar"
          />
          <q-btn
            color="negative"
            :disable="sectorSel.length === 0"
            push
            @click="confirmacion"
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
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NavSectores",
  computed: {
    ...mapGetters("sectores", ["sectorSel"])
  },
  methods: {
    ...mapMutations("sectores", [
      "updateAgregar",
      "updateDetalles",
      "updateModificar"
    ]),
    ...mapMutations("global", ["updateConfirmacionEliminacion"]),
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere modificar este sector",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            const RESULTADO = await this.$db.local.rel.del("sector", this.sectorSel[0]);
            let mensaje = RESULTADO.deleted
              ? "Sector eliminado"
              : "No se pudo eliminar el sector";
            let icon = !!RESULTADO ? "check" : "close";
            this.$q.notify({
              message: mensaje,
              icon: icon
            });
          } catch (error) {
            alert(error);
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
