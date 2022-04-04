import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  objetos: Cart[] = [];
  objeto: Cart=  {

    id: 0,
    orderId: 0,
    productId:0,
  }

  constructor(public CartService: CartService, public ProductService: ProductService) { }

  ngOnInit(): void {
    this.takeCartItems();
  }
  getCart(): void {
    this.CartService.getCart().subscribe(
      (Cart) => {
    this.objetos = Cart;
    console.log(this.objetos);
    });
  }

  postCart(): void {
    console.log(this.objeto);
    this.CartService.postCart(this.objeto).subscribe();
  }

  putCart(): void {
    this.CartService.updateCart(this.objeto).subscribe(
      (Cart) => {
    this.objeto = Cart;
    console.log(this.objetos);
    });
  }

  deleteCart(id:number): void {
    this.CartService.deleteCart(id).subscribe();
  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }

  takeCartItems(){
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        let aux = JSON.parse(JSON.stringify(localStorage.getItem(keys[index])));
        console.log(aux);
        let product = JSON.parse(aux);
        console.log(product);
        let table = document.getElementById('cart-table') as HTMLTableElement;
        table.innerHTML += `
        <tr>
          <td><img src=${product.img}></td>
          <td>${product.name}</td>
          <td>${product.quant} ud.</td>
          <td>${product.price}€</td>
          <td>${product.size}</td>
          <td></td>
          <td class="cerrar"><img onclick="localStorage.removeItem('${keys[index]}'); window.location.reload();" src="../../assets/img/cerrar.svg"></td>
        </tr>
        `;
      }
    }
  }

  removeCart(){
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        localStorage.removeItem(keys[index]);
      }
      window.location.reload();
    }
  }

  // purchase(){
  //   let order: Order={
  //     id: 0,
  //     date: new Date(Date.now ()),
  //     shippingDate: new Date(Date.now ()+1),
  //     orderFinishDate: new Date(Date.now ()+3),
  //     totalPrice: 0,
  //     paymentState: 0,
  //     userId: 0,
  //     couponId: 0 };

  //   let keys = Object.keys(localStorage);
  //   let i = keys.length;
  //   for (let index = 0; index < keys.length; index++) {
  //     if (keys[index].includes("Producto")){
  //       let aux = JSON.parse(JSON.stringify(localStorage.getItem(keys[index])));
  //       console.log(aux);
  //       let product = JSON.parse(aux);
  //       console.log(product);
  //       let table = document.getElementById('cart-table') as HTMLTableElement;
  //       table.innerHTML += `
  //       <tr>
  //         <td><img src=${product.img}></td>
  //         <td>${product.name}</td>
  //         <td>${product.quant} ud.</td>
  //         <td>${product.price}€</td>
  //         <td>${product.size}</td>
  //         <td></td>
  //         <td class="cerrar"><img onclick="localStorage.removeItem('${keys[index]}'); window.location.reload();" src="../../assets/img/cerrar.svg"></td>
  //       </tr>
  //       `;
  //     }
  //   }
  // }
}