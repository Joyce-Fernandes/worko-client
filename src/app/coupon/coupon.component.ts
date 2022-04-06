import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {


  constructor(public CouponService:CouponService) { }

  ngOnInit(): void {
    this.getCoupon();
  }

  objects: Coupon[] = [];
  object: Coupon=  {

    id: 0,
    name: '',
    startDate: new Date(Date.now ()),
    endDate: new Date(Date.now ()),
    discount:2,

  }
  couponIdNum:number = 0;

  getDataCouponId(id: number): void {
    this.CouponService.getCouponId(id).subscribe((data) => {
      this.object = data;
    });
  }

  getId(couponId:string){
    this.couponIdNum = parseInt(couponId);
    return this.couponIdNum;
  }

  getCoupon(): void {
    this.CouponService.getCoupon().subscribe(
      (Coupon) => {
    this.objects = Coupon;
    console.log(this.objects);
    });
  }

  postCoupon(): void {
    console.log(this.object);
    this.CouponService.postCoupon(this.object).subscribe();
  }

  putCoupon(): void {
    this.CouponService.putCoupon(this.object).subscribe(
      (Coupon) => {
    this.object = Coupon;
    console.log(this.objects);
    });
  }

  deleteCoupon(id:number): void {
    this.CouponService.deleteCoupon(id).subscribe();
  }
}



