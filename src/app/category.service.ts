import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getCategory(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Categorys', requestOptions)
  .then(response => response.text())
  .then(result => {
    let categoryList=stringify(result);
    localStorage.setItem("categoryList", categoryList)
  })
  .catch(error => console.log('error', error));
  }
  
  getCategoryId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/categorys/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let categoryPerId=stringify(result);
    localStorage.setItem("categoryPerId", categoryPerId)
  })
  .catch(error => console.log('error', error));
  }
  postCategory(Category: Category): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Category),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/categorys`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedCategory=stringify(result);
    localStorage.setItem("postedCategory", postedCategory)
  })
  .catch(error => console.log('error', error));
  };

  updateCategory(Category: Category): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(Category),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/categorys/${Category.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedCategory=stringify(result);
  localStorage.setItem("updatedCategory", updatedCategory)
})
.catch(error => console.log('error', error));
};
  putCategory(Category:Category): void{
    this.updateCategory(Category);
  }
 
  deleteCategory(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/categorys/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedCategory=stringify(result);
  localStorage.setItem("deletedCategory", deletedCategory)
})
.catch(error => console.log('error', error));
};  
}