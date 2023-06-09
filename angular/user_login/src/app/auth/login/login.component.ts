import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = '';
  roles: string[];

  constructor() {
    this.roles = ['Admin', 'User', 'Guest'];
  }

  ngOnInit() {
    // Initialization code here
  }
}
