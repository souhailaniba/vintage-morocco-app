import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent,AuthGuard } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AddproductComponent } from './pages/products/addproduct/addproduct.component';
import { EditproductComponent } from './pages/products/editproduct/editproduct.component';
import { LoginComponent } from './pages/login/login.component';
//import { LineChartComponent } from './line-chart/line-chart.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'products',component:ProductsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'users',component:UsersComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'logout',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 