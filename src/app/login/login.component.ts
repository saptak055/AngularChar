import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetail:any;

  username:string = "";
  loggedIn:Boolean = false;

  constructor(private userAuth: UserAuthenticationService, private router: Router) { 
  }
  
  login(){
    this.userAuth.login();
    this.router.navigate(['home']);
  }

  logout(){
    this.userAuth.logout();
  }
  
  ngOnInit() {
    this.userDetail = this.userAuth.getUserDetails();
  }

} 
