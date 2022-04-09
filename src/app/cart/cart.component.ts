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
  
  constructor(public cartService: CartService, public productService: ProductService, public orderService: OrderService) { }
  
  ngOnInit(): void {
    this.takeCartItems();
  }
  objectP:Product={
    id:0, name:"",
    price:0,
    stock:0,
    description:"",
    color:"",
    size:"",
    categoryId:0,
    featuredPhoto:""
  };
  objetos: Cart[] = [];
  objeto: Cart=  {    
    id: 0,
    orderId: 0,
    productId:0,
  };
  order: Order={
    id: 0,
    date: new Date(Date.now ()),
    shippingDate: new Date(Date.now ()+1),
    orderFinishDate: new Date(Date.now ()+3),
    totalPrice: 0,
    paymentState: 0,
    userId: JSON.parse(JSON.stringify(localStorage.getItem("userId"))),
    couponId: 1
  };

  getCart(): void {
    this.cartService.getCart()
    let aux = localStorage.getItem('cartList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objetos = JSON.parse(auxTxt);//crea un objeto, quitando las comillas        
  };

  postCart(object:Cart): void {
    this.cartService.postCart(object);
  }

  putCart(object:Cart): void {
    this.cartService.putCart(object)
  }

  deleteCart(id:number): void {
    this.cartService.deleteCart(id);
  }

  getDataProductId(id:number):Product{
    
    this.productService.getProductId(id)
    let aux = localStorage.getItem('productList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectP = JSON.parse(auxTxt);
    return this.objectP
  }
  discountStock(id:number, qty: number):void{
    
    this.productService.getProductId(id)
    let aux = localStorage.getItem('productPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    
      let product: Product = JSON.parse(auxTxt);                
      let newStock: number=product.stock
      product.stock = newStock-qty;
      console.log(product);      
      this.putProduct(id, product);
    }

  takeCartItems(){
    let totalPrice = 0;
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        let aux = JSON.parse(JSON.stringify(localStorage.getItem(keys[index])));
        
        let product = JSON.parse(aux);
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
        totalPrice += product.price
        let price = document.getElementById('total-price') as HTMLElement;
        price.innerHTML = `<p>PVP total del pedido: ${totalPrice} </p>`;
      }
    }
  }

  removeCart(){
    // var values = [],
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        localStorage.removeItem(keys[index]);
        let table = document.getElementById('cart-table') as HTMLTableElement;
        table.innerHTML = "";
      }
    }
  }

  purchase(){  
    let userId=JSON.parse(JSON.stringify(localStorage.getItem("userId")));
    this.order.userId= userId;
    let dateOrder= this.order.date.toISOString();
    let keepDate =dateOrder;    
    //crear un pedido con userID y Date, y mandarlo a la bbdd
    this.postOrder(userId, keepDate); 
    //envía el pedido a la BBDD y recoge ese mismo con el id adjudicado por la BBDD
    alert("Pedido enviado con éxito!!");  
  };

  postOrder(usId: number, keepDate: string): void {
    this.orderService.postOrder(this.order)
    this.orderService.getOrderUserDate(usId, keepDate);
  };

  putOrder(orderId: number, order: Order): void {
    this.orderService.updateOrder(order)
  };

  putProduct(pId: number, prod: Product): void {
    this.productService.putProduct(prod);
  };
}