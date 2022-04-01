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
  } 
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>('https://localhost:44316/api/products');
  };

  getProductId(id:number):Observable<Product>{
    return this.http.get<Product>('https://localhost:44316/api/products/' + id);
  };
};
