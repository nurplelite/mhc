import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FilterMatchMode } from 'primeng/api';
import { sessionInterceptor } from '@djps/api';
import { mhcPreset } from '@mhc/theme';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch(), withInterceptors([sessionInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: mhcPreset,
        options: {
          darkModeSelector: 'system',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
          zIndex: {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100,
          },
          csp: {
            nonce: '...',
          },
          filterMatchModeOptions: {
            text: [
              FilterMatchMode.STARTS_WITH,
              FilterMatchMode.CONTAINS,
              FilterMatchMode.NOT_CONTAINS,
              FilterMatchMode.ENDS_WITH,
              FilterMatchMode.EQUALS,
              FilterMatchMode.NOT_EQUALS,
            ],
            numeric: [
              FilterMatchMode.EQUALS,
              FilterMatchMode.NOT_EQUALS,
              FilterMatchMode.LESS_THAN,
              FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
              FilterMatchMode.GREATER_THAN,
              FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
            ],
            date: [
              FilterMatchMode.DATE_IS,
              FilterMatchMode.DATE_IS_NOT,
              FilterMatchMode.DATE_BEFORE,
              FilterMatchMode.DATE_AFTER,
            ],
          },
        },
      },
    }),
  ],
};
