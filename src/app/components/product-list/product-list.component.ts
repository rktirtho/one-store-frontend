import { ProductService } from './../../services/product.service';
import { Product } from './../../commons/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryid: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listOfProduct();
    });

  }

  listOfProduct() {

    const hasCategoryid:boolean = this.route.snapshot.paramMap.has("id");

    if(hasCategoryid){
      // getting id and convert to int (= + convert string to int)
      this.currentCategoryid = + this.route.snapshot.paramMap.get("id");
    }else{
      this.currentCategoryid =1;
    }

    this.productService.getProducts(this.currentCategoryid).subscribe(
      data => this.products = data
    )
  }


}
