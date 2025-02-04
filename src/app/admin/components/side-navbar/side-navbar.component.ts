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
  navigatePolymorphism() {
    this.router.navigateByUrl("/admin/polymorphism");
  }
  navigateIntroductionJava() {
    this.router.navigateByUrl("/admin/introduction-java");
  }
  navigateIntroductionOop() {
    this.router.navigateByUrl("/admin/introduction-oop");
  }
  navigateInheritance() {
    this.router.navigateByUrl("/admin/inheritance");
  }
  navigateEncapsulation() {
    this.router.navigateByUrl("/admin/encapsulation");
  }
  navigateAbstraction() {
    this.router.navigateByUrl("/admin/abstraction");
  }

}
