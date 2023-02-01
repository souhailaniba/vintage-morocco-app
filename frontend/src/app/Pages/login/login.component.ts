import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route , Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public form={
  email: null,
  password: null
};
public error=null;


constructor(
  private Jarwis : JarwisService, 
  private Token: TokenService,
  private router : Router,
  private Auth : AuthService
  ){}



onSubmit(){
  this.Jarwis.register(this.form).subscribe(
  data =>this.handleResponse(data),
  error => this.handleError(error)
 );
}

handleResponse(data){
  this.Token.handle(data.access_token);
  this.Auth.changeAuthStatus(true);
  this.router.navigateByUrl('/profile');
}

handleError(error) {
  this.error = error.error.error;
}

ngOnInit() {   
}


}
