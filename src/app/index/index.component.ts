import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public productService:ProductService) { }

  ngOnInit(): void {

  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  
  getDataProductId(id:number):void{
    this.productService.getProductId(id);
    let aux = localStorage.getItem('productPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectP=auxTxt;
  }

}
