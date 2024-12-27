import { Routes } from '@angular/router';
import { Header } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: Header },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];