import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';;
import { definePreset } from '@primeuix/themes';
import { provideHttpClient } from '@angular/common/http';
const VyCodePreset = definePreset(Aura, {
  primitive: {
    violet: {
      50: '#F5E8FF',
      100: '#E8CCFF',
      200: '#D5A3FF',
      300: '#C477FF',
      400: '#A855F7',
      500: '#7C00FF',
      600: '#6900D9',
      700: '#5500B3',
      800: '#41008C',
      900: '#2D0066',
      950: '#180033'
    },

    green: {
      50: '#E9FFE5',
      100: '#C9FFC0',
      200: '#98FF89',
      300: '#6AFF52',
      400: '#4DFF2E',
      500: '#39FF14',
      600: '#2ED40F',
      700: '#24A80C',
      800: '#197D09',
      900: '#105206',
      950: '#082E03'
    }
  },

  semantic: {
    primary: {
      50: '{violet.50}',
      100: '{violet.100}',
      200: '{violet.200}',
      300: '{violet.300}',
      400: '{violet.400}',
      500: '{violet.500}',
      600: '{violet.600}',
      700: '{violet.700}',
      800: '{violet.800}',
      900: '{violet.900}',
      950: '{violet.950}'
    }
  }
})
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
        providePrimeNG({
            theme: {
                preset: VyCodePreset
            },
        }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration()
  ]
};

