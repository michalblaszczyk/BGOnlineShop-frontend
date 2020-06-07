import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Product } from '../../ecommerce/models/product';
import { HttpClientService } from '../../ecommerce/services/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

	@Input()
    product: Product;
	
	@Output()
    productAddedEvent = new EventEmitter();


  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  saveProduct() {
    this.httpClientService.addProduct(this.product).subscribe(
      (product) => {
		this.productAddedEvent.emit();
        this.router.navigate(['admin', 'products']);
      }
    );
  }

}
