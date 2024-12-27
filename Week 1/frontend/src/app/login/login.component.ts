import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';  // Import the Router for navigation

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = '';
  password = '';
  loginMessage = '';

  constructor(private router: Router) { }  // Inject Router

  login() {
    const loginData = {
      name: this.name,
      password: this.password,
    };

    axios.post('http://localhost:4000/api/v1/user/login', loginData)
      .then((response) => {
        this.loginMessage = 'Login Successful!';
        console.log('Login successful', response.data);
        // Add logic to redirect after successful login if needed
      })
      .catch((error) => {
        this.loginMessage = 'Login Failed!';
        console.error('Login failed', error);
      });
  }

  // Method to navigate to the Register page
  goToRegister() {
    this.router.navigate(['/register']);
  }

  // Method to navigate to the home page (Header section)
  goBack() {
    this.router.navigate(['/']);
  }
}

