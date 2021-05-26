import { Product } from './../commons/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/api/products'

  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(resposne => resposne._embedded.products)
    )
  }

}
interface GetResponse{
  _embedded : {
    products : Product[]

  }

}


