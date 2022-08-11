<template>
  <div class="v-tobbar">
    <SvgIcon
      @click="openSidebar"
      class="menuSandwich"
      type="mdi"
      :path="mdiMenu"
      :size="22"
    ></SvgIcon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mdiApps, mdiHelp, mdiMenu, mdiLogoutVariant } from '@mdi/js';

export default defineComponent({
  name: 'TopNavComponent',

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

  data() {
    return {
      boxAppsVisible: false
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
.v-tobbar {
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
}
</style>
