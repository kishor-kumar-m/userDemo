import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-tailwind-boilerplate';
  isLoggedIn = false;

  constructor(public userService: UserService, private router: Router) {

  }

  


  logout() {
      this.userService.logout(); 
      this.router.navigate(['/login']); 
    
  }
}
