import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{

  products:any[]=[]
  categories:any[]=[]
  constructor(private service: ProductsService){}
  ngOnInit():void{
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }
  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      console.log(res);
    }, error => {
      console.error(error);
      alert('Failed to get categories. Please try again later.');
    });
  }
  filterCategory(event: any){
    let value = event.target.value;
    (value=="All")?this.getProducts():this.getProductsCategory(value); 
    
    console.log(value);
    this.getProductsCategory(value)
  }
  getProductsCategory(keyword:string){
    this.service.getPdoductsByCategory(keyword).subscribe((res:any)=>{
    this.products=res
    })
  }
}
