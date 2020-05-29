import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { EcommerceService } from './ecommerce/services/EcommerceService';
import { AuthenticationService } from './ecommerce/services/AuthenticationService';

import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './ecommerce/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
	
    OrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
