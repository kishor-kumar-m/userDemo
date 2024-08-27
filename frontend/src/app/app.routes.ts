import { Routes } from '@angular/router';
import { authGuard } from './auth.guard'; // Adjust the path as needed

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(a => a.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(a => a.SignupComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.component').then(a => a.UsersComponent),
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
