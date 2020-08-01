<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="text-h6 q-mt-md">
        <q-icon name="info" class="q-mr-md" />Datos Personales
      </div>
      <q-separator />
      <formulario-datos-personales modificar />
      <crear-jefe-calle modificar />
    </q-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormularioDatosPersonales from "components/personas/FormularioDatosPersonales.vue";
import CrearJefeCalle from "components/personas/CrearJefeCalle.vue";
export default {
  name: "ModificarJefe",
  components: {
    FormularioDatosPersonales,
    CrearJefeCalle
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("personas", ["jefe"]),
    ...mapGetters("sectores", ["sectores", "sector"])
  },
  methods: {
    ...mapMutations("personas", [
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateCodigo",
      "updateDireccion",
      "updateFechaNacimiento"
    ]),
    ...mapMutations("sectores", ["updateSector"])
  },
  created() {
    this.updateNombre(this.jefe.nombre);
    this.updateApellido(this.jefe.apellido);
    this.updateCedula(this.jefe.id);
    this.updateTelefono(this.jefe.telefono);
    this.updateFechaNacimiento(this.jefe.fechaNacimiento);
    this.updateCodigo(this.jefe.codigo);
    this.updateDireccion(this.jefe.direccion);
    this.updateSector(this.jefe.sector);
  }
};
</script>
