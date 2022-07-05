import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Order } from '../order';
import { OrderService } from '../order.service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  objetos: Order[] = [];
  objeto: Order=  {

     id: 0,
     date: new Date(Date.now ()),
     shippingDate: new Date(Date.now ()),
     orderFinishDate: new Date(Date.now ()),
     totalPrice: 0,
     paymentState: 0,
     userId: 0,
     couponId: 0, 
    
  }
  

  constructor(public OrderService: OrderService,) { }

  ngOnInit(): void {
  
  } 

  getOrder(): void {
    this.OrderService.getOrder().subscribe((Order) => {
    this.objetos = Order;
    console.log(this.objetos);
    });
  }

  postOrder(): void {
    console.log(this.objeto);
    this.OrderService.postOrder(this.objeto).subscribe();
  }

  putOrder(orderId: number, order: Order): void {
    this.OrderService.updateOrder(orderId, order).subscribe();
}


  deleteOrder(id:number): void {
    this.OrderService.deleteOrder(id).subscribe();
  }
}


