<template>
  <div class="v-basepage">
    <el-container>
      <side-nav :isCollapse="isCollapse"></side-nav>
      <el-container>
        <el-header>
          <top-nav v-model="isCollapse"></top-nav>
        </el-header>
        <el-main>
          <slot>
            <router-view />
          </slot>
        </el-main>
        <el-footer>
          <v-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
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
</style>
