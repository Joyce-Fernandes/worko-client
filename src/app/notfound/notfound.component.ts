import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeBodyColor()
  }
  ngOnDestroy() {
    this.backToBodyColor()
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
