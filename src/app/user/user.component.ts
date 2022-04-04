import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Product } from '../product';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public UserService: UserService, public ProductService: ProductService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  
  usr?: User[];
  user: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
  }

  us: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
  }

  userIdNum:number = 0;

  getId(userId:string){
    this.userIdNum = parseInt(userId);
    return this.userIdNum;
  }

  getUserData(): void {
      this.UserService.getUsers().subscribe((data) => {
        this.usr = data;
        console.log(this.usr);
      });

  }
  showDefault(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');

    adminUser?.classList.remove('show');
    adminUser?.classList.add('hide');
    adminInit?.classList.remove('hide');
    adminInit?.classList.add('show');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
  }

  showAdminNewUser(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');

    adminUser?.classList.add('hide');
    adminUser?.classList.remove('show');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('hide');
    adminNewUser?.classList.add('show');
  }
  
  showAdminUser(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');

    adminUser?.classList.add('show');
    adminUser?.classList.remove('hide');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
  }

  postUser(): void {
    this.UserService.postUser(this.user).subscribe(data =>{
      // alert("¡Usuarix añadido con éxito!");
      let infoPopup = document.querySelector("#popup-info") as HTMLElement;
      infoPopup.innerHTML = "¡Usuario/a registrado/a con éxito!"
      this.refresh();
    });
  }

  getUserIdData(id:number):void{
    this.UserService.getUserId(id).subscribe(data =>
    {
      this.us = data;
    })
  }

  

  putUserData(id:number): void {
      this.UserService.putUser(id, this.us).subscribe((us) => {
        this.us = us;
        console.log(this.us);
    });
    alert("¡Usuarix modificado con éxito!");
  }

  popup() {
    const popup = document.querySelector(".popup"); 
    if(popup?.classList.contains("hideP")){
      popup?.classList.add("showP");
      popup?.classList.remove("hideP");
    }else{
      popup?.classList.add("hideP");
      popup?.classList.remove("showP");
    }
  }

  deleteUserData(id: number): void {
    this.UserService.deleteUser(id).subscribe();
    let infoPopup = document.querySelector("#popup-info") as HTMLElement;
    infoPopup.innerHTML = "¡Usuario/a eliminado/a con éxito!"
  }

  refresh(){
    window.location.reload();
  }
}