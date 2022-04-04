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
    this.UserService.postUser(this.user).subscribe();
    alert("¡Usuarix añadido con éxito!");
  }

  getUserIdData(id:number):void{
    this.UserService.getUserId(id).subscribe(data =>
    {
      this.user = data;
    })
  }

  putUserData(id:number): void {
      this.UserService.putUser(id, this.user).subscribe((user) => {
        this.user = user;
        console.log(this.user);
    });
    alert("¡Usuarix modificado con éxito!");
  }

  deleteUserData(id: number): void {
    this.UserService.deleteUser(id).subscribe();
    alert("¡Usuarix eliminado con éxito!");
  }

  refresh(){
    window.location.reload();
  }
}