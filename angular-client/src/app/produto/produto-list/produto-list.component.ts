import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ProdutoService } from '../produto.service';
import { LojaService } from '../../loja/loja.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  titulo : string = "Produtos";
  color : string = '';
  link : string = 'adicionar';
  icone : string = 'add_circle';
  nomeBotao : string = 'Adicionar Produto';
  inscricao : Subscription;
  produtos : any = [];
  loja: any = [];

  constructor(
    private produtoService: ProdutoService,
    private lojaService: LojaService
  ) { }

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
    this.inscricao = this.produtoService.listar().subscribe(
      produtos => {
        console.log(produtos);
        this.produtos = produtos;
      }
    );
    return this.inscricao;
  }

}
