import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  constructor() { }

  setToken(token:string){
    sessionStorage.setItem("token",token);
  }
  getToken():string{
    return localStorage.getItem("token");
  }

  setRoles(roles:[]){
    localStorage.setItem("Roles",JSON.stringify(roles))
  }

  getRoles():[]{
    return JSON.parse(localStorage.getItem("Roles"));
  }
  clear(){
    sessionStorage.clear();
  }
  isLoggedIn(){
    return this.getRoles() &&this.getToken();
  }
}
