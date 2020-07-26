export default {
  methods: {
    eliminarSector() {
      this.$q
        .dialog({
          title: "Confirme",
          message: !!this.sector.nucleos
            ? "El sector posee nucleos e integrantes registrados.\n Si lo elimina tambien se eliminaran los mismos.\n ¿Seguro que quiere eliminar este sector?"
            : "¿Seguro que quiere eliminar este sector?",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            if (!!this.sector.nucleos) {
              const result = await this.sector.getRegistrosAsociados();
              await API.eliminarIntegrantes(result.integrantes);
              await API.eliminarNucleos(result.nucleos);
            }
            if (!!this.sector.jefe)
              await API.eliminarSectorJefe(await this.sector.getJefe());
            await API.eliminarSector(this.sector);
          } catch (error) {
            alert("error al eliminar el sector 101: " + error);
          }
        });
    },
    eliminarIntegrante() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere eliminar este integrante",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            await API.eliminarIntegrante(this.integrante);
          } catch (error) {
            alert("error al eliminar el integrante 101: " + error);
          }
        });
    },
    eliminarNucleo() {
      this.$q
        .dialog({
          title: "Confirme",
          message: !!this.nucleo.integrantes
            ? "El nucleo posee integrantes registrados.\n Si lo elimina tambien se eliminaran los mismos.\n ¿Seguro que quiere eliminar este nucleo?"
            : "¿Seguro que quiere eliminar este nucleo familiar",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            if (!!this.nucleo.integrantes) {
              const result = await this.nucleo.getRegistrosAsociados();
              await API.eliminarIntegrantes(result.integrantes);
            }
            await API.eliminarNucleo(this.nucleo);
          } catch (error) {
            alert("error al eliminar el nucleo 101: " + error);
          }
        });
    },
    eliminarJefe() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere eliminar este Jefe de calle",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            if (!!this.jefe.sector)
              await API.eliminarJefeSector(await this.jefe.getSector());
            await API.eliminarJefe(this.jefe);
          } catch (error) {
            alert("error al eliminar el jefe de calle 101: " + error);
          }
        });
    },
    eliminarPago() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere eliminar este pago?",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            await API.eliminarPago(this.pago);
            await API.eliminarPagosNucleo(this.pago);
          } catch (error) {
            alert("error al eliminar el pago 101: " + error);
          }
        });
    }
  },
};