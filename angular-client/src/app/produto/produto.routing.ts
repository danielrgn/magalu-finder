import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const PRODUTO_ROUTES: Routes = [
  { path: '', component: ProdutoComponent, children: [
      { path: '', component: ProdutoListComponent },
      { path: 'adicionar', component: ProdutoFormComponent },
      { path: ':id/editar', component: ProdutoFormComponent}
  ]}
];

export const produtoRouting = RouterModule.forChild(PRODUTO_ROUTES);
