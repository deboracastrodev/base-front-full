<template>
  <div
    class="d-none d-md-block sidebar collapse v-nav-bar"
    :class="[positionFixed, sidebarStateClass]"
  >
    <div class="sidebar-sticky">
      <ul class="v-nav-bar__list">
        <div class="v-nav-bar__logo">
          <div class="d-flex justify-content-center align-items-center h-100">
            <a href="/" class="d-block">
              <img src="@/assets/images/logo/vert-ops.svg" v-if="isOpened" />
              <img src="@/assets/images/logo/vert-ops_thumb.png" v-else />
            </a>
          </div>
        </div>
        <slot name="content" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavBar',

  props: {
    active: { type: Boolean, default: false }
  },

  setup() {
    const store = useStore();
    // const isOpened = computed(() => store.getters['utils/getIsOpened']);
    const isOpened = ref(true);

    const sidebarStateClass = computed((): string =>
      isOpened.value ? 'v-nav-bar--opened' : 'v-nav-bar--closed'
    );

    return {
      isOpened,
      sidebarStateClass
    };
  },

  data() {
    return {
      positionFixed: ''
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 60) {
        this.positionFixed = 'scroll';
      } else {
        this.positionFixed = '';
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.v-nav-bar {
  box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.1);
  background-color: $neutral-color-hight-pure;
  min-height: 100%;
  max-height: 100%;
  transition: 0.7s;
  overflow-x: hidden;
  position: fixed;
  z-index: 10;
  overflow-y: auto;

  &--closed {
    width: 50px;

    .v-nav-bar__label-group {
      height: 0;
      padding: 0;

      &__text {
        display: none;
      }
    }

    .v-nav-bar__item__text {
      display: none;
    }

    .v-nav-bar__logo {
      img {
        max-width: 1.5rem;
        max-height: 1.5rem;
      }
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    // padding: 1.5rem 1.2rem;
    img {
      width: 164px;
      max-height: 30px;
      transition: width 0.1s;
    }
  }

  .sidebar-sticky {
    padding: 0 1rem 0 1rem;
  }

  &__list {
    padding: 0;
    margin: 0 -1rem;
    list-style: none;
  }

  &__item {
    border-left: 4px solid $neutral-color-hight-pure;
    transition: all 0.3s ease;
    $item: &;

    * {
      color: lighten($text-color-light, 20%);
      transition: all 0.3s ease;
    }

    &--active,
    &:hover {
      background-color: $neutral-color-low-medium;
      border-color: $brand-color-primary-pure;

      * {
        color: $brand-color-primary-pure;
      }

      &:hover {
        background-color: rgba($brand-color-primary-pure, 0.1);
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

  &__link {
    height: 44px;
    padding: 0 1rem;

    &:hover {
      text-decoration: none;
    }

    // @include respond-to('medium') {
    //   padding-left: 10px;
    //   padding-right: 0.875rem;
    // }
  }

  &__label-group {
    height: 44px;
    border-bottom: 0.01em solid lighten($text-color-light, 50%);

    &__text {
      line-height: 44px;
      font-size: 0.75rem;
      color: $brand-color-primary-pure;
    }
  }
}
</style>
