import { Component, ViewChild, ElementRef, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Subscription} from 'rxjs';
import { TokenService } from 'src/app/service/token.service'; 
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/service/carts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  public name: string = '';
  public email: string = '';
  public phone: string = '';
  public address: string = '';
  public userId: string | null = '';

  public comment: string = '';

  public name2: string = '';
  public email2: string = '';
  public phone2: string = '';
  public address2: string = '';
  
  profileForm: FormGroup;
  commentControl: FormControl;
  reviewForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service:ProfileService, 
    private Auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private Token: TokenService , 
    private cart : CartsService,
    private http: HttpClient
    ) {

      this.commentControl = this.formBuilder.control('', Validators.required);
      this.reviewForm = this.formBuilder.group({
      comment: this.commentControl
    });

    }


  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      name: [this.name2, Validators.required],
      email: [this.email2, Validators.required],
      phone: [this.phone2, Validators.required],
      address: [this.address2, Validators.required]
    });

  

    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    
    this.service.getUser(this.userId).subscribe((data: any) => {
      this.name2 = data.name;
      this.email2 = data.email;
      this.phone2 = data.phone;
      this.address2 = data.address;
      // for the form 
      
      this.name = data.name;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;

      this.profileForm.patchValue(data);

    });

    


  }

  scrollDownToInfoUpdateContainer() {
    const infoUpdateContainer = this.el.nativeElement.querySelector('#info-update-container');
    infoUpdateContainer.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(): void {
    
    const updatedUser = this.profileForm.value;
    console.log(this.comment);

    this.service.updateUser(this.userId, updatedUser).subscribe((data: any) => {
      // handle successful update
      console.log("updateUser() works!");
      window.location.reload();
    }, (error: any) => {
      // handle error
      console.log(error);
      console.log("updateUser() does NOT work!");
      console.log(this.userId);
      console.log(updatedUser);
    });
  }

  onDeleteUser() {
    this.service.deleteUser(this.userId).subscribe(
      (data: any) => {
        // handle successful delete
        console.log(data);
        // redirect to login page or display a message
        this.onDeleteUserLogout();
      },
      (error: any) => {
        // handle error
        console.log(error);
      }
    );
    
  }

  onDeleteUserLogout() {
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/Login');
    this.cart.remove();
  }
  

  sendReview(): void {

    const user_id = this.userId;
    const comment = this.commentControl.value;
    const owner = this.name;
    console.log("form id : " + user_id);

    console.log("form comment : " +  comment);
    
    this.service.sendReview(user_id, comment, owner).subscribe(
      (res: any) => {
        // handle successful sending
        console.log(res); 
        this.commentControl.setValue(''); // clear the comment field after the review is submitted
        console.log("BIG WIN +++++++");
        alert("Review successfully sent!"); 
      },
      (error: any) => {
        // handle error
        console.log(error);
        console.log("BIG LOSS ------"); 
      }
    );
  }

  

}
