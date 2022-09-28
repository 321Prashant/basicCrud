import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserService, private userAuthService:UserAuthService, private router:Router) { }

  ngOnInit(): void {
  }

login(loginform:NgForm){
  this.UserService.login(loginform.value).subscribe(data=>{
    //  console.log(data.user.role)
    //  console.log(data.jwtToken)
    //  console.log(data)
     
     this.userAuthService.setRoles(data.user.role);
     this.userAuthService.setToken(data.jwtToken); 

     const role = data.user.role[0].roleName;
     if(role === 'Admin')
     this.router.navigate(['/admin'])
     else 
     this.router.navigate(['/user'])
    },
      (error)=>{
        console.log(error);
      }
  );
  console.log("i am in")
}
}
