import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenUser: Login = {
    email: '',
    password: '',
    token: ''
  };
  userLogin: User = {
    email: this.tokenUser.email,
    password: this.tokenUser.password,
    id: -1,
    name: '',
    surname: '',
    adress: ''
  };

  constructor(public user: UserService) { };

  ngOnInit(): void {
    //localStorage.clear;   

  }
  Login(): void {
    this.userLogin.email = this.tokenUser.email;
    this.userLogin.password = this.tokenUser.password;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(this.userLogin);
    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://localhost:44316/api/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        localStorage.setItem("a", result)
        let aux = localStorage.getItem('a');
        let auxTxt = JSON.parse(JSON.stringify(aux));
        let vari = JSON.parse(auxTxt);
        var token = vari.token;
        console.log(this.tokenUser);
        this.tokenUser.token=token;
        console.log(this.tokenUser);

        // console.log(aux);
        // console.log(auxTxt);
        // console.log(vari);
        // console.log(vari.status)
        // console.log(token);
        if (vari.status == '401') {
          alert('Error al logear');
        } else {
          alert('Bienvenido');
        }
      })
      .catch(error => console.log('error', error));

  };
};