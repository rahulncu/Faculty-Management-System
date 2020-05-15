import { Router } from '@angular/router';
import { Cart } from './../model/cart.model';
import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selectedCategory = null;
  public productsPerPage =100;
  public selectedPage=1;
  constructor(private repository: ProductRepository , private cart :Cart,private router:Router) { }
  get products(): Product[]{
    // return this.respository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) *this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
           .slice(pageIndex,pageIndex+this.productsPerPage);
  }
  get categories():string[]{
    return this.repository.getCategories();
  }
  get sortData(): Product[]{
    return this.repository.getProducts().sort((a,b)=>{
      return <any>new Date(b.doj) - <any>new Date(a.doj); 
   });
    
  }
  changeCategory(newCategory?:string){// the ? here means that this arguement is optional and does not neccessarily need to be called while calling the function
    this.selectedCategory = newCategory;
  }
  changePage(newPage :number){
    this.selectedPage = newPage;
  }
  changePageSize(newSize:number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers():number[]{
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x,i)=>i+1);
  }
  addProductToCart(product :Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
  ngOnInit() {
  }
}