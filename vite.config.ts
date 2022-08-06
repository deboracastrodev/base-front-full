import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~lib': fileURLToPath(new URL('./node_modules', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "@/assets/style/base/_variables.scss";
              @import "@/assets/style/element/index.scss";
              @import "@/assets/style/main.scss";
            `
      }
    }
  }
});
