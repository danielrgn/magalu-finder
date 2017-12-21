import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  produtosUrl : string = 'http://localhost:3000/produtos';

  listar(){
    return this.http.get(this.produtosUrl);
  }

  adicionar(produto : any){
    return this.http.post(this.produtosUrl, JSON.stringify(produto) , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
