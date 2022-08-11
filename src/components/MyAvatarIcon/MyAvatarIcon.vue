<template>
  <AvatarIcon :size="size" :full-name="fullName" :initial-letter="initialLetter" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import AvatarIcon from '@/components/AvatarIcon/AvatarIcon.vue';

export default defineComponent({
  name: 'MyAvatarIcon',
  components: { AvatarIcon },
  props: {
    size: { type: String, default: 'medium' }
  },
  setup() {
    const fullName = ref('Nome Sobrenome');
    const initialLetter = ref('NS');
    const avatar = ref('');

    return {
      fullName,
      initialLetter,
      avatar
    };
  }
});
</script>
