import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(public http: HttpClient) { }
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getProduct(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Products', requestOptions)
  .then(response => response.text())
  .then(result => {
    let productList=JSON.stringify(result);
    localStorage.setItem("productList", productList)
  })
  .catch(error => console.log('error', error));
  }
  
  getProductId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/products/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let productPerId=JSON.stringify(result);
    localStorage.setItem("productPerId", productPerId)
  })
  .catch(error => console.log('error', error));
  }
  postProduct(Product: Product): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Product),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/products`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedProduct=JSON.stringify(result);
    localStorage.setItem("postedProduct", postedProduct)
  })
  .catch(error => console.log('error', error));
  };

  updateProduct(Product: Product): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(Product),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/products/${Product.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedProduct=JSON.stringify(result);
  localStorage.setItem("updatedProduct", updatedProduct)
})
.catch(error => console.log('error', error));
};
  putProduct(Product:Product): void{
    this.updateProduct(Product);
  }
 
  deleteProduct(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/products/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedProduct=JSON.stringify(result);
  localStorage.setItem("deletedProduct", deletedProduct)
})
.catch(error => console.log('error', error));
};  
}

