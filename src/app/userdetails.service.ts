import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdetails } from './userdetails';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(public http: HttpClient) { }

  tokenUserdetails = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getUserdetails(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUserdetails}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/user', requestOptions)
  .then(response => response.text())
  .then(result => {
    let userdetailsList=JSON.stringify(result);
    localStorage.setItem("userdetailsList", userdetailsList)
  })
  .catch(error => console.log('error', error));
  }
  
  getUserdetailsId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUserdetails}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/user/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let userdetailsPerId=JSON.stringify(result);
    localStorage.setItem("userdetailsPerId", userdetailsPerId)
  })
  .catch(error => console.log('error', error));
  }
  postUserdetails(Userdetails: Userdetails): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUserdetails}`},
      body: JSON.stringify(Userdetails),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/user`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedUserdetails=JSON.stringify(result);
    localStorage.setItem("postedUserdetails", postedUserdetails)
  })
  .catch(error => console.log('error', error));
  };

  updateUserdetails(Userdetails: Userdetails): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUserdetails}`},
    body: JSON.stringify(Userdetails),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/user/${Userdetails.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedUserdetails=JSON.stringify(result);
  localStorage.setItem("updatedUserdetails", updatedUserdetails)
})
.catch(error => console.log('error', error));
};
  putUserdetails(Userdetails:Userdetails): void{
    this.updateUserdetails(Userdetails);
  }
 
  deleteUserdetails(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUserdetails}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/user/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedUserdetails=JSON.stringify(result);
  localStorage.setItem("deletedUserdetails", deletedUserdetails)
})
.catch(error => console.log('error', error));
};  
}