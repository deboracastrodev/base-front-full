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
<style lang="scss">
.v-nav-header {
  z-index: 9;
  height: 60px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: $neutral-color-hight-pure;
  position: fixed;
  width: 100%;
  max-width: calc(100% - 13rem);
  padding: 0 1rem;
  display: flex;
  top: 0;
  box-sizing: border-box;
  justify-content: space-between;

  &--closed {
    max-width: calc(100% - 50px);
  }

  &__burguer-icon {
    align-self: center;

    svg {
      color: $neutral-color-low-light;
    }
  }

  &__round-icon {
    width: 1.5rem;
    height: 1.5rem;
    background-color: $neutral-color-low-medium;
    border-radius: 50%;
    transition: 0.1s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &:hover {
      background-color: lighten($neutral-color-low-medium, 10%);
    }

    .mdi {
      color: $neutral-color-hight-pure;
      font-size: 1rem;
    }

    svg {
      color: $neutral-color-hight-pure;
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    > div {
      margin: 0.5rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__icon {
    svg {
      color: $neutral-color-low-medium;
    }

    font-size: 1.5rem;
    transition: all 0.3s ease;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: lighten($neutral-color-low-light, 10%);
    }
  }

  .v-input-text {
    &__input,
    &__icon {
      border-color: $neutral-color-hight-medium;
      border-width: 2px;
    }
  }

  .button-apps {
    border-radius: 50px;
    position: relative;
    transition: all 0.3s;
    padding: 0.5rem;

    .mdi-apps {
      font-size: 1.2rem;
      color: $neutral-color-low-light;
      cursor: pointer;
    }

    &:hover,
    &.isActive {
      background: $neutral-color-hight-light;
    }

    .box-applications {
      transition: all 0.3s;
      background: $neutral-color-hight-pure;
      padding: 20px;
      position: absolute;
      right: 0px;
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      top: 100%;

      ul {
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        padding: 18.7px 8.5px;
        border-radius: 8px;
        border: solid 1px $neutral-color-hight-medium;
        background-color: $neutral-color-hight-pure;
        font-size: 8px;
        letter-spacing: 1.28px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        transition: all 0.2s;
        cursor: pointer;

        a {
          display: flex;
          text-decoration: none;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }

        &:hover {
          background: $neutral-color-hight-light;
          transition: all 0.2s;
        }
      }

      img {
        width: 1.5rem;
      }
    }
  }

  .v-no-link {
    color: $neutral-color-low-dark;
  }
}

.menuSandwich {
  cursor: pointer;
  color: $brand-color-font-light;
}
</style>
