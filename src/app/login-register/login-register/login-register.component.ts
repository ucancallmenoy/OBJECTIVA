import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {

  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('Log in | Objectiva');
  }

  homepage() {
    this.router.navigate(['/homepage']);
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}