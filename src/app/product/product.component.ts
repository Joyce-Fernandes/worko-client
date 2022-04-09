import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'

  constructor(public productService:ProductService, public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getDataProducts();
    this.getCategoryData();
  }

  objetcPr?: Product[];  
  getProduct(): void {
    this.productService.getProduct();
    let aux = localStorage.getItem('productList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objetcPr=auxTxt;
  }


  getDataProducts():void{
    this.productService.getProduct();
    let aux = localStorage.getItem('productList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objetcPr=auxTxt;
  }

  objectCat?:Category[];
  getCategoryData():void{
    this.categoryService.getCategory();
    let aux = localStorage.getItem('categoryList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectCat=auxTxt;
  }
  objectP: Product={
    id:0, name:"",
      price:0,
      stock:0,
      description:"",
      color:"",
      size:"",
      categoryId:0,
      featuredPhoto:""
    };
    
    getDataProductId(id:number):void{
      this.productService.getProductId(id);
      let aux = localStorage.getItem('productPerId'); //recupera dato con comillas
      let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
      this.objectP=auxTxt;
    };
};