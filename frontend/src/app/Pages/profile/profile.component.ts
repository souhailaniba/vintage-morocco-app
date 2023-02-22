import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  public name:string = "Meriem";
  public email:string = "falihmeriem3@gmail.com";
  public phone: string = "0654534279" ;
  public address: string  = "Stockholm Sweeden";
  

constructor(private service:ProfileService) {}


ngOnInit(): void {  
   // this.getUser()
   
  }
 
}




