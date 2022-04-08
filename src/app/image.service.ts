import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('https://localhost:44316/upload', formData);
  }

  wannaMyPhoto(selectedFile:File): Observable<any> {
    return this.http.post('https://localhost:44316/resources/images/', selectedFile);
  }

}