<template>
  <q-card>
    <q-card-section>
      <q-form @submit.prevent class="q-gutter-md">
        <div class="text-h6 q-mt-md">
          <q-icon name="info" class="q-mr-md" />Datos del sector
        </div>
        <q-separator />
        <DatosBasicosSector modificar />
        <div class="text-h6 q-mt-md">
          <q-icon name="supervised_user_circle" class="q-mr-md" />Reasignar jefe de calle
        </div>
        <q-separator />
        <TablaJefesDeCalleGrid />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions align="center">
      <q-btn
        label="Guardar"
        icon="save"
        type="submit"
        color="primary"
        class="q-ml-sm"
        @click="confirmacion"
        :loading="carga"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import Sector from "src/class/sector";
import * as API from "src/mixins/API";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import TablaJefesDeCalleGrid from "components/TablaJefesDeCalleGrid.vue";
import DatosBasicosSector from "components/sectores/DatosBasicosSector.vue";
export default {
  name: "ModificarSector",
  components: {
    TablaJefesDeCalleGrid,
    DatosBasicosSector,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      carga: false,
    };
  },
  computed: {
    ...mapGetters("sectores", [
      "sector",
      "estadoMod",
      "municipioMod",
      "parroquiaMod",
      "nombreMod",
      "buscarSector",
    ]),
    ...mapGetters("personas", ["jefeSector", "buscarJefe"]),
    ...mapGetters("global", [
      "estados",
      "municipios",
      "parroquias",
      "municipiosEnEstado",
      "parroquiasEnMunicipio",
      "estadoPorNombre",
      "municipioPorNombre",
      "parroquiasPorNombre",
    ]),
  },
  methods: {
    ...mapMutations("personas", ["updateJefeSector"]),
    ...mapMutations("sectores", ["updateSector"]),
    confirmacion() {
      this.$q
        .dialog({
          title: "Confirme",
          message: "¿Seguro que quiere modificar este sector",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.guardarSector();
        });
    },
    async guardarSector() {
      try {
        this.carga = true;
        const sector = new Sector(
          this.nombreMod,
          this.estados[this.estadoMod - 1].nombre,
          this.municipios[this.municipioMod - 1].nombre,
          this.parroquias[this.parroquiaMod - 1].nombre,
          this.sector.nucleos,
          !!this.jefeSector ? this.jefeSector.id : null,
          this.sector.id,
          this.sector.rev
        );
        const resultado = await API.guardarSector(sector);
        if (this.sector.jefe != this.jefeSector.id)
          await API.actualizarSectorJefe(resultado, sector);
        if (resultado) this.updateModificar();
      } catch (error) {
        alert("error al modificar el sector 101: " + error);
      } finally {
        this.carga = false;
      }
    },
  },
  async created() {
    this.estadosOpt = this.estados;
    this.municipiosOpt = this.municipios;
    this.parroquiasOpt = this.parroquias;
    if (!!this.id) this.updateSector(this.buscarSector(this.id));
  },
};
</script>

<style lang="scss" scoped>
</style>
