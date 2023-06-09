
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string | any;
  password: string | any;

  // constructor(private authService: AuthService) {}
  constructor(private router: Router) { }

  
  // username: string;
  // password: string;

  onSubmit() {
    // Handle form submission logic

    // Store the entered username and password in local storage
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  
    this.router.navigate(['/login']);
  }
}
