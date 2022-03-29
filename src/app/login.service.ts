import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  getLogin(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44316/api/Users')
}
}
