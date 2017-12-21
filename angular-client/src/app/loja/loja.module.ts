import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { MaterializeModule } from 'angular2-materialize';

import { LojaComponent } from './loja.component';
import { LojaFormComponent } from './loja-form/loja-form.component';
import { LojaListComponent } from './loja-list/loja-list.component';
import { LojaHeaderComponent } from './loja-header/loja-header.component';
import { LojaService} from './loja.service';
import { lojaRouting } from './loja.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    CurrencyMaskModule,
    MaterializeModule,
    lojaRouting
  ],
  declarations: [
    LojaComponent,
    LojaListComponent,
    LojaFormComponent,
    LojaHeaderComponent
  ],
  providers: [ LojaService ]
})
export class LojaModule { }
