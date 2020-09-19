// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// routes
import { RouterRoutingModule } from './router–routing.module';

// services
import { UsersService } from './services/users/users.service';
import { ConfigcontrollerAuthService } from '../app/services/auth/config-controller-auth.service';
import { AuthGuardsService } from './Guards/auth-guards.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MilogoComponent } from './components/milogo/milogo.component';
import { FoodOrdersComponent } from './components/food-orders/food-orders.component';
import { DateComponent } from './components/date/date.component';
import { BillOrdersComponent } from './components/bill-orders/bill-orders.component';
import { MenuListProductsComponent } from './components/menu-list-products/menu-list-products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { CreateUpdateDeleteComponent } from './components/admin/create-update-delete/create-update-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,    
    Page404Component,
    OrdersComponent,
    MilogoComponent,
    FoodOrdersComponent,
    DateComponent,
    BillOrdersComponent,
    MenuListProductsComponent,
    UsersComponent,
    ProductsComponent,
    CreateUpdateDeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuardsService,
    UsersService,
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: ConfigcontrollerAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
