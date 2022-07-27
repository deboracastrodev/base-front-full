<template>
  <div class="v-tob-bar">
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
      console.log(isCollapse.value);
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
