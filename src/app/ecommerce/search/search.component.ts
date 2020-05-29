import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {EcommerceService} from '../services/EcommerceService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: String;
  products: Product[];
   
  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
	  this.name = "";
  }
  private searchGames(){
	  this.ecommerceService.getProductsByName(this.name)
		.subscribe(products => this.products = products);
  }
  onSubmit(){
	  this.searchGames();
  }

}
