import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {
  isLoginView: boolean = true;
  passwordFieldType: string = 'password';
  loginForm: FormGroup;
  registerForm: FormGroup;
  error: string = '';

  constructor(
    private router: Router,
    private titleService: Title,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.titleService.setTitle('Log in | Objectiva');
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      ).subscribe({
        next: () => {
          this.router.navigate(['/homepage']);
        },
        error: (error) => {
          this.error = error.error.message || 'Login failed';
        }
      });
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const registrationData = {
        first_name: this.registerForm.get('firstName')?.value,
        last_name: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      };
    
      this.authService.register(registrationData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.isLoginView = true;
          this.error = '';
          this.registerForm.reset();
        },
        error: (error) => {
          console.log('Registration error:', error);
          if (error.error && error.error.errors) {
            // Handle validation errors
            const validationErrors = error.error.errors;
            const errorMessages = Object.values(validationErrors).flat();
            this.error = errorMessages.join(', ');
          } else {
            this.error = error.error?.message || 'Registration failed';
          }
        }
      });
    } else {
      this.error = 'Please fill in all required fields correctly';
    }
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
