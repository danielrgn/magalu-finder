import { Routes, RouterModule } from '@angular/router';

import { LojaComponent } from './loja.component';
import { LojaFormComponent } from './loja-form/loja-form.component';
import { LojaListComponent } from './loja-list/loja-list.component';

const LOJAS_ROUTES: Routes = [
  { path: '', component: LojaComponent, children: [
      { path: '', component: LojaListComponent },
      { path: 'adicionar', component: LojaFormComponent },
      { path: ':id/editar', component: LojaFormComponent}
  ]}
];

export const lojaRouting = RouterModule.forChild(LOJAS_ROUTES);
