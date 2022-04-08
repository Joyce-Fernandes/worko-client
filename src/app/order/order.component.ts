import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  constructor(public orderService: OrderService, public http: HttpClient) { }
  
  objetos: Order[] = [];
  objeto: Order=  {
    id: 0,
    date: new Date(Date.now ()),
    shippingDate: new Date(Date.now ()),
    orderFinishDate: new Date(Date.now ()),
    totalPrice: 0,
    paymentState: 0,
    userId: 0,
    couponId: 0    
  }

  ngOnInit(): void { } 

  getOrder(): void {
    this.orderService.getOrder();
    let aux = localStorage.getItem('orderList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objetos=auxTxt;
  }
  
	getOrderId(id: number): void {
    this.orderService.getOrderId(id);
    let aux = localStorage.getItem('orderPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objeto=auxTxt;
  }
  
  postOrder(object:Order): void {
    this.orderService.postOrder(object);
    let aux = localStorage.getItem('postedOrder'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objeto=auxTxt;
  }

  putOrder(object:Order): void {
    this.orderService.putOrder(object);
    let aux = localStorage.getItem('updatedOrder'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objeto=auxTxt;
  }

  updateOrder(object:Order): void {
    this.orderService.putOrder(object);
    let aux = localStorage.getItem('updatedOrder'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objeto=auxTxt;
  }

  deleteOrder(id:number): void {
    this.orderService.deleteOrder(id);
    let aux = localStorage.getItem('deletedOrder'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objeto=auxTxt;
  };
}