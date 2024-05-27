import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./views/operacao.routes').then((m) => m.OPERACAO_ROUTES),
  },
  {
    path: 'page3',
    loadComponent: () =>
      import('./views/page3/page3.component').then((m) => m.Page3Component),
  },
];
