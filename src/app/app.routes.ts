import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: ListaProdutosComponent,
//   },
// ];

export const routes: Routes = [
  {
    path: 'produtos',
    loadComponent: () =>
      import('./produtos/lista-produtos/lista-produtos.component').then(
        (m) => m.ListaProdutosComponent
      ),
  },
];
