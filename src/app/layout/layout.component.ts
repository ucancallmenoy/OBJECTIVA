import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if the current route is 'login' and hide the navbar
    this.router.events.subscribe(() => {
      if (this.router.url === '/login-register') {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    });
  }
}
