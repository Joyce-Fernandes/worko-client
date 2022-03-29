import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public ProductService:ProductService) { }

  ngOnInit(): void {
    this.getDataProducts();

  }

  objetcPr?:Product[];

  getDataProducts():void{
    this.ProductService.getProduct().subscribe(data =>
    {
      this.objetcPr = data;
      console.log(this.objetcPr)
    })
  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }

}
