import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("sectores", ["sector"]),
    ...mapGetters("personas", ["integrante", "nucleo", "jefe", "tipoPersona"]),
    ...mapGetters("pagos", ["pago"])
  },
  methods: {
    ...mapMutations("sectores", [
      "updateAgregar",
      "updateDetalles",
      "updateModificar"
    ]),
    ...mapMutations("personas", [
      "updateAgregarPersona",
      "updateModificarPersona",
      "updateDetallesPersona"
    ]),
    ...mapMutations("pagos", [
      "updateAgregarPago",
      "updateDetallesPago",
      "updateModificarPago"
    ]),
    agregarSector() {
      if (this.$q.screen.lt.sm) this.$router.push({ name: "Agregar sector" });
      else this.updateAgregar();
    },
    agregarPersona() {
      if (this.$q.screen.lt.sm) this.$router.push({ name: "Agregar persona" });
      else this.updateAgregarPersona();
    },
    agregarPago() {
      if (this.$q.screen.lt.sm) this.$router.push({ name: "Agregar pago" });
      else this.updateAgregarPago();
    },
    detallesSector() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Detalles sector",
          params: { id: this.sector.id }
        });
      else this.updateDetalles();
    },
    detallesPersona() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Detalles persona",
          params: { tipo: this.tipoPersona.value, id: this.idPersona() }
        });
      else this.updateDetallesPersona();
    },
    detallesPago() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Detalles pago",
          params: { id: this.pago.id }
        });
      else this.updateAgregarPago();
    },
    modificarSector() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Modificar sector",
          params: { id: this.sector.id }
        });
      else this.updateModificar();
    },
    modificarPersona() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Modificar persona",
          params: { tipo: this.tipoPersona.value, id: this.idPersona() }
        });
      else this.updateModificarPersona();
    },
    modificarPago() {
      if (this.$q.screen.lt.sm)
        this.$router.push({
          name: "Modificar pago",
          params: { id: this.pago.id }
        });
      else this.updateModificarPago();
    }
  }
};
