import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AddproductComponent } from './pages/products/addproduct/addproduct.component';
import { EditproductComponent } from './pages/products/editproduct/editproduct.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'login',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 