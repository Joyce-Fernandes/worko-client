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
    rol: ''
  };
 
  constructor(public UserService: UserService) { };

  ngOnInit(): void {
    
  }

  refresh(){
    window.location.reload();
  }

  user: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
  }

  postUser(): void {
    this.UserService.postUser(this.user).subscribe(data =>{
      alert("¡Usuarix añadido con éxito!");
      this.refresh();
    });
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
        if (this.tokenUser.email === "admin@workoshop.es") {
          this.tokenUser.rol="Admin"
        } else {
          this.tokenUser.rol="User"
        };
        
        localStorage.setItem('tokenUser', JSON.stringify(this.tokenUser));    
        localStorage.setItem('token', vari.token);
        localStorage.setItem('email', this.tokenUser.email);
        //REGOGER LA VARIABLE ROL
        localStorage.setItem('rol', this.tokenUser.rol);

        if (vari.status == '401') {
          alert('Error al logear');
          this.tokenUser.rol="Error";
          localStorage.removeItem('tokenUser');    
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        } else {
          alert('Bienvenido');
         // window.location.reload();
        };
        let loggedUser= this.getUserMail(this.tokenUser.email);       
          
        localStorage.setItem('token', vari.token);
        localStorage.removeItem('tokenUser');
        localStorage.removeItem('a');
        
      })
      .catch(error => console.log('error', error))
  };
  getUserMail(email:string):void{
    this.UserService.getUserMail(email).subscribe(data =>
    {
      this.user = data;
      //localStorage.setItem('loggedUser', JSON.stringify(data));
      localStorage.setItem('userId', JSON.stringify(data.id));
      localStorage.setItem('rol', JSON.stringify(data.rol));
    })
  } 
};

