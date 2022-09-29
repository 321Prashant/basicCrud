import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseURL="http://localhost:8080"

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient:HttpClient, private authService:UserAuthService) { }
  public login(loginData){
    return this.httpclient.post(this.BaseURL+"/authenticate",loginData,{headers:this.requestHeader});
  }
  public roleMatch(roles):boolean{
    let isMatch=false;
    const userRole:any=this.authService.getRoles();
    if(roles!=null && roles){
      for (let j=0;j<userRole.length;j++)
      for(let i=0;i<roles.length;i++){
        if(userRole[i].roleName === roles[j]){
          isMatch = true;  
          return isMatch;
        }
        else
        return isMatch;
      }
    }
  }

  public forUser() {
    return this.httpclient.get('http://localhost:8080/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get('http://localhost:8080/forAdmin', {
      responseType: 'text',
    });
  }

}
