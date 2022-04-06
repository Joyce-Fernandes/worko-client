import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public http: HttpClient) { }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/../../assets/img/products/', formData);
  }

  wannaMyPhoto(selectedFile:File): Observable<any> {
    return this.http.post('/src/assets/img/products', selectedFile);
  }
}