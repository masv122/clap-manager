<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select
        v-model="tipo"
        :options="options"
        label="Seleccione"
        label-color="negative"
        color="negative"
        options-selected-class="text-negative"
      >
        <template v-slot:prepend>
          <q-icon :name=" tipo ?  tipo.icon : 'perm_identity'" color="negative" />
        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "TipoPersona",
  data() {
    return {
      options: [
        {
          label: "Asignar a nucleo",
          value: "asignar",
          icon: "group_add",
          description:
            "Agrega la persona como integrante y se le asigna un nucleo existente"
        },
        {
          label: "Crear Nucleo",
          value: "crear",
          icon: "person_add",
          description:
            "Agregar la persona como un integrante y se asigna como jefe de familia de un nuevo nucleo"
        },
        {
          label: "Guardar com Jefe de calle",
          value: "jefe",
          icon: "supervised_user_circle",
          description:
            "Agregar la persona como un jefe de calle de la comunidad"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("personas", ["tipoPersona"]),
    tipo: {
      get() {
        return this.tipoPersona;
      },
      set(value) {
        this.updateTipoPersona(value);
      }
    }
  },
  methods: {
    ...mapMutations("personas", ["updateTipoPersona"])
  }
};
</script>
