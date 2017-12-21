import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LojaService {

  constructor(private http: HttpClient) { }

  lojasUrl : string = 'http://localhost:3000/lojas';
  keyGoogle : string = 'AIzaSyAt0hVaEiEJ0c2JFDDUiTQjwU07bZ8HW18';

  listar(){
    return this.http.get(this.lojasUrl);
  }

  buscaLoja(id: string){
    return this.http.get(this.lojasUrl+'/'+id);
  }

  buscaLatLong(cep: string) : Observable<any> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + cep + '&key=' + this.keyGoogle)
             .map(this.extractGeocode);
  }

  extractGeocode(res) {
    let body = [];
    if(res.results.length > 0){
      body = res.results[0].geometry.location;
    }
    return body;
  }

  adicionar(loja: any) {
    return this.http.post(this.lojasUrl, JSON.stringify(loja) , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  searchStores(nomeCodProduto : string, cep : string){
    return this.http.get(this.lojasUrl + '/pesquisa/' + nomeCodProduto + '/' + cep);
  }

}
