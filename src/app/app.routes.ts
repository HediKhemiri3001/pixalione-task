import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './course/home/home.component';

export const routes: Routes = [
  { title: 'Login', path: 'login', component: LoginComponent },
  { title: 'Register', path: 'register', component: RegisterComponent },
  { title: 'Home', path: 'home', component: HomeComponent },
  //{ title: 'NOt Found', path: '**' },
];
