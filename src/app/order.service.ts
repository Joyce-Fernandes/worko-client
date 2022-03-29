import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  getOrder(): Observable<Order[]>{
    return this.http.get<Order[]>('https://localhost:44316/api/Orders');

  }

  postOrder(Order: Order): Observable<Order> {
  return this.http.post<Order>(
    'https://localhost:44316/api/Orders',
    Order,
    this.httpOptions
    );
  }

updateOrder(Order: Order): Observable<Order> {
    return this.http.put<Order>('https://localhost:44316/api/Orders', 
    Order, this.httpOptions)
  }
  deleteOrder(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/Orders'+id; 
    return this.http.delete(url, this.httpOptions)
     
}
}

