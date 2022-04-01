import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public ProductService:ProductService) { 
    
  }

    ngOnInit(): void {
      //this.getDataProducts();
      this.getProduct();
      
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
        console.log(this.objetcPr)
      });
    };

    objectP:Product={
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
      this.ProductService.getProductId(id).subscribe(data=>
      {
        this.objectP = data;
      });
    };

};