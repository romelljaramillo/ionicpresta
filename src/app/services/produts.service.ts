import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';

const proto = 'http://';
const URL    = environment.url;
const apiKey = environment.apiKey;
const outputFormat = 'output_format=JSON';

const httpOptions = {
  headers: new HttpHeaders({
    'Output-format': 'JSON',
    'Authorization': 'Basic 72ALG2BTMV9HSUXARHT78EFGG2HRZXHH'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  

  
  constructor(private http: HttpClient) { 
    // console.log(apiKey + URL + '1');
  }

  private ejecutarQuery<t>( query: string ) {
    // const headers = new HttpHeaders({
    //   'Output-format': 'JSON',
    //   'Authorization': 'Basic 72ALG2BTMV9HSUXARHT78EFGG2HRZXHH'
    // });
    // const params = new HttpParams()
    //   .set('method', 'GET');

    // query = URL + query;
    // const salida = proto + `${apiKey}@` + URL + 'products/1?' + outputFormat;
    const salida = proto  + URL + 'products/1?ws_key=' + apiKey + '&' + outputFormat;
    console.log(salida);
    // return this.http.get<T>(query,  httpOptions);
    // return this.http.get<Product>(salida, { headers: headers, params });
    return this.http.get<t>(salida);

  }

  getProduct(id: string) {
    const query = `products/${ id }`;
    return this.ejecutarQuery<Product>(query);
  }

}
