import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public ProductService:ProductService, public CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.getDataProducts();
    this.getCategoryData();
  }

  objetcPr?:Product[];

  getDataProducts():void{
    this.ProductService.getProduct().subscribe(data =>
    {
      this.objetcPr = data;
    })
  }

  objectCat?:Category[];
  getCategoryData():void{
    this.CategoryService.getCategory().subscribe(data =>
    {
      this.objectCat = data;
    })
  }

  // getProductId(id:number){
  //   localStorage.setItem('productId', JSON.stringify(id));
  // }
}

