import { Component } from '@angular/core';
import { CrudServiceService } from 'src/app/Service/crud-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any=[];
  constructor(private crudService:CrudServiceService){}
  ngOnInit():void{
    this.crudService.GetUsers().subscribe(res=>{
    console.log(res);
    this.users=res;
  })
  }
  delete(id:any,i:any){
    console.log(id);
    this.crudService.deleteProduct(id).subscribe(res=>{
      this.users.splice(i,1);
    })
  }

}
