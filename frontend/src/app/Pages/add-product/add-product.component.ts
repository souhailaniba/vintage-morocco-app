import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(
    private Jarwis : JarwisService,
    private Token: TokenService, 
    private router: Router
    ){}
  public error=[];/**one error message fih all fields are required and should be valid */

  public form={
    label:null,
    image: null,   
    price:null,
    category:null,
    description: null

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
