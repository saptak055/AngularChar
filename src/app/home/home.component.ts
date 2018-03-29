import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService, userDetails } from "../user-authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // username:any = this.userAuth.user.username;
  user: any = this.userAuth.user;

  items = this.userAuth.items;

  constructor(private userAuth: UserAuthenticationService) { }
  
  ngOnInit() {}
  
}
