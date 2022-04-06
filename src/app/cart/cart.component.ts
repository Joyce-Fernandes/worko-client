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
  order: Order={
    id: 0,
    date: new Date(Date.now ()),
    shippingDate: new Date(Date.now ()+1),
    orderFinishDate: new Date(Date.now ()+3),
    totalPrice: 0,
    paymentState: 0,
    userId: JSON.parse(JSON.stringify(localStorage.getItem("userId"))),
    couponId: 1 };
 
  constructor(public CartService: CartService, public ProductService: ProductService, public OrderService: OrderService) { }

  ngOnInit(): void {
    this.takeCartItems();
  }
  getCart(): void {
    this.CartService.getCart().subscribe(
      (Cart) => {
    this.objetos = Cart;
    });
  }

  postCart(): void {
    this.CartService.postCart(this.objeto).subscribe();
  }

  putCart(): void {
    this.CartService.updateCart(this.objeto).subscribe(
      (Cart) => {
    this.objeto = Cart;
    });
  }

  deleteCart(id:number): void {
    this.CartService.deleteCart(id).subscribe();
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
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }

  takeCartItems(){
    let totalPrice: number =0;
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
        price.innerHTML += `
          ${totalPrice}
        `;
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
    let dateOrder= this.order.date.toISOString();
    let keepDate =dateOrder;
    //console.log(keepDate);
    //console.log(this.order.date);
    //crear un pedido con userID y Date, y mandarlo a la bbdd
    this.postOrder(userId, keepDate); //envía el pedido a la BBDD y recoge ese mismo con el id adjudicado por la BBDD
    
  }
    postOrder(usId: number, keepDate: string): void {
      //console.log(this.order);
      
      this.OrderService.postOrder(this.order).subscribe(data =>{
        this.getOrderUserDate(usId, keepDate);
      });
    }

    getOrderUserDate(userId:number, date: string):void{
      this.OrderService.getOrderUserDate(userId, date).subscribe(data=>
      {
        this.order = data;
        localStorage.setItem('order', JSON.stringify(data));
        let keys = Object.keys(localStorage);
        let i = keys.length;
        for (let index = 0; index < keys.length; index++) {
          if (keys[index].includes("Producto")){
            let aux = JSON.parse(JSON.stringify(localStorage.getItem(keys[index])));
            let product = JSON.parse(aux);
            let auxOrder = JSON.parse(JSON.stringify(localStorage.getItem("order")));
            let order = JSON.parse(auxOrder);
            //para cada producto crear un CART, y mandarlo a la bbdd
            this.objeto ={
              id: 0,
              orderId: order.id,
              productId:product.id};
              // y sumar el precio de cada producto al pedido
            auxOrder = JSON.parse(JSON.stringify(localStorage.getItem("order")));
            order = JSON.parse(auxOrder);
            order.totalPrice += product.price;
            localStorage.setItem('order', JSON.stringify(order))
            this.putOrder(order.id, order)
              this.postCart();
              localStorage.removeItem("order");
              this.removeCart();
          }
        }        
      });
    };
    putOrder(orderId: number, order: Order): void {
            this.OrderService.updateOrder(orderId, order).subscribe();
    }
  }