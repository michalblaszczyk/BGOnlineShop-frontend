import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './ecommerce/services/AuthenticationService';
import {EcommerceService} from "./ecommerce/services/EcommerceService";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EcommerceService]
})
export class AppComponent{
  
  constructor() { }

}
