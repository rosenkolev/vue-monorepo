import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import { theme } from '@repo/ui';

import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, theme.primeVueOptions);
app.mount('#app');
