import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import SvgIcon from '@jamescoyle/vue-icon';

import router from './router';
import locale from 'element-plus/lib/locale/lang/pt-br';

const app = createApp(App);

app.component('SvgIcon', SvgIcon);

app.use(ElementPlus, { locale });
app.use(router);

app.mount('#app');
