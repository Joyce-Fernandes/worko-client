import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getCoupon(): Observable<Coupon[]>{
    return this.http.get<Coupon[]>
    ('https://localhost:44316/api/Coupons');

  }

  postCoupon(Coupon: Coupon): Observable<Coupon> {
  return this.http.post<Coupon>(
    'https://localhost:44316/api/Coupons',
    Coupon,
    this.httpOptions
    );
  }

updateCoupon(Coupon: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>
    ('https://localhost:44316/api/Coupons', 
    Coupon, this.httpOptions)
  }
  deleteCoupon(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/Coupons'+id; 
    return this.http.delete(url, this.httpOptions)
     
}
}

