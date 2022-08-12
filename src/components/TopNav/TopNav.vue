<template>
  <div class="v-topbar">
    <el-tooltip content="Menu" show-after="500">
      <SvgIcon @click="openSidebar" class="v-topbar--icon" type="mdi" :path="mdiMenu" :size="24"></SvgIcon>
    </el-tooltip>
    <el-menu mode="horizontal" class="v-topbar--items" :router="true" :ellipsis="false">
      <el-sub-menu>
        <template #title>
          <SvgIcon class="v-topbar--icon" type="mdi" :path="mdiApps" :size="24"></SvgIcon>
        </template>
        <div class="v-topbar--apps">
          <el-tooltip content="Link1" show-after="500">
            <el-menu-item index="#link1">
              <img src="https://picsum.photos/seed/picsum/60/60" alt="" />
            </el-menu-item>
          </el-tooltip>
          <el-tooltip content="Link2" show-after="500">
            <el-menu-item index="#link2">
              <img src="https://picsum.photos/seed/picsum/60/60" alt="" />
            </el-menu-item>
          </el-tooltip>
          <el-tooltip content="Link3" show-after="500">
            <el-menu-item index="#link3">
              <img src="https://picsum.photos/seed/picsum/60/60" alt="" />
            </el-menu-item>
          </el-tooltip>
        </div>
      </el-sub-menu>
      <el-menu-item index="#myAccount">
        <my-avatar-icon size="small"></my-avatar-icon>
      </el-menu-item>
      <el-menu-item index="#logout">
        <el-tooltip content="Deslogar" show-after="500">
          <SvgIcon class="v-topbar--icon" type="mdi" :path="mdiLogoutVariant" :size="24"></SvgIcon>
        </el-tooltip>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mdiApps, mdiHelp, mdiMenu, mdiLogoutVariant } from '@mdi/js';
import MyAvatarIcon from '@/components/MyAvatarIcon/MyAvatarIcon.vue';

export default defineComponent({
  name: 'TopNavComponent',
  components: { MyAvatarIcon },
  data() {
    return {
      textTooltip: 'teste',
      boxAppsVisible: false
    };
  },
  props: {
    size: { type: String },
    modelValue: { type: Boolean }
  },

  setup(props, { emit }) {
    const isCollapse = ref(true);

    function openSidebar(): any {
      isCollapse.value = !isCollapse.value;
      emit('update:modelValue', isCollapse.value);
    }

    function logout(): any {
      console.log('logout');
    }

    return {
      isCollapse,
      openSidebar,
      mdiMenu,
      mdiHelp,
      mdiApps,
      mdiLogoutVariant,
      logout
    };
  },

  methods: {
    handleActionsApps() {
      this.boxAppsVisible = !this.boxAppsVisible;
    }
  }
});
</script>
<style lang="scss">
.v-topbar {
  --el-menu-hover-bg-color: #fff;
  --el-menu-active-color: #fff;
  --el-menu-horizontal-sub-item-height: 80px;
  z-index: 600;
  height: 60px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  box-sizing: border-box;

  &--icon {
    @extend %transition-link;
    color: $neutral-color-low-light;
    cursor: pointer;
  }

  &--items {
    align-items: center;

    .el-icon.el-sub-menu__icon-arrow {
      display: none;
    }
  }

  &--apps {
    --el-menu-hover-bg-color: #fff;
    display: flex;

    li>img {
      margin: 0.5rem 0;
      padding: 0.25rem;
      border-radius: 0.25rem;
      border: solid 1px $neutral-color-low-light;
      box-sizing: border-box;
      @extend %transition-link;
    }
  }
}
</style>
