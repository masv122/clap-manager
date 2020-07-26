<template>
  <q-stepper v-model="step" ref="stepper" vertical done-color="negative" animated>
    <div class="column q-mr-md">
      <q-btn color="red" class="col self-end" label="Restablecer" @click="reset" />
    </div>
    <q-step :name="1" title="Complete los datos" icon="info" :done="step > 1">
      <datos-basicos-sector />
      <q-stepper-navigation>
        <q-btn
          @click="step = 2"
          color="primary"
          :disable="datosBasicosSectorInvalidos"
          icon-right="chevron_right"
          label="Siguiente"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="Seleccione un jefe de calle"
      caption="Optional"
      icon="supervised_user_circle"
      :done="step > 2"
    >
      <tabla-jefes-de-calle-grid />
      <q-stepper-navigation>
        <q-btn
          flat
          @click="step = 1"
          icon="chevron_left"
          color="negative"
          label="Regresar"
          class="q-ml-sm"
        />
        <q-btn @click="step = 3" color="primary" icon-right="chevron_right" label="Siguiente" />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="3" title="Confirme la informacion" icon="check">
      <datos-basicos-sector-confirmacion />
      <q-stepper-navigation>
        <q-btn
          flat
          @click="step = 2"
          icon="chevron_left"
          color="negative"
          label="Regresar"
          class="q-ml-sm"
        />
        <q-btn color="positive" icon-right="check" label="Confirmar" @click="confirmarSector" />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script>
import Sector from "src/class/sector";
import * as API from "src/mixins/API";
import { mapGetters, mapMutations, mapActions } from "vuex";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
import DatosBasicosSector from "components/sectores/DatosBasicosSector.vue";
import DatosBasicosSectorConfirmacion from "components/sectores/DatosBasicosSectorConfirmacion.vue";
export default {
  name: "AgregarSector",
  components: {
    TablaJefesDeCalleGrid,
    DatosBasicosSector,
    DatosBasicosSectorConfirmacion
  },
  data() {
    return {
      text: "",
      step: 1
    };
  },
  computed: {
    ...mapGetters("sectores", [
      "agregar",
      "nombre",
      "estado",
      "municipio",
      "parroquia",
      "datosBasicosSectorInvalidos"
    ]),
    ...mapGetters("global", ["estados", "municipios", "parroquias"]),
    ...mapGetters("personas", ["jefeSector"]),
    _agregarSector: {
      get() {
        return this.agregar;
      },
      set(value) {
        this.updateAgregar(value);
      }
    }
  },
  methods: {
    ...mapMutations("sectores", ["updateAgregar"]),
    ...mapMutations("sectores", [
      "updateEstado",
      "updateMunicipio",
      "updateParroquia",
      "updateNombre",
      "updateDatosBasicosSectorInvalidos"
    ]),
    ...mapMutations("personas", ["updateJefeSector"]),
    async confirmarSector() {
      try {
        const sector = new Sector(
          this.nombre,
          this.estados[this.estado - 1].nombre,
          this.municipios[this.municipio - 1].nombre,
          this.parroquias[this.parroquia - 1].nombre,
          null,
          !!this.jefeSector[0] ? this.jefeSector[0].id : null
        );
        const resultado = await API.guardarSector(sector);
        if (!!sector.jefe) await API.actualizarSectorJefe(resultado, sector);
        if (resultado) {
          if (this.$q.screen.lt.sm)
            this.$router.push({ name: "Registros sectores" });
          else this.updateAgregar();
        }
      } catch (error) {
        alert("error al confirmar el sector 101: " + error);
      }
    },
    reset() {
      this.updateEstado(null);
      this.updateMunicipio(null);
      this.updateParroquia(null);
      this.updateNombre("");
      this.step = 1;
      this.updateJefeSector([]);
    }
  },
  destroyed() {
    this.reset();
  }
};
</script>

<style lang="scss" scoped>
</style>