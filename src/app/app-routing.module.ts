import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SearchComponent } from './ecommerce/search/search.component';

import { AuthGuardService } from './ecommerce/services/auth-guard.service';



const routes: Routes = [
  { path: '', component: EcommerceComponent,canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService] },
  { path: 'findByName', component: SearchComponent,canActivate:[AuthGuardService] },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
