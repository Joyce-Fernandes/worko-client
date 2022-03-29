import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(public ProductService:ProductService) { }

  ngOnInit(): void {
    this.randomNumber();
    this.getDataProductId(this.randomNumber());
  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  id?:number;

  randomNumber():number{
    this.id= Math.floor(Math.random() * 10) + 2;
    return this.id;
  }
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }
}
