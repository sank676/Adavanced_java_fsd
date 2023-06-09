
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string | any;
  password: string | any;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password);
  }
}
