import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getUserdetails(): Observable<Userdetails[]>{
    return this.http.get<Userdetails[]>('https://localhost:44316/api/users')
  }
  postUserdetails(userdetails: Userdetails): Observable<Userdetails> {
    return this.http.post<Userdetails>(
      'https://localhost:44316/api/users',
      userdetails,
      this.httpOptions
    );
  }

  getUserId(id:number):Observable<Userdetails>{
    return this.http.get<Userdetails>('https://localhost:44316/api/users/' + id);
  }

  putUserdetails(id:number, userdetails:Userdetails): Observable<Userdetails> {
    return this.http.put<Userdetails>('https://localhost:44316/api/users/' + id, userdetails, this.httpOptions)
  }
  deleteUserdetails(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/users'+id; 
    return this.http.delete(url, this.httpOptions)
     
}
}


