<template>
  <div class="column q-gutter-y-xl q-mt-xs">
    <informacion-pago
      :referencia="pago.id"
      modificar
      :monto="pago.monto"
      :fecha="pago.fecha"
      :estado="pago.estado"
      :banco="pago.banco"
      class="col"
    />
    <informacion-nucleo
      :nombre-nucleo="buscarNucleo(pago.nucleo).nombre"
      :nombre="
        !!buscarNucleo(pago.nucleo).cedula
          ? buscarIntegrante(buscarNucleo(pago.nucleo).cedula).nombre
          : 'Sin jefe familiar, asigne uno'
      "
      :cedula="buscarNucleo(pago.nucleo).cedula"
      :direccion="buscarNucleo(pago.nucleo).direccion"
      class="col"
    />
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import InformacionNucleo from "components/personas/InformacionNucleo.vue";
  import InformacionPago from "components/pagos/InformacionPago.vue";
  export default {
    name: "DetallesPago",
    components: {
      InformacionNucleo,
      InformacionPago,
    },
    props: {
      id: {
        type: [String, Number],
        default: null,
      },
    },
    computed: {
      ...mapGetters("pagos", ["pago", "buscarPago"]),
      ...mapGetters("personas", ["buscarNucleo", "buscarIntegrante"]),
    },
    methods: {
      ...mapMutations("pagos", ["updatePago"]),
    },
    created() {
      if (!!this.id) this.updatePago(this.buscarPago(Number.parseInt(this.id)));
    },
  };
</script>

<style lang="scss" scoped></style>
