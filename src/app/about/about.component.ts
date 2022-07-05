import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeBodyColor();
  }
  ngOnDestroy() {
    this.backToBodyColor();
  }

  changeBodyColor(){
    const body = document.querySelector('body');
    body?.classList.add('black-bg');
  }

  backToBodyColor(){
    const body = document.querySelector('body');
    body?.classList.remove('black-bg');
  }

}
