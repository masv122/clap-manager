<template>
  <div class="q-gutter-y-md column">
    <q-toolbar class="bg-white text-white rounded-borders">
      <q-btn-group rounded class="q-ml-auto">
        <q-btn color="amber" rounded glossy icon="timeline" />
        <q-btn color="amber" rounded glossy icon="visibility" />
        <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
      </q-btn-group>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>
