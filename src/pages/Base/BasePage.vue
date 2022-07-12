<template>
  <div>
    <side-nav />
    <main class="v-body" :class="isOpened ? 'v-body--expanded' : null">
      <top-nav size="medium" />
      <div class="v-main-content">
        <slot>
          <router-view />
        </slot>
      </div>
    </main>
  </div>
  <v-footer />
</template>

<script lang="ts">
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
import VFooter from '@/components/Footer/VFooter.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'BasePage',
  components: { TopNav, SideNav, VFooter },
  setup() {
    const store = useStore();
    // const isOpened = ref(() => store.getters['utils/getIsOpened']);
    const isOpened = ref(true);

    return {
      store,
      isOpened
    };
  }
});
</script>
<style lang="scss">
.v-body {
  margin-left: 50px;

  &--expanded {
    margin-left: 13.5rem;
  }
}

.v-main-content {
  position: relative;
  margin-top: 60px;
  padding: 2rem;
}
</style>
