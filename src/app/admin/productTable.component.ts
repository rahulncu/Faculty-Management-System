import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
    templateUrl: "productTable.component.html",
    styleUrls: ['./productTable.component.css']

// template: `<div class="bg-info p-2 text-white">
// <h3>Product Table Placeholder</h3>
// </div>`
})
export class ProductTableComponent {
    constructor(private repository: ProductRepository) { }
getProducts(): Product[] {
return this.repository.getProducts();
}
deleteProduct(id: number) {
this.repository.deleteProduct(id);
}
}