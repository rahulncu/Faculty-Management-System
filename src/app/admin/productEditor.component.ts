// import { Component } from "@angular/core";
// @Component({
// template: `<div class="bg-warning p-2 text-white">
// <h3>Product Editor Placeholder</h3>
// </div>`
// })
// export class ProductEditorComponent { }
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent {
    formnotvalid=0;
editing: boolean = false;
product: Product = new Product();
constructor(private repository: ProductRepository,
private router: Router,
activeRoute: ActivatedRoute) {
this.editing = activeRoute.snapshot.params["mode"] == "edit";
if (this.editing) {
Object.assign(this.product,
repository.getProduct(activeRoute.snapshot.params["id"]));
}
}
save(form: NgForm) {
    if(form.invalid){
       this.formnotvalid = 1;
    }else{
        this.formnotvalid = 0;
this.repository.saveProduct(this.product);
this.router.navigateByUrl("/admin/main/products");
    }
}
}