import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  url:string = "http://localhost:8000" ;
  constructor(private http: HttpClient) { }
  createNewCart(model:any){
    return this.http.get(this.url+'/api/Carts' , model )
  }
}
