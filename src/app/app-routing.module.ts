import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SearchComponent } from './ecommerce/search/search.component';
import { UsersComponent } from './admin/users/users.component';
import { BgproductsComponent } from './admin/bgproducts/bgproducts.component';
import { AuthGuardService } from './ecommerce/services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: EcommerceComponent },
  { path: 'admin/products', component: BgproductsComponent },
  { path: 'admin/users', component: UsersComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'findByName', component: SearchComponent},
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
