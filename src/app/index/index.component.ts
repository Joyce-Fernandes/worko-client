import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public ProductService:ProductService) { }

  ngOnInit(): void {

  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  // id?:number;
  // featuredProduct1:number=0;
  // featuredProduct2:number=0;
  
  // randomFeaturedNumber1():number{
  //   this.featuredProduct1= Math.floor(Math.random() * 10) + 2;
  //   return this.featuredProduct1;
  // }
  // randomFeaturedNumber2():number{
  //   if(this.featuredProduct1 > 1 && this.featuredProduct1 < 11){
  //     this.featuredProduct2 = this.featuredProduct1 + 1;
  //   }
  //   else{
  //     this.featuredProduct2 = this.featuredProduct1 - 1;
  //   }
  //   return this.featuredProduct2;
  // }
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }

}
