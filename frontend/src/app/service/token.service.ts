import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login',
    register: 'http://localhost:8000/api/register'
  };

  constructor() { }


  handle(token : string){
    this.set(token);
    
  }

  set(token : string){
    localStorage.setItem('token', token);
  }
  
  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(): boolean {
    const token = this.get();

    if (token) {
      return true;
    }
    return false;
  }

  loggedIn() {
    const isRegistered = localStorage.getItem('isRegistered');
    if (isRegistered) {
      localStorage.removeItem('isRegistered');
      return false;
    }
    return this.isValid();
  }
  
}
