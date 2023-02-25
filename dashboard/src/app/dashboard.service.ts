import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  url:string = "http://localhost:8000" ;

  getTotalUsers(){
    return this.http.get<any>(this.url+'/api/totalUsers');
  }

  getTotalProducts(){
    return this.http.get<any>(this.url+'/api/totalProducts');
  }

  getTotalRevenue(){
    return this.http.get<any>(this.url+'/api/totalRevenue');
  }

  getTotalOrders(){
    return this.http.get<any>(this.url+'/api/totalOrders');
  }

}
