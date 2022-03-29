import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>
    ('https://localhost:44316/api/Categorys');

  }

  postCategory(Category: Category): Observable<Category> {
  return this.http.post<Category>(
    'https://localhost:44316/api/Categorys',
    Category,
    this.httpOptions
    );
  }

updateCategory(Category: Category): Observable<Category> {
    return this.http.put<Category>
    ('https://localhost:44316/api/Categorys', 
    Category, this.httpOptions)
  }
  deleteCategory(id: number): Observable<unknown> {
    const url = 'https://localhost:44316/api/Categorys'+id; 
    return this.http.delete(url, this.httpOptions)
     
}
}

