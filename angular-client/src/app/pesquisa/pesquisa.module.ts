import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PesquisaComponent } from './pesquisa.component';
import { LojaService } from '../loja/loja.service';
import { PesquisaService } from './pesquisa.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    PesquisaComponent
  ],
  providers: [
    PesquisaService,
    LojaService
  ]
})
export class PesquisaModule { }
