import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { LojaService } from '../loja.service';

@Component({
  selector: 'app-loja-list',
  templateUrl: './loja-list.component.html',
  styleUrls: ['./loja-list.component.css']
})
export class LojaListComponent implements OnInit {

  titulo : string = "Lojas";
  color : string = '';
  link : string = 'adicionar';
  icone : string = 'add_circle';
  nomeBotao : string = 'Adicionar Loja';
  inscricao : Subscription;
  lojas : any = [];

  constructor(private lojaService: LojaService ) { }

  ngOnInit() {
    this.consultar();
  }

  ngOnDestroy(){
    if(this.inscricao !== undefined){
      console.log('unsubscribe ok');
      this.inscricao.unsubscribe();
    }
  }

  consultar(){
    this.inscricao = this.lojaService.listar().subscribe( dados => {
      console.log(dados);
      this.lojas = dados;
    });
    return this.inscricao;
  }

}
