import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Nuevocomponente } from './nuevocomponente/nuevocomponente';

export const appConfig: ApplicationConfig = {
  providers: [
    Nuevocomponente,
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
