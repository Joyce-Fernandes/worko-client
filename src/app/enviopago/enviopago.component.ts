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

  finishShopping():void{
    alert("¡Compra realizada con éxito!");
    this._router.navigate(['']);
  }

}
