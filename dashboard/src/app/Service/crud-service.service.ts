import { Injectable } from '@angular/core';
import {product} from './Product';
import { catchError,map } from 'rxjs';
import {Observable,throwError} from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  //add the api link here
  REST_API:string='http://localhost:8000/api/Products';
  REST_API2:string='http://localhost:8000/api/Product';

  httpheaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpclient:HttpClient) { }
    
    AddProduct(data:product):Observable<any>{
      let API_URL=this.REST_API;
      console.log(data);
      return this.httpclient.post(API_URL,data).pipe(catchError(this.handleError))
    }


    GetProducts(){
      return this.httpclient.get(this.REST_API);
    }


    getProduct(id:any):Observable<any>{
      let API_URL=`${this.REST_API2}/${id}`;
      return this.httpclient.get(API_URL,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }


    updateProduct(id:any,data:product):Observable<any>{
      let API_URL=`${this.REST_API2}/${id}`;
      return this.httpclient.put(API_URL,data,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }


    deleteProduct(id:any):Observable<any>{
      let API_URL=`${this.REST_API2}/${id}`;
      return this.httpclient.delete(API_URL,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }
    

    handleError(error:HttpErrorResponse){
      let errorMessage ='';
      if(error.error instanceof ErrorEvent){
        errorMessage=error.error.message;
      }else{
        errorMessage=`Error Code:${error.status}\n Message :${error.message}`
      }
      console.log(errorMessage);

      return  throwError(errorMessage);
    }
  }

