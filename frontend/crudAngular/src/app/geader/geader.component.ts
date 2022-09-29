import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-geader',
  templateUrl: './geader.component.html',
  styleUrls: ['./geader.component.css']
})
export class GeaderComponent implements OnInit {

  constructor(private authService:UserAuthService, private router:Router, public userService:UserService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  Logout(){
    this.authService.clear();
    this.router.navigate(["/home"])
  }
}
