<template>
  <li class="v-nav-bar__label-group">
    <div class="v-nav-bar__label-group" :class="!isOpened() ? 'hide__label-group' : null">
      <span class="v-nav-bar__label-group__text">{{ title }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'VDivider',
  props: {
    title: { type: String }
  },

  setup() {
    const store = useStore();
    const isOpened = ref(() => store.getters['utils/getIsOpened']);

    return {
      isOpened
    };
  }
});
</script>

<style lang="scss" scoped>
.v-nav-bar {
  &__label-group {
    height: 38px;
    border-bottom: 0.01em solid lighten($text-color-light, 50%);
    margin-top: 5px;

    &__text {
      line-height: 44px;
      font-size: 0.75rem;
      color: $brand-color-primary-pure;
    }
  }
}

.hide__label-group {
  display: none;
}
</style>
