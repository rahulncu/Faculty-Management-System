// // import { ContactComponent } from './contact.component';
// // import { NgModule } from '@angular/core';
// // import { AdminComponent } from './admin.component';
// // import { RouterModule } from "@angular/router";
// // import { AuthComponent } from './auth.component';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';

// // let routing=RouterModule.forChild([
// //     {path:"auth",component:AuthComponent},
// //     {path:"main",component:AdminComponent},
// //     {path:"contact", component: ContactComponent},
// //     {path:"**",redirectTo:"auth"}
// // ]);
// // @NgModule({
// //     imports: [CommonModule,FormsModule,routing],
// //     declarations:[AuthComponent,AdminComponent,ContactComponent]
// // })
// // export class AdminModule{}
// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
// import { RouterModule } from "@angular/router";
// import { AuthComponent } from "./auth.component";
// import { AdminComponent } from "./admin.component";
// import { AuthGuard } from "./auth.guard";
// let routing = RouterModule.forChild([
// { path: "auth", component: AuthComponent },
// { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
// { path: "**", redirectTo: "auth" }
// ]);
// @NgModule({
// imports: [CommonModule, FormsModule, routing],
// providers: [AuthGuard],
// declarations: [AuthComponent, AdminComponent]
// })
// export class AdminModule {}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { ProductTableComponent } from "./productTable.component";
import { ProductEditorComponent } from "./productEditor.component";
import { OrderTableComponent } from "./orderTable.component";
import { ContactComponent } from './contact.component';
import { FormComponent } from './form.component';
let routing = RouterModule.forChild([
{ path: "auth", component: AuthComponent },
{path:"contact",component: ContactComponent},
{ path: "form", component: FormComponent },


{
path: "main", component: AdminComponent, canActivate: [AuthGuard],
children: [
{ path: "products/:mode/:id", component: ProductEditorComponent },
{ path: "products/:mode", component: ProductEditorComponent },
{ path: "products", component: ProductTableComponent },
{ path: "orders", component: OrderTableComponent },


{ path: "**", redirectTo: "products" }
]
},
{ path: "**", redirectTo: "auth" }
]);
@NgModule({
imports: [CommonModule, FormsModule, routing],
providers: [AuthGuard],
declarations: [AuthComponent, AdminComponent,
ProductTableComponent, ProductEditorComponent, OrderTableComponent,ContactComponent,FormComponent]
})
export class AdminModule {}