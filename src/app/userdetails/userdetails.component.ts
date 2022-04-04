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
  }

}
