import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';



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

  constructor(public CartService: CartService) { }

  ngOnInit(): void {

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
}



