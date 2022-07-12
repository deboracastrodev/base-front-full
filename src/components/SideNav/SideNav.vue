<template>
  <NavBar>
    <template #content>
      <v-link :to="{ name: 'Home' }" :text="isOpened ? 'Início' : ''">
        <template #icon>
          <SvgIcon type="mdi" :path="mdiHome" :size="15"></SvgIcon>
        </template>
      </v-link>
    </template>
  </NavBar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import NavBar from '@/components/NavBar/NavBar.vue';
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
  components: { NavBar, VLink },
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
