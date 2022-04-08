import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getCart(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Carts', requestOptions)
  .then(response => response.text())
  .then(result => {
    let cartList=stringify(result);
    localStorage.setItem("cartList", cartList)
  })
  .catch(error => console.log('error', error));
  }
  
  getCartId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/carts/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let cartPerId=stringify(result);
    localStorage.setItem("cartPerId", cartPerId)
  })
  .catch(error => console.log('error', error));
  }
  postCart(Cart: Cart): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Cart),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/carts`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedCart=stringify(result);
    localStorage.setItem("postedCart", postedCart)
  })
  .catch(error => console.log('error', error));
  };

  updateCart(Cart: Cart): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(Cart),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/carts/${Cart.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedCart=stringify(result);
  localStorage.setItem("updatedCart", updatedCart)
})
.catch(error => console.log('error', error));
};
  putCart(Cart:Cart): void{
    this.updateCart(Cart);
  }
 
  deleteCart(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/carts/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedCart=stringify(result);
  localStorage.setItem("deletedCart", deletedCart)
})
.catch(error => console.log('error', error));
};  
}


