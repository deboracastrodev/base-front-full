<template>
  <h1>Página Home</h1>
  <div style="width: 50%; padding-top: 50px">
    <h4>Componente tabela importando da lib vert-frame-core</h4>
    <label>Essa lib foi criada inspirada no design system da VERT</label>
  </div>
  <br />
  <div class="d-flex">
    <v-button status="primary" size="lg" @click="onClickTeste('primary')">
      Botão Primary LG
    </v-button>
    <v-button status="primary" size="lg" outline @click="onClickTeste('primary')">
      Botão Primary LG
    </v-button>
    <v-button status="primary" size="lg" outline @click="onClickTeste('primary')">
      <el-icon>
        <SvgIcon type="mdi" :path="mdiCashMultiple" :size="15"></SvgIcon>
      </el-icon>
      &nbsp; Icon
    </v-button>
    <v-button status="not" size="lg" @click="onClickTeste('primary')">
      Texto
    </v-button>
  </div>
  <div class="d-flex">
    <v-button status="helper" size="md" @click="onClickTeste('helper')"> Botão Helper MD </v-button>
    <v-button status="helper" size="md" outline @click="onClickTeste('outline')"> Helper outline </v-button>
  </div>
  <div class="d-flex">
    <v-button status="success" size="sm" @click="onClickTeste('success')">
      Botão Success SM
    </v-button>
    <v-button status="success" size="sm" outline @click="onClickTeste('success outline')">
      Success outline
    </v-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VTable, VButton } from '@vert-frame-core/design-system';
import { mdiCashMultiple } from '@mdi/js';

export default defineComponent({
  name: 'Home',
  components: {
    VTable,
    VButton
  },
  setup() {
    const cols = ['id', 'name', 'email', 'phone'];
    const rows = [
      { id: 1, name: 'John', email: 'jonh@teste.com', phone: '+5511999999999' },
      { id: 2, name: 'Jane', email: 'jane@teste.com', phone: '+5511999999999' }
    ];

    function onClickTeste(text: string) {
      alert(text);
    }

    return { cols, rows, onClickTeste, mdiCashMultiple };
  }
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
