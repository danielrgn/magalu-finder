import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PesquisaService {

  constructor(private http: HttpClient) { }

  psqLojasUrl : string = 'http://localhost:3000/pesquisa-lojas';
  psqProdutosUrl : string = 'http://localhost:3000/pesquisa-produtos';
  distanciaUrl : string = 'http://localhost:3000/calcular-distancia';
  keyGoogle : string = 'AIzaSyAt0hVaEiEJ0c2JFDDUiTQjwU07bZ8HW18';

  searchStores(nomeCodProduto, lat, lng){
    return this.http.get(this.psqLojasUrl + '/' + nomeCodProduto + '/' + lat + '/' + lng);
  }

  searchProducts(nomeCodProduto, idLoja){
    return this.http.get(this.psqProdutosUrl + '/' + nomeCodProduto + '/' + idLoja);
  }

  buscaDistancia(origins: string, destinations : string) : Observable<any> {
    return this.http.get(this.distanciaUrl + '/'+origins+'/'+destinations);
  }
}
