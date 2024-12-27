import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  password = '';
  registerMessage: string = '';

  constructor(private router: Router) {} // Inject Router

  register() {
    console.log('Register:', { name: this.name, password: this.password });
    const registerData = {
      name: this.name,
      password: this.password, // Ensure the field names match the backend
    };

    // Make POST request to the backend for registration
    axios.post('http://localhost:4000/api/v1/user/register', registerData)
      .then((response) => {
        this.registerMessage = 'Registration Successful!';
        console.log('Registration successful', response.data);

        // Redirect to the home page (or any other page after successful registration)
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.registerMessage = 'Registration Failed!';
        console.error('Registration failed', error);
      });
  }
}

