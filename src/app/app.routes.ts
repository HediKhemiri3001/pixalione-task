import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './course/home/home.component';
import { authGuard } from './auth/auth.guard';
import { AddCourseComponent } from './course/add-course/add-course.component';

export const routes: Routes = [
  { title: 'Login', path: 'login', component: LoginComponent },
  { title: 'Register', path: 'register', component: RegisterComponent },
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Add course',
    path: 'add-course',
    component: AddCourseComponent,
    canActivate: [authGuard],
  },
  //{ title: 'NOt Found', path: '**' },
];
