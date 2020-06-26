<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select
        v-model="model"
        :options="options"
        label="Seleccione"
        label-color="negative"
        color="negative"
        options-selected-class="text-negative"
      >
        <template v-slot:prepend>
          <q-icon :name=" model ?  model.icon : 'perm_identity'" color="negative" />
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
export default {
  name: "TipoPersona",
  data() {
    return {
      model: null,
      options: [
        {
          label: "Asignar a nucleo",
          value: "asignar",
          icon: "group_add"
        },
        {
          label: "Crear Nucleo",
          value: "crear",
          icon: "person_add"
        },
        {
          label: "Guardar com Jefe de calle",
          value: "jefe",
          icon: "supervised_user_circle"
        }
      ]
    };
  }
};
</script>
