import { ProductCategory } from './../commons/product-category';
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
  productCategoryUrl = "http://localhost:8080/api/product-category"

  constructor(private httpClient : HttpClient) { }

  getProducts(categoryId:number):Observable<Product[]>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`

    return this.getProductInList(searchUrl)
  }

  searchProducts(theKeyword: string):Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProductInList(searchUrl)
  }

  private getProductInList(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetProductResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getCategories() : Observable<ProductCategory[]>{
    return this.httpClient.get<GetProductCategoriResponse>(this.productCategoryUrl).pipe(
      map(response => response._embedded.productCategory)
    )
  }

}
interface GetProductResponse{
  _embedded : {
    products : Product[]

  }

}

interface GetProductCategoriResponse{
  _embedded : {
    productCategory : ProductCategory[]

  }

}

