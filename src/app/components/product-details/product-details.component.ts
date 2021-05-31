import { ActivatedRoute } from '@angular/router';
import { Product } from './../../commons/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product =  new Product()
  constructor(private productService : ProductService, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.handleProductDetails()
  }

  handleProductDetails(){
    const productId : number = +this.route.snapshot.paramMap.get("id")

    this.productService.getProductsDetails(productId).subscribe( data => this.product = data)

  }

}
