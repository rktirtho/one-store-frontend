import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SrearchComponent } from './components/srearch/srearch.component'

const routes: Routes=[
  {path : "search/:keyword", component : ProductListComponent},
  {path : "category/:id", component: ProductListComponent},
  {path : "category", component: ProductListComponent},
  {path : "products", component: ProductListComponent},
  {path : "", redirectTo : "products", pathMatch: "full"},
  {path : "**", redirectTo : "products", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SrearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
