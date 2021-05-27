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

  getProducts(categoryId:number):Observable<Product[]>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(resposne => resposne._embedded.products)
    )
  }

}
interface GetResponse{
  _embedded : {
    products : Product[]

  }

}


