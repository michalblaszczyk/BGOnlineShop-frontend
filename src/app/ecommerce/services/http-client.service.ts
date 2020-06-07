import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
	private userUrl = '/api/users';
	private productUrl = '/api/boardgames';

  constructor(private httpClient:HttpClient)  { }
 
	getUsers(){
		return this.httpClient.get<User[]>(this.userUrl);
	}
	
	addUser(newUser: User){
		return this.httpClient.post<User>(this.userUrl, newUser);
	}
 
	deleteUser(id: number){
		return this.httpClient.delete<User>(this.userUrl +'/'+ id);
	}
	
	getProducts() {
		return this.httpClient.get<Product[]>(this.productUrl);
	}
	addProduct(newProduct: Product){
		return this.httpClient.post<Product>(this.productUrl, newProduct);
	}
	
	deleteProduct(id) {
    return this.httpClient.delete<Product>(this.productUrl+'/'+ id);
  }
}
