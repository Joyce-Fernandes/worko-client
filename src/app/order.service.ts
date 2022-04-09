import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  
  constructor(public http: HttpClient) { }
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
  
  getOrderUserDate(id:number, date:string):void{
	  let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/orders/date/${id}?Date=${date}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let orderUserDate=JSON.stringify(result);
    localStorage.setItem("orderUserDate", orderUserDate)
  })
  .catch(error => console.log('error', error));
  };
  
    
  getOrder(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Orders', requestOptions)
  .then(response => response.text())
  .then(result => {
    let orderList=JSON.stringify(result);
    localStorage.setItem("orderList", orderList)
  })
  .catch(error => console.log('error', error));
  }
  
  getOrderId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/orders/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let orderPerId=JSON.stringify(result);
    localStorage.setItem("orderPerId", orderPerId)
  })
  .catch(error => console.log('error', error));
  }
  postOrder(Order: Order): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Order),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/orders`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedOrder=JSON.stringify(result);
    localStorage.setItem("postedOrder", postedOrder)
  })
  .catch(error => console.log('error', error));
  };

  updateOrder(Order: Order): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(Order),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/orders/${Order.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedOrder=JSON.stringify(result);
  localStorage.setItem("updatedOrder", updatedOrder)
})
.catch(error => console.log('error', error));
};
  putOrder(Order:Order): void{
    this.updateOrder(Order);
  }
 
  deleteOrder(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/orders/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedOrder=JSON.stringify(result);
  localStorage.setItem("deletedOrder", deletedOrder)
})
.catch(error => console.log('error', error));
};  
}