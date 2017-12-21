import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { MaterializeModule } from 'angular2-materialize';

import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoHeaderComponent } from './produto-header/produto-header.component';
import { ProdutoService} from './produto.service';
import { LojaService } from '../loja/loja.service';
import { produtoRouting } from './produto.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    CurrencyMaskModule,
    MaterializeModule,
    produtoRouting
  ],
  declarations: [
    ProdutoComponent,
    ProdutoListComponent,
    ProdutoHeaderComponent,
    ProdutoFormComponent
  ],
  providers: [
    ProdutoService,
    LojaService
  ]
})
export class ProdutoModule { }
