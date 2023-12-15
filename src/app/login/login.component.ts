// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Hardcoded credentials for simplicity (replace with your actual logic)
    const validUsername = 'Premakrishnan';
    const validPassword = 'KrithikSiva@5';

    if (this.username === validUsername && this.password === validPassword) {
      // Redirect to the main page upon successful authentication
      this.router.navigate(['/main']);
    } else {
      // Display error message
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
