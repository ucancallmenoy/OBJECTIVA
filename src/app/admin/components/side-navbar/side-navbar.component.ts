import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/admin");
  }

  navigateDashboard() {
    this.router.navigateByUrl("/admin/dashboard");
  }
  navigateUsers() {
    this.router.navigateByUrl("/admin/users");
  }
  navigateQuizzes() {
    this.router.navigateByUrl("/admin/quizzes");
  }
  navigateExercises() {
    this.router.navigateByUrl("/admin/exercises");
  }
}
