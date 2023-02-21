import { Component } from '@angular/core';
import { CartsService } from 'src/app/service/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private service: CartsService){

}
  success:boolean=false
  cartProducts : any[]= []
  cartTotal : any= 0
  ngOnInit(): void {
      this.getCartProducts();
  }
  getCartProducts(){
    if("cart" in localStorage ){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal();
  }
  getCartTotal(){
    this.cartTotal = 0;
    for(let x in this.cartProducts){
      this.cartTotal +=  this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  minus(index: number){
    this.cartProducts[index].quantity--
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  plus(index: number){
    this.cartProducts[index].quantity++
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }

  detectChange(){
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  deleteProduct(index: number){
    this.getCartTotal();
    this.cartProducts.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  clearCart(){ 
    this.cartProducts=[]
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  addCart(){
    let products= this.cartProducts.map(item =>{
      return {productId: item.item.id,quantity:item.quantiti}
    })
    let Model={
      userId : 5,
      date : new Date(),
      products:[]
    }
    this.service.createNewCart(Model).subscribe(res =>
      {
          this.success=true
      })
    console.log(Model)
  }
}