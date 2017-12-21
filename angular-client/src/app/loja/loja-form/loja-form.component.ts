import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { LojaService } from '../loja.service';

@Component({
  selector: 'app-loja-form',
  templateUrl: './loja-form.component.html',
  styleUrls: ['./loja-form.component.css']
})
export class LojaFormComponent implements OnInit {

  titulo : string = "Adicionar Loja";
  color : string = 'grey';
  link : string = '/lojas';
  icone : string = 'arrow_back';
  nomeBotao : string = 'Voltar';
  inscricao : Subscription;

  loja : any = {
    codigoFilial : '',
    nomeLoja : '',
    cep : ''
  }

  constructor(
    private lojaService : LojaService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.inscricao !== undefined){
      console.log('unsubscribe ok');
      this.inscricao.unsubscribe();
    }
  }

  salvar (frm : FormControl){
    var loja = frm.value;

    this.inscricao = this.lojaService.buscaLatLong(loja.cep).subscribe(
      (data) => {

        if(data.lat !== undefined && data.lng !== undefined){
          loja.localizacao = {
            type: "Point",
            coordinates: [Number(data.lng), Number(data.lat)]
          };

          this.inscricao = this.lojaService.adicionar(loja).subscribe(
            () => {
               alert('Loja adicionada com sucesso!');
               console.log('adicionado com sucesso!');
               frm.reset();
               this.router.navigate(['/lojas']);
             }
          );
        }else{
          alert('ERRO: CEP inválido. Não conseguimos localizar a sua geolocalização.');
        }
      }
    );
  }

}
