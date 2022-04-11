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

  us: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
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

  postDataUser(): void {
    this.UserService.postUser(this.us).subscribe();
    // alert("¡Usuarix añadido con éxito!");
    // this.refresh();

    let smiley = document.querySelector("#smiley") as HTMLElement;
    let saddey = document.querySelector("#saddey") as HTMLElement;
    smiley.classList.add('show');
    smiley.classList.remove('hide');
    saddey.classList.remove('show');
    saddey.classList.add('hide');


    let buttonIndex = document.querySelector("#button-index") as HTMLElement;
    let buttonAdmin = document.querySelector("#button-admin") as HTMLElement;
    let infoPopup = document.querySelector("#popup-info") as HTMLElement;
    
    buttonAdmin.classList.add('show');
    buttonAdmin.classList.remove('hide');
    buttonIndex.classList.add('hide');
    buttonIndex.classList.remove('show');

    infoPopup.innerHTML = "¡Usuarix añadido con éxito!";
    this.popup();
  }

  refreshAndGoToIndex(){
    window.location.href=('http://localhost:4200');
  }
  // postDataUser():void{
  //   this.UserService.postUser(this.ue).subscribe();
  //   alert("Usuario registrado con éxito.");
  //   window.location.href=('http://localhost:4200/login');
  // }

  // postUser(): void {
  //   this.UserService.postUser(this.user).subscribe(data =>{
  //     alert("¡Usuarix añadido con éxito!");
  //     this.refresh();
  //   });
  // }

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
        
        
        if (vari.status == '401') {
          // alert('Error al logear');
          let smiley = document.querySelector("#smiley") as HTMLElement;
          let saddey = document.querySelector("#saddey") as HTMLElement;
          smiley.classList.add('hide');
          smiley.classList.remove('show');
          saddey.classList.remove('hide');
          saddey.classList.add('show');

          let buttonIndex = document.querySelector("#button-index") as HTMLElement;
          let buttonAdmin = document.querySelector("#button-admin") as HTMLElement;
          buttonAdmin.classList.add('show');
          buttonAdmin.classList.remove('hide');
          buttonIndex.classList.add('hide');
          buttonIndex.classList.remove('show');

          let infoPopup = document.querySelector("#popup-info") as HTMLElement;
          infoPopup.innerHTML = "Error al logear.";
          this.popup();

          this.tokenUser.rol="Error";
          localStorage.removeItem('email');
        } else {
          let loggedUser= this.getUserMail(this.tokenUser.email);
          //localStorage.setItem('tokenUser', JSON.stringify(this.tokenUser));    
          localStorage.setItem('token', vari.token);
          localStorage.setItem('email', this.tokenUser.email);
          //REGOGER LA VARIABLE ROL
          localStorage.setItem('rol', this.tokenUser.rol);
          localStorage.removeItem('tokenUser');
          localStorage.removeItem('a');      
          // alert('Bienvenido');
            let smiley = document.querySelector("#smiley") as HTMLElement;
            let saddey = document.querySelector("#saddey") as HTMLElement;
            smiley.classList.add('show');
            smiley.classList.remove('hide');
            saddey.classList.remove('show');
            saddey.classList.add('hide');

            let buttonIndex = document.querySelector("#button-index") as HTMLElement;
            let buttonAdmin = document.querySelector("#button-admin") as HTMLElement;
            let infoPopup = document.querySelector("#popup-info") as HTMLElement;
              
            buttonAdmin.classList.add('hide');
            buttonAdmin.classList.remove('show');
            buttonIndex.classList.add('show');
            buttonIndex.classList.remove('hide');
            infoPopup.innerHTML = "¡Bienvenidx!";
            this.popup();
        };

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
      // localStorage.setItem('rol', JSON.stringify(data.rol));
    })
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
