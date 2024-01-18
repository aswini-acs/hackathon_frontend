import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,) { }
  get(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "69420", 
    });
    const postData = {
      "language_key": "EN",
      
      // Add other properties as needed
    };
    return this.http.post('https://58a6-2405-201-e01a-7238-d017-e9db-ac5c-e8b9.ngrok-free.app/questions',postData,{headers});
  }
}
