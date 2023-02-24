import { Injectable } from '@angular/core';
import {product} from './Product';
import {user} from './Users';
import {review} from './Review';
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
  REST_API3:string='http://localhost:8000/api/Users';
  REST_API4:string='http://localhost:8000/api/User';
  REST_API5:string='http://localhost:8000/api/Reviews';
  REST_API6:string='http://localhost:8000/api/Review';



  httpheaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpclient:HttpClient) { }
    
    AddProduct(data: any): Observable<any> {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('price', data.price);
      formData.append('category', data.category);
      formData.append('image', data.image);
      formData.append('description', data.description);
    
      let API_URL = this.REST_API;
      return this.httpclient.post(API_URL, formData).pipe(catchError(this.handleError));
    }
    AddUser(data:user):Observable<any>{
      let API_URL=this.REST_API3;
      console.log(data);
      return this.httpclient.post(API_URL,data).pipe(catchError(this.handleError))
    }

    GetProducts(){
      return this.httpclient.get(this.REST_API);
    }
    GetUsers(){
      return this.httpclient.get(this.REST_API3);
    }
    GetReviews(){
      return this.httpclient.get(this.REST_API5);
    }

    getProduct(id:any):Observable<any>{
      let API_URL=`${this.REST_API2}/${id}`;
      return this.httpclient.get(API_URL,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }
    getUser(id:any):Observable<any>{
      let API_URL=`${this.REST_API4}/${id}`;
      return this.httpclient.get(API_URL,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }
    getUserName(id:any){
      return this.httpclient.get<string>(`${this.REST_API4}/${id}/Name`);
    }
    
    getReview(id:any):Observable<any>{
      let API_URL=`${this.REST_API6}/${id}`;
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
    updateUser(id:any,data:product):Observable<any>{
      let API_URL=`${this.REST_API4}/${id}`;
      return this.httpclient.put(API_URL,data,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }
    updateReview(id:any,data:product):Observable<any>{
      let API_URL=`${this.REST_API6}/${id}`;
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
    deleteUser(id:any):Observable<any>{
      let API_URL=`${this.REST_API4}/${id}`;
      return this.httpclient.delete(API_URL,{headers:this.httpheaders}).pipe(
        map((res:any)=>{
          return res || {}
        }),catchError(this.handleError))
    }
    deleteReview(id:any):Observable<any>{
      let API_URL=`${this.REST_API6}/${id}`;
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

