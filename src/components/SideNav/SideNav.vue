<template>
  <el-aside class="v-sidenav" :class="isCollapse ? 'v-sidenav--collapse' : 'v-sidenav--default'">
    <el-scrollbar class="v-scrollbar-side-nav">
      <div class="sidebar-logo">
        <a href="/">
          <img src="@/assets/images/logo.svg" class="image-logo" v-if="isCollapse" />
          <img src="@/assets/images/logo.png" class="image-logo" v-else />
        </a>
      </div>
      <div class="sidebar-menu">
        <el-menu class="el-menu-vertical" :collapse="isCollapse">
          <el-menu-item index="1">
            <el-icon>
              <SvgIcon type="mdi" :path="mdiHome" :size="15"></SvgIcon>
            </el-icon>
            <template #title>
              <router-link class="router-link" :to="{ name: 'Home' }">Home</router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <SvgIcon type="mdi" :path="mdiCashMultiple" :size="15"></SvgIcon>
            </el-icon>
            <template #title>
              <router-link class="router-link" :to="{ name: 'Link2' }">Link 2</router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link class="router-link" :to="{ name: 'Link3' }">
              <el-icon>
                <SvgIcon type="mdi" :path="mdiViewDashboardOutline" :size="15"></SvgIcon>
              </el-icon>
            </router-link>
            <template #title>
              <router-link class="router-link" :to="{ name: 'Link3' }">Link 3</router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
  props: {
    isCollapse: { type: Boolean }
  },
  setup() {
    return {
      mdiCog,
      mdiHome,
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
@mixin respond-to($breakpoint) {
  @media (min-width: ($breakpoint)) {
    @content;
  }
}

.v-sidenav {
  height: 500px;
  transition: all 0.3s ease;
  box-shadow: 1px 0 3px #000001;

  &--collapse {
    max-width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
  }

  &--default {
    max-width: 13rem;
  }
}
.el-aside {
  box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.1);
  background-color: $neutral-color-hight-pure;
  margin-left: 2px;
  transition: all 0.3s ease;
}

.sidebar-logo {
  height: 1.5rem;
  width: auto;
  transition: all 0.3s ease;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .image-logo {
    vertical-align: middle;
    height: 1.5rem;
    width: auto;
    max-width: 13rem;
}

.sidebar-menu {
  display: block;
}
.el-menu-vertical {
  border-right: none !important;
}

.router-link {
  text-decoration: none;
  color: $text-color-nonfocus;

  @include respond-to('medium') {
    padding-left: 10px;
    padding-right: 1rem;
  }

  * {
    color: $text-color-nonfocus;
    transition: all 0.3s ease;
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
