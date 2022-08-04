<template>
  <h1>Página Home</h1>
  <div style="width: 50%; padding-top: 50px;">
    <h4>Componente tabela importando da lib vert-frame-core</h4>
    <label>Essa lib foi criada inspirada no design system da VERT</label>
    <v-table :rows="rows" :cols="cols" style="padding-top: 20px;"> </v-table>
  </div>
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
      { id: 2, name: 'Jane', email: 'jane@teste.com', phone: '+5511999999999' }
    ];
    return { cols, rows };
  }
});
</script>
