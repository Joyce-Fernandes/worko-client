import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon';

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
 
  constructor(public CartService: CartService, public ProductService: ProductService, public OrderService: OrderService, public CouponService:CouponService) { }

  ngOnInit(): void {
    this.takeCartItems();
    this.getCoupon();
  }
  getCart(): void {
    this.CartService.getCart().subscribe(
      (Cart) => {
    this.objetos = Cart;
    });
  }

  objectCou: Coupon[] = [];

  getCoupon(): void {
    this.CouponService.getCoupon().subscribe(
      (Coupon) => {
    this.objectCou = Coupon;
    });
  }

  couponDiscount:number = 0;
  verifyCoupon():void{
    let couponName = document.getElementById('coupon-name') as HTMLInputElement;
    let coupon = couponName.value;
    this.objectCou.forEach(element => {
      if(coupon === element.name){
        this.couponDiscount = element.discount;
        localStorage.setItem('discount', JSON.stringify(this.couponDiscount));
        window.location.reload();
      }
    })
    if(localStorage.getItem("discount") === null){
      alert("Cupón no válido :(");
    }
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

  totalPrice:number = 0;
  couponDis:number = 0;
  takeCartItems(){
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        let aux = JSON.parse(JSON.stringify(localStorage.getItem(keys[index])));

        let coupon = document.getElementById('coupon-display') as HTMLElement;
        let emptyCart = document.getElementById('empty-cart') as HTMLElement;
        let cartEmpty = document.getElementById('cart-empty') as HTMLElement;
        let cartFull = document.getElementById('cart-full') as HTMLElement;

        coupon.classList.add('show');
        coupon.classList.remove('hide');
        emptyCart.classList.add('hide');
        emptyCart.classList.remove('show');
        cartFull.classList.add('show');
        cartFull.classList.remove('hide');
        cartEmpty.classList.add('hide');
        cartEmpty.classList.remove('show');

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
        this.totalPrice += product.price;
        let price = document.getElementById('total-price') as HTMLElement;
        price.innerHTML = `<p>Precio total: ${this.totalPrice} €</p>`;
      }
    }
    if(localStorage.getItem("discount") !== null){
      let price = document.getElementById('total-price') as HTMLElement;
      let checked =  document.getElementById('checked') as HTMLElement;
      checked.style.backgroundColor = 'var(--pink)';
      this.couponDis = JSON.parse(JSON.stringify(localStorage.getItem('discount')));
      this.totalPrice -= this.couponDis;
      console.log(this.couponDis);
      price.innerHTML = `<div><p style="color: var(--pink); font-size: 0.6em;" class="discount">Descuento -${this.couponDis}€</p><p>Precio total: ${this.totalPrice} €</p></div>`;
    }
  }

  removeCart(){
    if(localStorage.getItem("discount") !== null){
      localStorage.removeItem("discount"); 
    }
    let keys = Object.keys(localStorage);
    let i = keys.length;
    for (let index = 0; index < keys.length; index++) {
      if (keys[index].includes("Producto")){
        localStorage.removeItem(keys[index]);
      }
    }
    window.location.reload();
  }

  cartCheckboxEvent(){
    let couponArea = document.querySelector('#coupon-area');
    if(couponArea?.classList.contains('hide')){
      couponArea?.classList.add('show');
      couponArea?.classList.remove('hide');
    }else{
      couponArea?.classList.add('hide');
      couponArea?.classList.remove('show');
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
        if(localStorage.getItem("discount") !== null){
          localStorage.removeItem("discount"); 
        }
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