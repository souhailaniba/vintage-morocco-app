import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs';
import {Observable, throwError} from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {user} from './User';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url:string = "http://localhost:8000" ;
  url2:string='http://localhost:8000/api/Users';
  url3:string='http://localhost:8000/api/User';

  httpheaders = new HttpHeaders().set('Content-Type','application/json');
  

  constructor(private httpclient:HttpClient) { }
  

  getAllUsers(){
    //keyword:string
    return this.httpclient.get (this.url+'/api/Users');
  }

  GetUsers(){
    return this.httpclient.get(this.url2);
  }

  getUser(id:any):Observable<any>{
    let API_URL=`${this.url3}/${id}`;
    return this.httpclient.get(API_URL,{headers:this.httpheaders}).pipe(
      map((res:any)=>{
        return res || {}
      }),catchError(this.handleError))
  }


  updateUser(id:any,data:user):Observable<any>{
    let API_URL=`${this.url3}/${id}`;
    return this.httpclient.put(API_URL,data,{headers:this.httpheaders}).pipe(
      map((res:any)=>{
        return res || {}
      }),catchError(this.handleError))
  }


  deleteUser(id:any):Observable<any>{
    let API_URL=`${this.url3}/${id}`;
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

  sendReview(user_id:any, comment: string, owner: string) {
    const review = { user_id:user_id ,comment: comment, owner: owner};
    return this.httpclient.post<any>(this.url+'/api/Reviews', review);
  }

}