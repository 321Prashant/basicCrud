import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseURL="http://localhost:8080"

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpCklient:HttpClient) { }
  public login(loginData){
    return this.httpCklient.post(this.BaseURL+"/authenticate",loginData,{headers:this.requestHeader});
  }
}
