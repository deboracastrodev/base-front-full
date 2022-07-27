<template>
  <el-scrollbar class="v-scrollbar-side-nav">
    <div class="sidebar-logo">
      <a href="/" class="d-block">
        <img src="@/assets/images/logo.svg" v-if="!isOpened" />
        <img src="@/assets/images/logo.png" v-else />
      </a>
    </div>
    <div class="sidebar-menu">
      <v-link :to="{ name: 'Home' }" :text="isOpened ? 'Link 1' : ''">
        <template #icon>
          <SvgIcon type="mdi" :path="mdiHome" :size="15"></SvgIcon>
        </template>
      </v-link>
      <v-link :to="{ name: 'Link2' }" :text="isOpened ? 'Link 2' : ''">
        <template #icon>
          <SvgIcon type="mdi" :path="mdiHome" :size="15"></SvgIcon>
        </template>
      </v-link>
      <v-link :to="{ name: 'Link3' }" :text="isOpened ? 'Link 3' : ''">
        <template #icon>
          <SvgIcon type="mdi" :path="mdiHome" :size="15"></SvgIcon>
        </template>
      </v-link>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import VLink from '@/components/NavBar/VLink.vue';
import {
  mdiCashMultiple,
  mdiHome,
  mdiCog,
  mdiViewDashboardOutline,
  mdiFileUploadOutline,
  mdiFileTableOutline,
  mdiCreditCardPlus,
  mdiFormatListBulleted,
  mdiAccountGroup,
  mdiCreditCardCheckOutline,
  mdiCreditCardClockOutline
} from '@mdi/js';

export default defineComponent({
  name: 'SideNav',
  components: { VLink },
  setup() {
    const store = useStore();
    // const isOpened = ref(() => store.getters['utils/getIsOpened']);
    const isOpened = ref(true);

    return {
      mdiCog,
      mdiHome,
      isOpened,
      mdiAccountGroup,
      mdiCashMultiple,
      mdiCreditCardPlus,
      mdiFileTableOutline,
      mdiFileUploadOutline,
      mdiFormatListBulleted,
      mdiViewDashboardOutline,
      mdiCreditCardClockOutline,
      mdiCreditCardCheckOutline
    };
  }
});
</script>
<style lang="scss">
.el-aside {
  box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.1);
  background-color: $neutral-color-hight-pure;
  margin-left: 2px;
}

.v-scrollbar-side-nav {
  max-width: 13rem;
}

.sidebar-logo {
  height: 60px;
  width: auto;
  img {
    height: 60px;
    width: auto;
    max-width: 13rem;
  }
}

.sidebar-menu {
  display: block;
}
</style>
