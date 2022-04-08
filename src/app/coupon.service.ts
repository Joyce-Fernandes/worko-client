import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Coupon } from './coupon';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  
  
  

  constructor(public http: HttpClient) { }

  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getCoupon(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Coupons', requestOptions)
  .then(response => response.text())
  .then(result => {
    let couponList=stringify(result);
    localStorage.setItem("couponList", couponList)
  })
  .catch(error => console.log('error', error));
  }
  
  getCouponId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/coupons/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let couponPerId=stringify(result);
    localStorage.setItem("couponPerId", couponPerId)
  })
  .catch(error => console.log('error', error));
  }
  postCoupon(Coupon: Coupon): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Coupon),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/coupons`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedCoupon=stringify(result);
    localStorage.setItem("postedCoupon", postedCoupon)
  })
  .catch(error => console.log('error', error));
  };

  putCoupon(Coupon: Coupon): void {
    let requestOptions: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Coupon),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/coupons/${Coupon.id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let updatedCoupon=stringify(result);
    localStorage.setItem("updatedCoupon", updatedCoupon)
  })
  .catch(error => console.log('error', error));
};

 
  deleteCoupon(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/coupons/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedCoupon=stringify(result);
  localStorage.setItem("deletedCoupon", deletedCoupon)
})
.catch(error => console.log('error', error));
};  
};