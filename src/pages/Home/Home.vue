<template>
  <h1>Content home</h1>
  <v-table :rows="rows" :cols="cols"></v-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VTable from '@vert-frame-core/design-system';

export default defineComponent({
  name: 'Home',
  components: {
    VTable
  },
  setup() {
    const cols = ['id', 'name', 'email', 'phone'];
    const rows = [
      { id: 1, name: 'John', email: 'jonh@teste.com', phone: '+5511999999999' },
      { id: 2, name: 'Jane', email: 'jane@teste.com', phone: '+5511999999999' },
    ]
    return { cols, rows };
  }
});
</script>
