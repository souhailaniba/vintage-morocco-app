import { Component,OnInit} from '@angular/core';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[];
  constructor(private crudService:CrudServiceService){}
  ngOnInit():void{
    this.crudService.GetProducts().subscribe(res=>{
    console.log(res);
    this.products=res;
  })
  }
  delete(id:any,i:any){
    console.log(id);
    this.crudService.deleteProduct(id).subscribe(res=>{
      this.products.splice(i,1);
    })
  }

}
