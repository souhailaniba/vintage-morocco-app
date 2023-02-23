import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Subscription} from 'rxjs';
import { TokenService } from 'src/app/service/token.service'; 
import { AuthService } from 'src/app/service/auth.service';

import { ActivatedRoute } from '@angular/router';


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
  

constructor(private service:ProfileService, private authService:AuthService, private route: ActivatedRoute) {}


ngOnInit(): void {
  this.userId = localStorage.getItem('userId');
  console.log(this.userId);
  this.service.getUser(this.userId).subscribe((data: any) => {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
  });
}
 
}




