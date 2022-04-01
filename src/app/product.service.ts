import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'applications/json'})
  };
  tokenUser = JSON.parse(JSON.stringify(localStorage.getItem('token'))); //recoge el token y lo deja 'limpio'

  getProduct():Observable<Product[]>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${this.tokenUser}`);//añade token al header
    return this.http.get<Product[]>('https://localhost:44316/api/products');
  };

  getProductId(id:number):Observable<Product>{
    return this.http.get<Product>('https://localhost:44316/api/products/' + id);
  };
};