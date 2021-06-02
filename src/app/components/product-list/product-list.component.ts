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

  products: Product[]=[];
  previousCateforyId: number = 1;
  currentCategoryid: number=1;
  searchMode : boolean=false;


  // New property for Pagination

  thePageNumber :number =1;
  thePageSize : number = 12;
  theTotalElement : number = 0;

  previousKeyWord:string = null;

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

    this.searchMode = this.route.snapshot.paramMap.has("keyword");
    console.log(this.searchMode)
    if(this.searchMode){
      this.handleSearchProduct()
    }else{
      this.handleListProduct();
    }

    
  }
  handleSearchProduct() {
    const theKeyword : string = this.route.snapshot.paramMap.get("keyword");
    
    if(this.previousKeyWord != theKeyword){
      this.thePageNumber =1;
    }
    this.previousKeyWord = theKeyword;

    this.productService.searchProductstPaginate(theKeyword, this.thePageNumber-1,
      this.thePageSize, this.currentCategoryid).subscribe(this.processResult())
  }

  handleListProduct(){
    const hasCategoryid:boolean = this.route.snapshot.paramMap.has("id");

    if(hasCategoryid){
      // getting id and convert to int (= + convert string to int)
      this.currentCategoryid = + this.route.snapshot.paramMap.get("id");
    }else{
      this.currentCategoryid =1;
    }


    if(this.previousCateforyId != this.currentCategoryid){
      this.thePageNumber=1
    }

    this.previousCateforyId = this.currentCategoryid

    console.log(`current category id ${this.currentCategoryid} thePageNumber ${this.thePageNumber}` )

    this.productService.getProductsListPaginate(this.thePageNumber-1,
      this.thePageSize, this.currentCategoryid).subscribe(this.processResult())
    
  }
  processResult(){
    return data => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number+1;
      this.thePageSize = data.page.size;
      this.theTotalElement = data.page.totalElements
    }
  }
  updatePageSize(selectedPageSize){
    this.thePageSize = selectedPageSize
    this.thePageNumber = 1;
    this.listOfProduct();

  }

}
