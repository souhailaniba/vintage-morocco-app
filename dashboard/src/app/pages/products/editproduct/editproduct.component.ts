import { Component,OnInit,NgZone } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CrudServiceService } from 'src/app/Service/crud-service.service';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  getId:any;

  updateform:FormGroup;
  constructor(public formbuilder:FormBuilder,
    private router:Router,
    private ngzone:NgZone,
    private activatedroute:ActivatedRoute,
    private crudservice:CrudServiceService){
     this.getId=this.activatedroute.snapshot.paramMap.get('id');
     this.crudservice.getProduct(this.getId).subscribe(res=>{console.log(res)
      this.updateform.setValue({
        title:res['title'],
        price:res['price'],
        category:res['category'],
        description:res['description'],
        image:res['image']
       })});
       this.updateform=this.formbuilder.group({
        title:[''],
        price:[''],
        category:[''],
        description:[''],
        image:['']
       })
    
    };
  ngOnInit(): void {
      
  }
  OnUpdate():any{
    this.crudservice.updateProduct(this.getId,this.updateform.value)
    .subscribe(()=>{
      console.log("data added successfuly")
      this.ngzone.run(()=>{
        this.router.navigateByUrl('/products')
      })

      },(err)=>{
        console.log(err)
      })
    }
  
}
