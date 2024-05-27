import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ContatoService } from './shared/contato.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ContatoService),
    provideRouter([
      {
        path: 'home',
        loadComponent: () =>
          import('./views/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'operacao',
        loadChildren: () =>
          import('./views/operacao.routes').then((m) => m.OPERACAO_ROUTES),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]),
  ],
};
