import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  getProduct() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MmI0ZDczYy1mZTY3LTQzNzktODBmZS02NjhhM2FjZTM4NWQiLCJuYW1laWQiOiIxIiwibm9tYnJlIjoiQWRtaW4iLCJhcGVsbGlkb3MiOiJBZG1pbiIsImVtYWlsIjoiQWRtaW5AQWRtaW4iLCJuYmYiOjE2NDg2MzkzNjMsImV4cCI6MTY0ODcyNTc2MywiaXNzIjoid3d3LndvcmtvaG9saWMuZXMiLCJhdWQiOiIqIn0.rTs1cG-lpcnjgweFJ9BXeLSFC6JoCdUEv8vNmDieQM4");
  
  var requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://localhost:44316/api/Products", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

  getDataProducts():void{
    this.ProductService.getProduct().subscribe(data =>{
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

