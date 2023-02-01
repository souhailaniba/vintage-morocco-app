import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{

  products:any[]=[]
  constructor(private service: ProductsService){}
  ngOnInit():void{
    this.getProducts()
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products= res
      console.log(res)
    })
  }
}
