<template>
  <q-form @submit.prevent class="q-gutter-md">
    <q-input
      v-if="!modificar"
      v-model.number="$v._referencia.$model"
      type="number"
      color="negative"
      label-color="negative"
      label="Numero de referencia"
      error-message="La referencia debe ser numerica y debe tener al menos 4 digitos"
      :error="$v._referencia.$invalid"
    />
    <q-input
      color="negative"
      label-color="negative"
      v-model="$v._monto.$model"
      label="Monto"
      mask="#.##"
      fill-mask="0"
      reverse-fill-mask
      input-class="text-right"
      suffix="Bs.S."
      error-message="El monto debe ser de al menos 1 Bs.S."
      :error="$v._monto.$invalid"
    />
    <q-input
      label-color="negative"
      color="negative"
      v-model.number="$v._fecha.$model"
      mask="date"
      :rules="['date']"
      label="Seleccione fecha"
      class="q-pb-none"
      error-message="Debe proporcionar una fecha"
      :error="$v._fecha.$invalid"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="_fecha" color="negative" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-select
      label="Banco"
      label-color="negative"
      color="negative"
      v-model="$v._banco.$model"
      use-input
      behavior="menu"
      hide-selected
      fill-input
      lazy-rules
      input-debounce="0"
      option-value="codigo"
      option-label="nombre"
      :options="bancosOpt"
      @filter="filterBancos"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">No results</q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-option-group
      v-model="$v._estado.$model"
      label-color="negative"
      color="negative"
      :options="estados"
      inline
    />
  </q-form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required, minValue, minLength, numeric } from "vuelidate/lib/validators";
export default {
  name: "FormularioDatosPago",
  props: {
    modificar: {
      type: Boolean,
      default: false
    }
  },
  validations: {
    _monto: {
      required,
      minValue: minValue(1),
      minLength: minLength(1),
      numeric
    },
    _estado: {
      required
    },
    _fecha: {
      required
    },
    _referencia: {
      required,
      minLength: minLength(4),
      numeric
    }
  },
  data() {
    return {
      bancosOpt: [],
      estados: [
        { label: "Pendiente", value: "pendiente" },
        { label: "Confirmado", value: "confirmado" }
      ],
      step: 1,
      date: ""
    };
  },
  watch: {
    async sector(newValue, oldValue) {
      if (newValue !== oldValue) this.nucleosOpt = this.nucleosSector(newValue);
      this.updateNucleo(null);
    },
    $v: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.updateFormularioModificarPagoInvalido(
          newValue._monto.$invalid &&
            newValue._estado.$invalid &&
            newValue._fecha.$invalid
        );
        this.updateFormularioPagoInvalido(newValue.$invalid);
      }
    }
  },
  computed: {
    ...mapGetters("pagos", [
      "pago",
      "monto",
      "banco",
      "estado",
      "fecha",
      "referencia"
    ]),
    ...mapGetters("global", ["bancos", "buscarBanco"]),
    ...mapGetters("personas", ["nucleo"]),
    _monto: {
      get() {
        return this.monto;
      },
      set(value) {
        this.updateMonto(value);
      }
    },
    _banco: {
      get() {
        return this.banco;
      },
      set(value) {
        this.updateBanco(value);
      }
    },
    _estado: {
      get() {
        return this.estado;
      },
      set(value) {
        this.updateEstado(value);
      }
    },
    _fecha: {
      get() {
        return this.fecha;
      },
      set(value) {
        this.updateFecha(value);
      }
    },
    _referencia: {
      get() {
        return this.referencia;
      },
      set(value) {
        this.updateReferencia(value);
      }
    }
  },
  methods: {
    ...mapMutations("pagos", [
      "updateMonto",
      "updateBanco",
      "updateEstado",
      "updateFecha",
      "updateReferencia",
      "updateFormularioPagoInvalido",
      "updateFormularioModificarPagoInvalido"
    ]),
    filterBancos(val, update, abort) {
      let opciones = this.bancos;
      update(() => {
        const needle = val.toLocaleLowerCase();
        this.bancosOpt = opciones.filter(
          v => v.nombre.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    }
  },
  created() {
    this.bancosOpt = this.bancos;
    if (this.modificar) {
      this.updateMonto(this.pago.monto);
      this.updateBanco(this.buscarBanco(this.pago.banco));
      this.updateEstado(this.pago.estado);
      this.updateFecha(this.pago.fecha);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>