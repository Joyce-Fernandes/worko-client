import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {


  constructor(public couponService:CouponService) { }

  ngOnInit(): void {
    //this.getCoupon();
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
    this.couponService.getCouponId(id);
  }

  getId(couponId:string){
    this.couponIdNum = parseInt(couponId);
    return this.couponIdNum;
  }

  getCoupon(): void {
    this.couponService.getCoupon()
  }

  postCoupon(object:Coupon): void {
    this.couponService.postCoupon(object);
  }

  putCoupon(object:Coupon): void {
    this.couponService.putCoupon(object)
  }

  updateCoupon(object:Coupon): void {
    this.couponService.putCoupon(object)
  }

  deleteCoupon(id:number): void {
    this.couponService.deleteCoupon(id);
  }
}



