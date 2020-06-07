import { Component, OnInit } from '@angular/core';
import { Product } from '../../ecommerce/models/product';
import { HttpClientService } from '../../ecommerce/services/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bgproducts',
  templateUrl: './bgproducts.component.html',
  styleUrls: ['./bgproducts.component.css']
})
export class BgproductsComponent implements OnInit {

  products: Array<Product>;
  selectedProduct: Product;
  action: string;

  constructor(private httpClientService: HttpClientService,
	private activedRoute: ActivatedRoute,
	private router: Router) { }

  ngOnInit(): void {
	  this.refreshData();
  }
  refreshData(){
	    this.httpClientService.getProducts().subscribe(
		response => this.handleSuccessfulResponse(response)
    );
	this.activedRoute.queryParams.subscribe(
	(params) => {
		this.action = params['action'];
		const id = params['id'];
		if (id) {
          this.selectedProduct = this.products.find(product => {
            return product.id === +id;
          });
		}
	}
	);
   }
   handleSuccessfulResponse(response) {
    this.products = response;
  }
  
  addProduct(){
	  this.selectedProduct = new Product();
	  this.router.navigate(['admin','products'], { queryParams: { action: 'add' } });
  }
  
  viewProduct(id: number){
	  this.router.navigate(['admin','products'],{ queryParams: {id, action: 'view'}});
  }

}
