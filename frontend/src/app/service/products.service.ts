import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:8000" ;
  getAllProducts(){
    //return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<any>(this.url+'/api/Products');
  }
  getAllCategories(){
    //return this.http.get('https://fakestoreapi.com/products/categories');
    return this.http.get<any>(this.url+'/api/Products/categories');
  }
  getPdoductsByCategory(keyword:string){
   // return this.http.get('https://fakestoreapi.com/products/category/'+keyword);
   return this.http.get<any>(this.url+'/api/Products/category/'+keyword);
  }
}
