import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getUserdetails(): Observable<Userinfo[]>{
    return this.http.get<Userinfo[]>('https://localhost:44316/api/users')
  }
  postUserdetails(userdetails: Userinfo): Observable<Userinfo> {
    return this.http.post<Userinfo>(
      'https://localhost:44316/api/users',
      userdetails,
      this.httpOptions
    );
  }

  getUserId(id:number):Observable<Userinfo>{
    return this.http.get<Userinfo>('https://localhost:44316/api/users/' + id);
  }

  putUserdetails(id:number, userdetails:Userinfo): Observable<Userinfo> {
    return this.http.put<Userinfo>('https://localhost:44316/api/users/' + id, userdetails, this.httpOptions)
  }
  deleteUserdetails(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/users'+id; 
    return this.http.delete(url, this.httpOptions)
  }
}