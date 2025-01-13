import {ApplicationConfig} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';

import Aura from '@primeng/themes/aura';
import {ERROR_STATE_MATCHER_CONFIG, ErrorStateMatcher, StateMatcher} from "es-common-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: ErrorStateMatcher, useClass: ErrorStateMatcher},
    {provide: ERROR_STATE_MATCHER_CONFIG, useValue: [StateMatcher.SUBMITTED]},
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    })
  ]
};
