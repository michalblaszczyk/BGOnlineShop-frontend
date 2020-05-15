
import {Component, OnInit} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productOrders: ProductOrder[] = [];
    products: Product[] = [];
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;

    constructor(private ecommerceService: EcommerceService) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
    }

    loadProducts() {
        this.ecommerceService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

   

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
    }
}
