import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    // Check if the email and password are valid
    if (this.email === 'admin@ensam-casa.ma' && this.password === 'admin') {
      // Credentials are valid, navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Credentials are invalid, show an error message
      this.error = 'Invalid email or password';
    }
  }
}
