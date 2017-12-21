import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'produtos',
    loadChildren: 'app/produto/produto.module#ProdutoModule'
  },
  { path: 'lojas',
    loadChildren: 'app/loja/loja.module#LojaModule'
  },
  { path: '', pathMatch: 'full', component: PesquisaComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
