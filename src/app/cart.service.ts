import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>
    ('https://localhost:44316/api/Carts');
 }
  

  postCart(Cart: Cart): Observable<Cart> {
  return this.http.post<Cart>(
    'https://localhost:44316/api/Carts',
    Cart,
    this.httpOptions
    );
  }

updateCart(Cart: Cart): Observable<Cart> {
    return this.http.put<Cart>
    ('https://localhost:44316/api/Carts', 
    Cart, this.httpOptions)
  }
  deleteCart(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/Carts'+id; 
    return this.http.delete(url, this.httpOptions)
     
}
}


