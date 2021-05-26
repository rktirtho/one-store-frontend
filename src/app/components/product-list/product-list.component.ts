import { ProductService } from './../../services/product.service';
import { Product } from './../../commons/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]

  constructor(private productService : ProductService) {
    }

  ngOnInit()  {
    this.listOfProduct();
  }

  listOfProduct(){
    this.productService.getProducts().subscribe(
      data => this.products = data
    )
  }


}
