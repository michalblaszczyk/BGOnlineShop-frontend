import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {SearchComponent} from "./search/search.component";
import { ViewChild } from '@angular/core'
import {Product} from './models/product.model';
import {EcommerceService} from './services/EcommerceService';
import { TokenStorageService } from './services/token-storage.service';



@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

	public collapsed = true;
    orderFinished = false;

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;
	
	@ViewChild('searchC')
    searchC: SearchComponent;
	
	name: String;
    products: Product[];

  constructor(private ecommerceService: EcommerceService,
  private tokenStorageService: TokenStorageService) { }
  
  private searchGames(){
	  this.ecommerceService.getProductsByName(this.name)
		.subscribe(products => this.products = products);
  }
  onSubmit(){
	  this.searchGames();
  }

  ngOnInit(): void {
	  this.name = "";
  }
  toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

	reset() {
        this.productsC.reset();
      
    }
	finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }
	
	logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
