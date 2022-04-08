import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { Userdetails } from '../userdetails';
import { Userinfo } from '../userinfo';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(public userService: UserService, public route: ActivatedRoute, public userinfoService: UserinfoService) { }

  public routeSub?:Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.getUserIdData(id);
      this.getUserIdInfo(id);
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

  userinfo: Userinfo={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "",
    orders:[]
  }

  order:[] = [];

  getUserIdData(id:number):void{
    this.userService.getUserId(id);
    let aux = localStorage.getItem('userPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.user=auxTxt;
  }

  getUserIdInfo(id:number):void{
    this.userService.getUserId(id);
    let aux = localStorage.getItem('userPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.userinfo=auxTxt;
    console.log(this.userinfo);
  }

  putUserData(id:number): void {
    this.userService.putUser(this.user);
    let aux = localStorage.getItem('updatedUser'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.user=auxTxt;
  }
  
  refresh(){
    window.location.reload();
    alert("Usuarix modificado con éxito.");
  }

  showUserOrder(){   
    const userProfile= document.getElementById('user-details');
    const userOrders = document.getElementById('user-orders');
    userProfile?.classList.add('hide');
    userProfile?.classList.remove('show');
    userOrders?.classList.add('show');
    userOrders?.classList.remove('hide');
  }

  deleteUserData(id: number): void {
    this.userService.deleteUser(id);
    alert("¡Agur! Te echaremos de menos :(");
    localStorage.removeItem('a');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenUser');
    window.location.href=('http://localhost:4200');
  }
  showUserProfile(){   
    const userProfile= document.getElementById('user-details');
    const userOrders = document.getElementById('user-orders');
    userProfile?.classList.add('show');
    userProfile?.classList.remove('hide');
    userOrders?.classList.add('hide');
    userOrders?.classList.remove('show');
  }
}