import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(public http: HttpClient) { }
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'
    
  getUserinfo(): void {
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch('https://localhost:44316/api/user', requestOptions)
  .then(response => response.text())
  .then(result => {
    let userinfoList=stringify(result);
    localStorage.setItem("userinfoList", userinfoList)
  })
  .catch(error => console.log('error', error));
  }
  
  getUserinfoId(id:number):void{
    let requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/user/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let userinfoPerId=stringify(result);
    localStorage.setItem("userinfoPerId", userinfoPerId)
  })
  .catch(error => console.log('error', error));
  }
  postUserinfo(Userinfo: Userinfo): void {
    let requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${this.tokenUser}`},
      body: JSON.stringify(Userinfo),
      redirect: 'follow'
    };
    fetch(`https://localhost:44316/api/user`, requestOptions)
  .then(response => response.text())
  .then(result => {
    let postedUserinfo=stringify(result);
    localStorage.setItem("postedUserinfo", postedUserinfo)
  })
  .catch(error => console.log('error', error));
  };

  updateUserinfo(Userinfo: Userinfo): void {
  let requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
    body: JSON.stringify(Userinfo),
    redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/user/${Userinfo.id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let updatedUserinfo=stringify(result);
  localStorage.setItem("updatedUserinfo", updatedUserinfo)
})
.catch(error => console.log('error', error));
};
  putUserinfo(Userinfo:Userinfo): void{
    this.updateUserinfo(Userinfo);
  }
 
  deleteUserinfo(id: number): void {
    let requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.tokenUser}`},
       redirect: 'follow'
  };
  fetch(`https://localhost:44316/api/user/${id}`, requestOptions)
.then(response => response.text())
.then(result => {
  let deletedUserinfo=stringify(result);
  localStorage.setItem("deletedUserinfo", deletedUserinfo)
})
.catch(error => console.log('error', error));
};  
}