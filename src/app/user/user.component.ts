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

  }
  users: User[] = [];
  user: User = {
    id: 0,
      name: '',
      surname: '',
      email: '',
      password: '',
      adress: '',

  }
getUsers(): void {
    this.UserService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  postUser(): void {
    this.UserService.postUser(this.user).subscribe();
  }

  putUser(): void {
    this.UserService.updateUser(this.user).subscribe((user) => {
      this.user = user;
      console.log(this.users);
    });
  }
  deleteUser(id: number): void {
    this.UserService.deleteUser(id).subscribe();
  }
}


