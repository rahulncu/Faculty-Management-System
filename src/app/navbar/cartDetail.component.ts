import { Cart } from '../model/cart.model';
import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
    //template: `<div>
    //<h3 class="bg-info p-1 text-white">Cart Detail Component</h3>
    //</div>`
    templateUrl:"cartDetail.component.html",
    styleUrls: ['./cartDetail.component.css']

})
export class CartDetailComponent{
    private products: Product[] = [];
    constructor(public cart:Cart, private dataSource: RestDataSource){
        dataSource.getProducts().subscribe(data => {
            this.products= data;
        });
    }

    promoteFaculty(product){
        console.log(product.id)
        product.promoted = true
        if (product.designation=="Professor") {
            product.designation="Associate Professor";
            
        } else {
            product.designation="Assistant Professor";
            
        }
        this.dataSource.updateProduct(product)
    }
}