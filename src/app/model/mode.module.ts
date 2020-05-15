import { AuthService } from './auth.service';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datascource';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    // providers:[ProductRepository,Cart,AuthService,Order,OrderRepository,{provide:StaticDataSource,useClass:RestDataSource}]
    providers: [ProductRepository, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource, AuthService]
})
export class ModelModule {}