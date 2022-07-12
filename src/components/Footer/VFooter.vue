<template>
  <div class="v-footer">
    <div class="v-footer__copyright" :class="isOpened ? 'v-footer__copyright--expanded' : null">
      Vert Capital {{ new Date().getFullYear() }} © Todos os direitos reservados
    </div>
    <div>
      <a href="#" class="h6">Sobre a Vert</a> |
      <a href="#" class="h6">Fale conosco</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'VFooter',
  setup() {
    const store = useStore();
    // const isOpened = ref(() => store.getters['utils/getIsOpened']);
    const isOpened = ref(true);

    return {
      isOpened
    };
  }
});
</script>

<style lang="scss">
.v-footer {
  background-color: $bg-color-gray;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  z-index: 9;
  justify-content: space-between;

  * {
    color: $neutral-color-low-medium;
  }

  &__copyright {
    margin-left: 3rem;

    &--expanded {
      margin-left: 13.13rem;
    }
  }
}
</style>
