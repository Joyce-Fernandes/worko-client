import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from './coupon';
import { CouponComponent } from './coupon/coupon.component';

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
  
  getCouponId(id:number):Observable<Coupon>{
    return this.http.get<Coupon>('https://localhost:44316/api/coupons/' + id);
  }
  postCoupon(Coupon: Coupon): Observable<Coupon> {
  return this.http.post<Coupon>(
    'https://localhost:44316/api/coupons',
    Coupon,
    this.httpOptions
    );
  }

putCoupon(Coupon: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>
    ('https://localhost:44316/api/coupons/'+Coupon.id, 
    Coupon, this.httpOptions)
  }
  deleteCoupon(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/coupons/' + id; 
    return this.http.delete(url, this.httpOptions)
     
}
}

