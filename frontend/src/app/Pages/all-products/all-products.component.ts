import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class ProductsComponent  implements OnInit{

  products:any[]=[]
  categories:any[]=[]
  cartProducts:any[]=[]
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


  addToCart(event:any){
    
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist){
        alert("product is already in your cart")
      }else{
        this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    
      }
      }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  
    }
   }
 
}
