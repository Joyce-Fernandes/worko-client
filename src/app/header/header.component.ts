import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void{
    this.onWindowScroll();
    this.userRol();
  }

  userId = JSON.parse(JSON.stringify(localStorage.getItem('userId')));
  rolUser = JSON.parse(JSON.stringify(localStorage.getItem('rol')));
  userRol(){
    const userAdmin = document.querySelector('#admin');
    const userBasic = document.querySelector('#basic');
    const userLogout = document.querySelector('#logout');
    const userLogoutMov = document.querySelector('#logout-mov');
    const userLogged = document.querySelector('#logged');
    if(this.rolUser === 'User'){
      userAdmin?.classList.add('hide');
      userBasic?.classList.add('hide');
      userLogged?.classList.add('show');
      userLogout?.classList.add('show-desktop');
      userLogoutMov?.classList.add('show');
      userAdmin?.classList.remove('show');
      userBasic?.classList.remove('show');
      userLogged?.classList.remove('hide');
      userLogout?.classList.remove('hide-desktop');
      userLogoutMov?.classList.remove('hide-desktop');
    }else if(this.rolUser === 'Admin'){
      userAdmin?.classList.add('show');
      userBasic?.classList.add('hide');
      userLogged?.classList.add('hide');
      userLogout?.classList.add('show-desktop');
      userLogoutMov?.classList.add('show');
      userAdmin?.classList.remove('hide');
      userBasic?.classList.remove('show');
      userLogged?.classList.remove('show');
      userLogout?.classList.remove('hide-desktop');
      userLogoutMov?.classList.remove('hide-desktop');
    }else{
      userAdmin?.classList.add('hide');
      userBasic?.classList.add('show');
      userLogged?.classList.add('hide');
      userLogout?.classList.add('hide-desktop');
      userLogoutMov?.classList.add('hide-desktop');
      userAdmin?.classList.remove('show');
      userBasic?.classList.remove('hide');
      userLogged?.classList.remove('show');
      userLogout?.classList.remove('show-desktop');
      userLogoutMov?.classList.remove('show-desktop');
      userLogoutMov?.classList.remove('show');
    }
  }

  responsiveMenu(){
    const menu = document.querySelector('.responsive-menu');
    if(menu?.classList.contains('hide')){
      menu?.classList.add('show');
      menu?.classList.remove('hide');
    }else if(menu?.classList.contains('show')){
      menu?.classList.add('hide');
      menu?.classList.remove('show');
    }
  }

  logOut(){
    localStorage.removeItem('a');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenUser');
    window.location.reload();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const header = document.querySelector('header');
      if(window.onload && scrollOffset === 0){
        header?.classList.add('header-load');
        header?.classList.remove('header-top', 'header-scroll');
      }else if(scrollOffset >= 50){
        header?.classList.add('header-scroll');
        header?.classList.remove('header-top', 'header-load');
      }else if(scrollOffset === 0){
        header?.classList.add('header-top');
        header?.classList.remove('header-scroll','header-load');
      }
  }
}