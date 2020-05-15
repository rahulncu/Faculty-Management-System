import { FormsModule } from '@angular/forms';
import { CartDetailComponent } from './navbar/cartDetail.component';
import { CheckOutComponent } from './navbar/checkOut.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './navbar/cartSummary.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    HomeComponent,
    ShopComponent,
    NavbarComponent,
    CartSummaryComponent,
    CheckOutComponent,
    CartDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'cart',component:CartDetailComponent},
      {path:'checkout',component:CheckOutComponent},
      {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
      {path:'**',redirectTo:''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
