<template>
  <nav class="v-nav-header" :class="!isOpened ? 'v-nav-header--closed' : null">
    <div class="v-nav-header__burguer-icon">
      <el-tooltip
        :content="isOpened ? 'Recolher menu' : 'Abrir menu'"
        placement="right"
        effect="vert tooltip-icon"
      >
        <SvgIcon
          @click="openSidebar"
          class="menuSandwich"
          type="mdi"
          :path="mdiMenu"
          :size="22"
        ></SvgIcon>
      </el-tooltip>
    </div>
    <div class="v-nav-header__actions">
      <!-- Buttons Apps -->
      <div>
        <el-tooltip
          content="Aplicações"
          placement="bottom"
          effect="vert tooltip-icon"
          show-after="1500"
        >
          <div
            href="#"
            class="button-apps"
            :class="{ isActive: boxAppsVisible }"
            @click="handleActionsApps"
            tooltipPosition="bottom"
          >
            <i>
              <SvgIcon class="menuSandwich" type="mdi" :path="mdiApps" :size="22"></SvgIcon>
            </i>
            <div class="box-applications" v-if="boxAppsVisible" ref="boxApps">
              <ul>
                <li>
                  <a href="#">
                    <span>Obrigações</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-tooltip>
      </div>

      <!-- Help -->
      <div class="">
        <a href="#" class="v-nav-header__round-icon">
          <SvgIcon type="mdi" :path="mdiHelp" :size="18"></SvgIcon>
        </a>
      </div>

      <!-- MyAvatarIcon -->
      <!-- <div class="">
        <MyAvatarIcon name="avatar-icon" />
      </div> -->

      <!-- Logout -->
      <div>
        <a class="v-nav-header__icon" @click="logout()">
          <SvgIcon type="mdi" :path="mdiLogoutVariant" :size="22"></SvgIcon>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
// import MyAvatarIcon from '@/components/MyAvatarIcon/MyAvatarIcon.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { mdiApps, mdiHelp, mdiMenu, mdiLogoutVariant } from '@mdi/js';

export default defineComponent({
  name: 'TopNavComponent',
  // components: { MyAvatarIcon },

  props: {
    size: { type: String }
  },

  setup() {
    const store = useStore();
    // const isOpened = ref(() => store.getters['utils/getIsOpened']);
    const isOpened = ref(true);

    function openSidebar(): any {
      isOpened.value = !isOpened.value;
    }

    function logout(): any {
      console.log('logout');
    }

    return {
      isOpened,
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
