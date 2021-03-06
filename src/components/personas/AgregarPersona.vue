<template>
  <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
    <div class="column q-mr-md">
      <q-btn color="red" class="col self-end" label="Restablecer" @click="reset" />
    </div>
    <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
      <formulario-datos-personales />
      <q-stepper-navigation>
        <q-btn
          @click="step = 2"
          color="primary"
          icon-right="chevron_right"
          label="Siguiente"
          :disable="datosPersonalesInvalidos"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="Seleccione el tipo de persona"
      caption="Optional"
      icon="perm_identity"
      :done="step > 2"
    >
      <tipo-persona />
      <asignar-nucleo v-if="!!tipoPersona && tipoPersona && tipoPersona.value === 'integrante'" />
      <crear-nucleo v-else-if="!!tipoPersona && tipoPersona && tipoPersona.value === 'nucleo'" />
      <crear-jefeCalle v-else-if="!!tipoPersona && tipoPersona && tipoPersona.value === 'jefe'" />
      <q-stepper-navigation>
        <q-btn
          flat
          @click="step = 1"
          icon="chevron_left"
          color="negative"
          label="Regresar"
          class="q-ml-sm"
        />
        <q-btn
          @click="step = 3"
          color="primary"
          icon-right="chevron_right"
          label="Siguiente"
          :disable="datosTipoPersonaInvalidos"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="3" title="Confirme la informacion" icon="check">
      <div class="row">
        <div class="col">
          <DatosPersonalesConfirmacion />
        </div>
        <div class="col" v-if="step === 3">
          <DatosNucleoConfirmacion
            :nombreNucleo="_nombreNucleo"
            :direccion="_direccion"
            :nombreSector="nombreSector"
            v-if="!!tipoPersona && (tipoPersona.value === 'integrante' || tipoPersona.value === 'nucleo')"
          />
          <DatosJefeConfirmacion v-else />
        </div>
      </div>
      <q-stepper-navigation>
        <q-btn
          flat
          @click="step = 2"
          icon="chevron_left"
          color="negative"
          label="Regresar"
          class="q-ml-sm"
        />
        <q-btn
          color="positive"
          icon-right="check"
          label="Agregar"
          @click="confirmarPersona('agregar')"
        />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script>
import confirmarPersona from "src/mixins/confirmarPersona";
import { mapGetters, mapMutations } from "vuex";
import FormularioDatosPersonales from "components/personas/FormularioDatosPersonales.vue";
import TipoPersona from "components/personas/TipoPersona.vue";
import AsignarNucleo from "components/personas/AsignarNucleo.vue";
import CrearNucleo from "components/personas/CrearNucleo.vue";
import CrearJefeCalle from "components/personas/CrearJefeCalle.vue";
import DatosPersonalesConfirmacion from "components/personas/DatosPersonalesConfirmacion.vue";
import DatosNucleoConfirmacion from "components/personas/DatosNucleoConfirmacion.vue";
import DatosJefeConfirmacion from "components/personas/DatosJefeConfirmacion.vue";
export default {
  name: "AgregarPersona",
  components: {
    FormularioDatosPersonales,
    TipoPersona,
    AsignarNucleo,
    CrearNucleo,
    CrearJefeCalle,
    DatosPersonalesConfirmacion,
    DatosNucleoConfirmacion,
    DatosJefeConfirmacion,
  },
  mixins: [confirmarPersona],
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapGetters("personas", [
      "nombre",
      "apellido",
      "cedula",
      "telefono",
      "fechaNacimiento",
      "tipoPersona",
      "nombreNucleo",
      "direccion",
      "codigo",
      "datosPersonalesInvalidos",
      "datosTipoPersonaInvalidos",
      "buscarNucleo",
      "nucleo",
    ]),
    ...mapGetters("sectores", ["sectores", "sector", "buscarSector"]),
    _nombreNucleo() {
      if (this.nucleo)
        return this.tipoPersona.value === "integrante"
          ? this.buscarNucleo(this.nucleo).nombre
          : this.nombreNucleo;
      else return "";
    },
    _direccion() {
      if (this.nucleo)
        return this.tipoPersona.value === "integrante"
          ? this.buscarNucleo(this.nucleo).direccion
          : this.direccion;
      else return "";
    },
    nombreSector() {
      if (this.nucleo || this.sector)
        return this.buscarSector(
          this.tipoPersona.value === "integrante"
            ? this.buscarNucleo(this.nucleo).sector
            : this.sector
        ).nombre;
      else return "";
    },
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateFechaNacimiento",
      "updateTipoPersona",
      "updateNucleo",
      "updateNombreNucleo",
      "updateDireccion",
      "updateCodigo",
    ]),
    reset() {
      this.step = 1;
      this.updateTipoPersona(null);
      this.updateNucleo(null);
      this.updateSector(null);
      this.updateNombreNucleo(null);
      this.updateDireccion(null);
      this.updateCodigo(null);
      this.updateNombre(null);
      this.updateApellido(null);
      this.updateCedula(null);
      this.updateTelefono(null);
      this.updateFechaNacimiento(null);
    },
  },
  created() {
    this.reset();
  },
  destroyed() {
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
</style>