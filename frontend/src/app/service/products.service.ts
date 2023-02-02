import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = "http://localhost:8000" ;

  constructor(private http:HttpClient) { }
  
  getAllProducts(){
    return this.http.get<any>(this.url+'/api/Products');
  }
}
