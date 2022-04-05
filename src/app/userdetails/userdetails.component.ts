import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(public UserService: UserService, public route: ActivatedRoute) { }

  public routeSub?:Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.getUserIdData(id);
    })
  }
  user: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: ""
  }

  getUserIdData(id:number):void{
    this.UserService.getUserId(id).subscribe(data =>
    {
      this.user = data;
    })
  }
  
  /* Necesitamos la localstorage con el rol para hacer el PUT */
  putUserData(id:number): void {
    this.UserService.putUser(id, this.user).subscribe((user) => {
      this.user = user;
    });
  }
  
  refresh(){
    window.location.reload();
    alert("Usuarix modificado con éxito.");
  }
}
