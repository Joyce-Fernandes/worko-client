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
  constructor(public UserService: UserService, public route: ActivatedRoute, public UserinfoService: UserinfoService) { }

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

  refreshAndGoToIndex(){
    window.location.href=('http://localhost:4200');
  }

  getUserIdData(id:number):void{
    this.UserService.getUserId(id).subscribe(data =>
    {
      this.user = data;
    })
  }
  getUserIdInfo(id:number):void{
    this.UserinfoService.getUserId(id).subscribe(data =>
    {
      this.userinfo = data;
      console.log(this.userinfo);
    })
  }

  putUserData(id:number): void {
    this.UserService.putUser(id, this.user).subscribe();
  }
  

  // putUserData(id:number): void {
  //   this.UserService.putUser(id, this.user).subscribe((user) => {
  //     this.user = user;
  //   });
  // }
  
  refresh(){
    let infoPopup = document.querySelector("#popup-info") as HTMLElement;
    let buttonUser = document.querySelector("#button-user") as HTMLElement;
    let buttonIndex = document.querySelector("#button-index") as HTMLElement;
    let saddey = document.querySelector("#saddey") as HTMLElement;
    let smiley = document.querySelector("#smiley") as HTMLElement;
    
    smiley.classList.add('show');
    saddey.classList.add('hide');
    smiley.classList.remove('hide');
    saddey.classList.remove('show');

    buttonUser.classList.add('show');
    buttonUser.classList.remove('hide');
    buttonIndex.classList.add('hide');
    buttonIndex.classList.remove('show');

    infoPopup.innerHTML = "¡Usuarix modificado con éxito!"

    this.popup();
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
    this.UserService.deleteUser(id).subscribe();
    let infoPopup = document.querySelector("#popup-info") as HTMLElement;
    let buttonUser = document.querySelector("#button-user") as HTMLElement;
    let buttonIndex = document.querySelector("#button-index") as HTMLElement;
    let saddey = document.querySelector("#saddey") as HTMLElement;
    let smiley = document.querySelector("#smiley") as HTMLElement;
    
    smiley.classList.add('hide');
    saddey.classList.add('show');
    smiley.classList.remove('show');
    saddey.classList.remove('hide');

    buttonUser.classList.add('hide');
    buttonUser.classList.remove('show');
    buttonIndex.classList.add('show');
    buttonIndex.classList.remove('hide');

    infoPopup.innerHTML = "Agur! Te echaremos de menos."

    localStorage.removeItem('a');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenUser');

    this.popup();
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

  showUserProfile(){   
    const userProfile= document.getElementById('user-details');
    const userOrders = document.getElementById('user-orders');
    userProfile?.classList.add('show');
    userProfile?.classList.remove('hide');
    userOrders?.classList.add('hide');
    userOrders?.classList.remove('show');
  }
}