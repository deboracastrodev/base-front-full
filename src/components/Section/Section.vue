<template>
  <section class="v-section">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Section'
});
</script>

<style lang="scss" scoped>
.v-section {
  border: solid 1px $neutral-color-hight-extra-light;
  background-color: $neutral-color-hight-pure;
  border-radius: 0.25rem;
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  @extend %shadow-level-3;
}
</style>
