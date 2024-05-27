import { Routes } from '@angular/router';
import { ContatoService } from '../shared/contato.service';

export const OPERACAO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page1/page1.component').then((c) => c.Page1Component),
    providers: [ContatoService],
    children: [
      {
        path: 'simulacao',
        loadComponent: () =>
          import('./page2/page2.component').then((c) => c.Page2Component),
      },
      {
        path: 'efetivacao',
        loadComponent: () =>
          import('./page3/page3.component').then((c) => c.Page3Component),
      },
    ],
  },
];
