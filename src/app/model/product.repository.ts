import { Injectable } from "@angular/core";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class ProductRepository {
private products: Product[] = [];
private categories: string[] = [];
constructor(private dataSource: RestDataSource) {
dataSource.getProducts().subscribe(data => {
this.products = data;
this.categories = data.map(p => p.category)
.filter((c, index, array) => array.indexOf(c) == index).sort();
});
}
getProducts(category: string = null): Product[] {
return this.products
.filter(p => category == null || category == p.category).sort((a,b)=>{
    return <any>new Date(b.doj) - <any>new Date(a.doj); 
 });
// .sort((a,b)=>(a.doj<b.doj)? 1: -1);
}
getfilter(date : string){
    //return this.products.sort((val)=> {return new Date(val.doj)});
}
getProduct(id: number): Product {
return this.products.find(p => p.id == id);
}
getCategories(): string[] {
return this.categories;
}
// sortData(){
//     return this.products.sort((a,b)=>{
//        return <any>new Date(b.doj) - <any>new Date(a.doj); 
//     });
// }
saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
    this.dataSource.saveProduct(product)
    .subscribe(p => this.products.push(p));
    } else {
    this.dataSource.updateProduct(product)
    .subscribe(p => {
    this.products.splice(this.products.
    findIndex(p => p.id == product.id), 1, product);
    });
    }
    }
    deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
    this.products.splice(this.products.
    findIndex(p => p.id == id), 1);
    })
    }
    }