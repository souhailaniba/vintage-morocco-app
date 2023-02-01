import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private Jarwis : JarwisService,
    private Token: TokenService, 
    private router: Router
    ){}
 

  public error=[];/**one error message fih all fields are required and should be valid */

  public form={
    name:null,
    email: null,   
    phone:null,
    address:null,
    password: null,
    password_confirmation: null,

  };

  onSubmit(){
    this.Jarwis.register(this.form).subscribe(
     data => this.handleResponse(data),
    error=> this.handleError(error)
    );
   }
 
   handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  


handleError(error) {
  this.error = error.error.errors;
}


  ngOnInit() {   
  }
}
