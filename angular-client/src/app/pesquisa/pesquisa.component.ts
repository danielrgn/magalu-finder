import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { LojaService } from '../loja/loja.service';
import { PesquisaService } from './pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  nomeCodProduto : string = '';
  cep : string = '';
  inscricao : Subscription;
  lojas : any = [];
  pesq : any;
  loading : boolean = false;

  constructor(
    private pesquisaService : PesquisaService,
    private lojaService : LojaService
  ) { }

  ngOnInit() {
    this.pesq = [];
  }

  ngOnDestroy(){

    if(this.inscricao !== undefined){
      console.log('unsubscribe ok');
      this.inscricao.unsubscribe();
    }
  }

  pesquisarLojas(frm : FormControl){
    this.pesq = frm.value;
    this.lojas = [];
    this.loading = true;

    this.inscricao = this.lojaService.buscaLatLong(this.pesq.cep).subscribe(
      (data) => {
        console.log(data);
        if(data.lat !== undefined && data.lng !== undefined){
          this.inscricao = this.pesquisaService.searchStores(this.pesq.nomeCodProduto, data.lat, data.lng).subscribe(
            (lojas: Observable<any>) => {
               if(Object(lojas).length > 0){
                 this.loading = false;
                 lojas.map(loja => {
                   return this.extractData(loja, this.pesq.cep);
                 });
                 this.lojas = lojas;
               }else{
                 alert('Não houve nenhum resultado da busca.');
                 this.loading = false;
               }
             }
          );
        }else{
          alert('Não encontramos a sua geolocalização.');
          this.inscricao = this.lojaService.listar().subscribe(
            (lojas) => {
               this.loading = false;
               this.lojas = lojas;
             }
          );
        }
      }
    );
  }

  extractData(loja, cepOrigem) {
    this.inscricao = this.pesquisaService.buscaDistancia(cepOrigem, loja.cep).subscribe(
      (distance) => {
         loja.distancia = distance;
       }
    );
    return loja;
  }

  pesquisarProdutos(loja){
    this.inscricao = this.pesquisaService.searchProducts(this.pesq.nomeCodProduto, loja._id).subscribe(
      (data) => {
        console.log(data);
        loja.produtos = data;
      }
    );
  }

}
