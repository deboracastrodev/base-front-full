<template>
  <router-link class="router-link">
    <span class="router-link__icon">
      <slot name="icon"></slot>
    </span>
    <span class="router-link__text">{{ text }}</span>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'VLink',
  props: {
    text: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
@mixin respond-to($breakpoint) {
  @media (min-width: ($breakpoint)) {
    @content;
  }
}

.router-link {
  border-left: 4px solid $neutral-color-hight-pure;
  transition: all 0.3s ease;
  height: 46px;
  padding: 1rem;

  @include respond-to('medium') {
    padding-left: 10px;
    padding-right: 1rem;
  }

  &:hover {
    text-decoration: none;
    background-color: $light-green-color  !important;
  }

  * {
    color: $text-color-nonfocus;
    transition: all 0.3s ease;
  }

  &-exact-active,
  &:hover {
    background-color: darken($light-green-color, 0.5);
    border-color: $brand-color-primary-pure;

    * {
      color: $brand-color-primary-pure;
    }

    &:hover {
      background-color: $brand-color-primary-pure;
      border-color: $brand-color-primary-pure;

      * {
        color: $brand-color-primary-pure;
      }
    }
  }

  &__icon {
    font-size: 0.875rem;
    width: 1rem;
    display: inline-block;
  }

  &__text {
    padding: 2px 0 0 10px;
    display: inline-block;
    font-size: 0.875rem;
  }
}
</style>
