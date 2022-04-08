import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(public http: HttpClient) { }
  
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
  getUserMail(email:string):void{
    let requestOptions: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${this.tokenUser}`},
        redirect: 'follow'
      };
      fetch(`https://localhost:44316/api/users/mail/${email}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      let userPerEmail=stringify(result);
      localStorage.setItem("userPerEmail", userPerEmail)
    })
    .catch(error => console.log('error', error));
  };
    
  getUser(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/Users', requestOptions)
  .then(response => response.text())
  .then(result => {
    let userList=stringify(result);
    localStorage.setItem("userList", userList)
  })
  .catch(error => console.log('error', error));
  }
  
  getUserId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/users/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let userPerId=stringify(result);
    localStorage.setItem("userPerId", userPerId)
  })
  .catch(error => console.log('error', error));
  }
  postUser(User: User): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(User),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/users`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedUser=stringify(result);
    localStorage.setItem("postedUser", postedUser)
  })
  .catch(error => console.log('error', error));
  };

  updateUser(User: User): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(User),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/users/${User.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedUser=stringify(result);
  localStorage.setItem("updatedUser", updatedUser)
})
.catch(error => console.log('error', error));
};
  putUser(User:User): void{
    this.updateUser(User);
  }
 
  deleteUser(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/users/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedUser=stringify(result);
  localStorage.setItem("deletedUser", deletedUser)
})
.catch(error => console.log('error', error));
};  
}