import { Component, OnInit } from '@angular/core';
import {EcommerceService} from "../ecommerce/services/EcommerceService";
import { TokenStorageService } from '../ecommerce/services/token-storage.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
