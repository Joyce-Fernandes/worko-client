import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Userdetails } from '../userdetails';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(public UserdetailsService: UserdetailsService) {}

  ngOnInit(): void {
    this.getUserdetailsData();
  }
  usrdetails?: Userdetails[];
  userdetails: Userdetails={

    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",

  }
  

getUserdetailsData(): void {
    this.UserdetailsService.getUserdetails().subscribe((data) => {
      this.usrdetails = data;
      console.log(this.usrdetails);
    });
  }

  postUserdetails(): void {
    this.UserdetailsService.postUserdetails(this.userdetails).subscribe();
 
  }

  putUserdetailsData(id:number): void {
      this.UserdetailsService.putUserdetails(id, this.userdetails).subscribe((userdetails) => {
        this.userdetails = userdetails;
        console.log(this.userdetails);
    });
  }

  deleteUserdetailsData(id: number): void {
    this.UserdetailsService.deleteUserdetails(id).subscribe();
  }
}
