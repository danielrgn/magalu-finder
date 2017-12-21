import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ProdutoService } from '../produto.service';
import { LojaService } from '../../loja/loja.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  titulo : string = "Adicionar Produto";
  color : string = 'grey';
  link : string = '/produtos';
  icone : string = 'arrow_back';
  nomeBotao : string = 'Voltar';
  inscricao : Subscription;
  lojas : any = [];
  produto : any = {
    codigoProduto : '',
    idLoja : '',
    nomeProduto :'',
    valor : ''
  };

  constructor(
    private produtoService : ProdutoService,
    private lojaService : LojaService,
    private router : Router
  ) { }

  ngOnInit() {
    this.listarLojas();
  }

  ngOnDestroy(){

    if(this.inscricao !== undefined){
      console.log('unsubscribe ok');
      this.inscricao.unsubscribe();
    }
  }

  salvar(frm : FormControl){

    this.inscricao = this.produtoService.adicionar(frm.value).subscribe(
      () => {
         alert('Produto adicionado com sucesso!');
         console.log('adicionado com sucesso!');
         frm.reset();
         this.router.navigate(['/produtos']);
       }
    );
  }

  listarLojas() {

    this.inscricao = this.lojaService.listar().subscribe(
      lojas => {
          if(Object.keys(lojas).length > 0){
            this.produto.idLoja = lojas[0]._id;
          }
          this.lojas = lojas;
      }
    );

    return this.inscricao;
  }

}
