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

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void{
    this.onWindowScroll();
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