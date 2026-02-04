import type { PrimeVueConfiguration } from 'primevue/config';
import Aura from '@primeuix/themes/aura';

export function setDarkMode(enable: boolean): void {
  document.documentElement.classList.toggle('app-dark', enable);
}

export const primeVueOptions: PrimeVueConfiguration = {
  theme: {
    preset: Aura,
    options: {
      prefix: 'st',
      darkModeSelector: '.app-dark',
      cssLayer: false,
    },
  },
};
