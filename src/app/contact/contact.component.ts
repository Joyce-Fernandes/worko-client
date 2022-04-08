import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

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
}
