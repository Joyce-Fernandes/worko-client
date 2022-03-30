import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor(public route: ActivatedRoute, public router: Router) { }
  // public href:any;

  // ngOnInit(): void {
  //   this.onWindowScroll();
  //   console.log(this.router.url);
  // }

  route?:string;

  constructor(private location: Location, private router: Router) {
    // router.events.subscribe(val => {
    //   if (location.path() != "") {
    //     this.route = location.path();
    //     console.log(this.route);
    //   } else {
    //     this.route = "";
    //   }
    // });
  }

  ngOnInit(): void{
    this.onWindowScroll();
    // this.router.events.subscribe(val => {
    //   if (this.location.path() != "") {
    //     this.route = this.location.path();
       
    //   } else {
    //     this.route = "";
    //   }
    //   console.log(this.route);
    // });
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