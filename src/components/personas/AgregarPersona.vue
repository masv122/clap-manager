<template>
  <div>
    <q-dialog
      v-model="_agregarPersona"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
      @show="reset"
    >
      <q-card class="bg-white text-dark" style="width: 700px; max-width: 80vw">
        <q-toolbar dark class="bg-negative text-white q-mb-md">
          <q-toolbar-title shrink>
            <div class="text-h6">
              <q-icon name="add" />Agregar Persona
            </div>
          </q-toolbar-title>
          <q-btn dense flat icon="close" v-close-popup class="q-ml-auto">
            <q-tooltip content-class="bg-dark text-white">Cerrar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
              <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
                <DatosPersonales />
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
                <TipoPersona />
                <AsignarNucleo v-if="tipoPersona && tipoPersona.value === 'asignar'" />
                <CrearNucleo v-else-if="tipoPersona && tipoPersona.value === 'crear'" />
                <CrearJefeCalle v-else-if="tipoPersona && tipoPersona.value === 'jefe'" />
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
                      v-if="tipoPersona && (tipoPersona.value === 'asignar' || tipoPersona.value === 'crear')"
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
                    @click="confirmarPersona"
                  />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import * as API from "src/mixins/API";
import Nucleo from "src/class/nucleo";
import Integrante from "src/class/integrante";
import JefeCalle from "src/class/jefeCalle";
import { mapGetters, mapMutations } from "vuex";
import DatosPersonales from "components/personas/DatosPersonales.vue";
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
    DatosPersonales,
    TipoPersona,
    AsignarNucleo,
    CrearNucleo,
    CrearJefeCalle,
    DatosPersonalesConfirmacion,
    DatosNucleoConfirmacion,
    DatosJefeConfirmacion
  },
  data() {
    return {
      step: 1
    };
  },
  computed: {
    ...mapGetters("personas", [
      "agregarPersona",
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
      "nucleo"
    ]),
    ...mapGetters("sectores", ["sectores", "sector", "buscarSector"]),
    _agregarPersona: {
      get() {
        return this.agregarPersona;
      },
      set(value) {
        this.updateAgregarPersona(value);
      }
    },
    _nombreNucleo() {
      if (this.nucleo)
        return this.tipoPersona.value === "asignar"
          ? this.buscarNucleo(this.nucleo).nombre
          : this.nombreNucleo;
      else return "";
    },
    _direccion() {
      if (this.nucleo)
        return this.tipoPersona.value === "asignar"
          ? this.buscarNucleo(this.nucleo).direccion
          : this.direccion;
      else return "";
    },
    nombreSector() {
      if (this.nucleo || this.sector)
        return this.buscarSector(
          this.tipoPersona.value === "asignar"
            ? this.buscarNucleo(this.nucleo).sector
            : this.sector
        ).nombre;
      else return "";
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateSector"]),
    ...mapMutations("personas", [
      "updateAgregarPersona",
      "updateNombre",
      "updateApellido",
      "updateCedula",
      "updateTelefono",
      "updateFechaNacimiento",
      "updateTipoPersona",
      "updateNucleo",
      "updateNombreNucleo",
      "updateDireccion",
      "updateCodigo"
    ]),
    async confirmarPersona() {
      try {
        let persona,
          nucleo,
          resultadoFinal,
          resultadoAgregarIntegrante,
          resultadoAgregarNucleo,
          resultadoActualizarNucleo;
        let tipo;
        switch (this.tipoPersona.value) {
          case "asignar":
            tipo = "Integrante";
            persona = new Integrante(
              this.nombre,
              this.apellido,
              this.cedula,
              this.telefono,
              this.fechaNacimiento,
              this.nucleo
            );
            resultadoAgregarIntegrante = await API.agregarIntegrante(persona);
            if (!!resultadoAgregarIntegrante)
              resultadoFinal = await API.actualizarIntegrantesNucleo(
                resultadoAgregarIntegrante,
                persona
              );
            break;
          case "crear":
            tipo = "Nucleo";
            nucleo = new Nucleo(
              this.cedula,
              this.nombreNucleo,
              this.direccion,
              this.sector
            );
            persona = new Integrante(
              this.nombre,
              this.apellido,
              this.cedula,
              this.telefono,
              this.fechaNacimiento
            );
            resultadoAgregarNucleo = await API.agregarNucleo(nucleo);
            if (!!resultadoAgregarNucleo) {
              persona.nucleo = resultadoAgregarNucleo.id;
              resultadoAgregarIntegrante = await API.agregarIntegrante(persona);
              if (!!resultadoAgregarIntegrante) {
                resultadoActualizarNucleo = await API.actualizarIntegrantesNucleo(
                  resultadoAgregarIntegrante,
                  persona
                );
                if (!!resultadoActualizarNucleo) {
                  resultadoFinal = await API.actualizarNucleosSector(
                    resultadoAgregarNucleo,
                    nucleo
                  );
                } else resultadoFinal = false;
              } else resultadoFinal = false;
            } else resultadoFinal = false;
            break;
          case "jefe":
            tipo = "Jefe";
            const jefeCalle = new JefeCalle(
              this.nombre,
              this.apellido,
              this.cedula,
              this.telefono,
              this.fechaNacimiento,
              this.codigo,
              this.direccion
            );
            resultadoFinal = await API.agregarJefe(jefeCalle);
            break;
          default:
            break;
        }
        let mensaje = resultadoFinal
          ? `${tipo} Agregado`
          : `No se pudo agregar el ${tipo}`;
        let icon = !!resultadoFinal ? "check" : "close";
        this.$q.notify({
          message: mensaje,
          icon: icon
        });
        if (resultadoFinal) this.updateAgregarPersona();
      } catch (error) {
        alert(error);
      }
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>