import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44316/api/Users')
  }
  
  postUser(user: User): Observable<User> {
    return this.http.post<User>(
      'https://localhost:44316/api/users',
      user,
      this.httpOptions
    );
  }

  getUserId(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:44316/api/users/' + id);
  }
  getUserMail(email:string):Observable<User>{
    return this.http.get<User>('https://localhost:44316/api/Users/mail/' + email);
  }

  putUser(id:number, user:User): Observable<User> {
    return this.http.put<User>('https://localhost:44316/api/users/' + id, user, this.httpOptions)
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>('https://localhost:44316/api/users/' + id);  
  }
}

