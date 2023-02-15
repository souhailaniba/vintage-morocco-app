import { Component,OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { CrudServiceService } from 'src/app/Service/crud-service.service';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productform:FormGroup;
  constructor(public formbuilder:FormBuilder,
    private router:Router,
    private ngzone:NgZone,
    private crudservice:CrudServiceService){
     this.productform=this.formbuilder.group({
      title:[''],
      price:[''],
      category:[''],
      description:[''],
      image:['']
     })
    };
  ngOnInit(): void {
      
  }
  OnSubmit():any{
    this.crudservice.AddProduct(this.productform.value)
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


