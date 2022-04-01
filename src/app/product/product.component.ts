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
    tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token')));    
        
    getProduct() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${this.tokenUser}`);
    console.log(this.tokenUser);
    let tokenObject=this.tokenUser.token;
    console.log(tokenObject);
    console.log('myHeaders');
    console.log(myHeaders);
  
    var requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
  
    fetch("https://localhost:44316/api/Products", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    };


  getDataProducts():void{
    this.ProductService.getProduct().subscribe(data =>{
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
};