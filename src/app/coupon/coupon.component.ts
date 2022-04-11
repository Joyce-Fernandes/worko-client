import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  objetos: Coupon[] = [];
  objeto: Coupon=  {

    id: 0,
    name: '',
    startDate: new Date(Date.now ()),
    endDate: new Date(Date.now ()),
    discount:0,

  }

  constructor(public CouponService:CouponService) { }

  ngOnInit(): void {
  }

  getCoupon(): void {
    this.CouponService.getCoupon().subscribe(
      (Coupon) => {
    this.objetos = Coupon;
    console.log(this.objetos);
    });
  }

  postCoupon(): void {
    console.log(this.objeto);
    this.CouponService.postCoupon(this.objeto).subscribe();
  }

  putCoupon(): void {
    this.CouponService.updateCoupon(this.objeto).subscribe(
      (Coupon) => {
    this.objeto = Coupon;
    console.log(this.objetos);
    });
  }

  deleteCoupon(id:number): void {
    this.CouponService.deleteCoupon(id).subscribe();
  }
}



