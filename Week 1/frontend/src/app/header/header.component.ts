import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav>
      <button routerLink="/login" routerLinkActive="active-link">Login</button>
      <button routerLink="/register" routerLinkActive="active-link">Register</button>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive],
  styles: [`
    nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px;
      background-color: #f7f7f7;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    button {
      background-color: #4caf50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #45a049;
    }

    button:focus {
      outline: none;
    }

    .active-link {
      background-color: #45a049;  /* Active button color */
    }
  `]
})
export class Header {}
