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

  constructor(public ProductService:ProductService, public CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.getDataProducts();
    this.getCategoryData();
  }

  objetcPr?: Product[];

  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'

  getProduct() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${this.tokenUser}`);//añade token al header

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
      this.ProductService.getProductId(id).subscribe(data=>
      {
        this.objectP = data;
      });
    };
    };