<template>
  <el-container>
    <side-nav :isCollapse="isCollapse"></side-nav>
    <div class="v-body">
      <div>
        <top-nav v-model="isCollapse"></top-nav>
        <div class="v-main-content">
          <slot>
            <router-view />
          </slot>
        </div>
      </div>
      <v-footer />
    </div>
  </el-container>
  <div class="v-basepage"></div>
</template>

<script lang="ts">
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
import VFooter from '@/components/Footer/VFooter.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'BasePage',
  components: {
    TopNav,
    SideNav,
    VFooter
  },
  setup() {
    const store = useStore();
    const isCollapse = ref(true);

    return {
      store,
      isCollapse
    };
  }
});
</script>

<style lang="scss">
.v-basepage {
  margin: 0 0 0 0;
}

.el-container {
  margin: 0 0 0 0;
}

.el-aside {
  width: 13rem;
}

.el-footer {
  padding: 0 0 0 0 !important;
  --el-footer-padding: 0 0 0 0 !important;
  --el-footer-height: 3.5rem;
}

.el-header {
  padding: 0 0 0 0;
}

#app > .el-container {
  min-height: 100vh;
  // &--slot {
  // }
}

.v-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.v-main-content {
  position: relative;
  margin-top: 60px;
  padding: 2rem;
}
</style>
