import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';









@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:8000" ;

getAllUsers(){
  //keyword:string
  return this.http.get (this.url+'/api/Products/Users');
}


 
}