import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './Pages/all-products/all-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { UpdateuserComponent } from './Pages/updateuser/updateuser.component';
import { AboutComponent } from './Pages/about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Pages/profile/profile.component';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';

import { ProductsService } from './service/products.service';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from './Pages/product/product.component';
import { CartComponent } from './Pages/cart/cart.component';

const appRoutes: Routes = [
  {path: 'Products' , component:ProductsComponent},
  {path: 'Home' , component:HomeComponent},
  {path: 'Register' , component:RegisterComponent, canActivate: [BeforeLoginService]},
  {path: 'Login' , component:LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'UpdateUser' , component:UpdateuserComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Profile', component: ProfileComponent, canActivate: [AfterLoginService]},
  {path: 'Cart', component: CartComponent, canActivate: [AfterLoginService]},
  {path: 'Products/category/:categoryName', component: ProductsComponent }
 

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    ProfileComponent,
    SelectComponent,
    ProductComponent,
    CartComponent,

  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
    
  ],
  exports: [RouterModule],
  providers: [JarwisService , AuthService, TokenService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
