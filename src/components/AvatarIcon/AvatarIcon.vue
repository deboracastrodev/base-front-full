<template>
  <el-tooltip :content="fullName" show-after="500">
    <a href="#" class="v-avatar" :class="setSizeClass" @click.prevent="$emit('click')">
      <div class="user">
        <span class="user__initial_letters">
          {{ initialLetter }}
        </span>
      </div>
    </a>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export enum EAvatarSize {
  small = 'v-avatar--sm',
  medium = 'v-avatar--md',
  large = 'v-avatar--lg'
}

export default defineComponent({
  name: 'AvatarIcon',
  props: {
    size: {
      default: 'medium',
      validator: (item: string) => Object.keys(EAvatarSize).includes(item)
    },
    fullName: { type: String },
    initialLetter: { type: String }
  },
  computed: {
    setSizeClass(): string {
      return EAvatarSize[this.size];
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin base-avatar($size) {
  display: inline-block;
  width: $size;
  height: $size;
  max-width: $size;
  max-height: $size;
  border-radius: 50%;
  background-color: $neutral-color-low-medium;
  @if $size <=35 {
    border: 4px solid $neutral-color-hight-light;
  } @else {
    border: 6px solid $neutral-color-hight-light;
  }

  .user {
    width: 100%;
    height: 100%;
    &__img {
      width: 100%;
      height: 100%;
      transform: scale(1.05);
      border-radius: 50%;
      object-fit: cover;
    }

    &__initial_letters {
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      color: var(--el-bg-color);
      width: 100%;
      height: $size;

      @if $size <=38 {
        font-size: 0.75rem;
      } @else if $size >50 {
        font-size: 1.375rem;
      }
    }
  }
}

// CONFIG CLASS
//----------------------------------------
.v-avatar {
  position: relative;
  text-decoration: none;
  // reponsavel pelo show e hiddem do tooltip
  .v-tooltip {
    display: none;
    transition-delay: 300ms;
    transition-duration: 300ms;
  }

  &:hover > .v-tooltip {
    display: inline-block;
  }

  &--sm {
    @include base-avatar(35px);
  }

  &--md {
    @include base-avatar(50px);
  }

  &--lg {
    @include base-avatar(70px);
  }
}
</style>
