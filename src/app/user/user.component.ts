import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
    this.getUserData(); 
  }
userIdNum:number = 0;

getId(userId:string){
  this.userIdNum = parseInt(userId);
  return this.userIdNum;
}

alerta(){
  alert(this.userIdNum);
}


  usr?: User[];
  user: User = {
    id:-1,
    name: '',
    surname: '',
    email: '',
    password: '',
    adress: '',
    token: '',
    rol: ''
  }
  getUserData(): void {
    this.UserService.getUsers().subscribe((data) => {
      this.usr = data;
      console.log(this.usr);
    });
  }

  postUser(): void {
    this.UserService.postUser(this.user).subscribe();
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
  }

  deleteUserData(id: number): void {
    this.UserService.deleteUser(id).subscribe();
  }
}


