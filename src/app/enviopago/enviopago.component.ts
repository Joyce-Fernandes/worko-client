import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviopago',
  templateUrl: './enviopago.component.html',
  styleUrls: ['./enviopago.component.css']
})
export class EnviopagoComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  // finishShopping():void{
  //   // alert("¡Compra realizada con éxito!");
  //   this._router.navigate(['']);
  
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
}
