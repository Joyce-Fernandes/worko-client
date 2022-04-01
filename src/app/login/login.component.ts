import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenUser: User = { 
    id:-1,
    name: '',
    surname: '',
    email: '',
    password: '',
    adress: '',
    token: '',
    rol: ''
  };
 
  

  constructor(public user: UserService) { };

  ngOnInit(): void {
    //localStorage.clear;   

  }
  Login(): void {
       var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(this.tokenUser);
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
        let aux = localStorage.getItem('a'); //recupera dato con comillas
        let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
        let vari = JSON.parse(auxTxt);//crea un objeto, quitando las comillas
        this.tokenUser.token = vari.token;
        if (this.tokenUser.email =="Admin@Admin") {
          this.tokenUser.rol="Admin"
        } else {
          this.tokenUser.rol="User"
        };
        
        localStorage.setItem('tokenUser', JSON.stringify(this.tokenUser));    
        localStorage.setItem('token', this.tokenUser.token);
        localStorage.setItem('email', this.tokenUser.email);

        if (vari.status == '401') {
          alert('Error al logear');
          this.tokenUser.rol="Error";
        } else {
          alert('Bienvenido');
        }
        console.log(this.tokenUser);
      })
      .catch(error => console.log('error', error));
      //mandar el usuario a la BBDD
  };
};