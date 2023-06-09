import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string|any;
  password: string|any;

  constructor(private router: Router) { }

  onSubmit() {
    // Handle form submission logic

    // Retrieve the stored username and password from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored credentials
    if (this.username === storedUsername && this.password === storedPassword) {
      // Credentials are valid, perform the desired action (e.g., redirect to dashboard)
      this.router.navigate(['/dashboard']);
      // ...
    } else {
      // Credentials are invalid, display an error message
      alert('Invalid username or password');
    }
  }
}
