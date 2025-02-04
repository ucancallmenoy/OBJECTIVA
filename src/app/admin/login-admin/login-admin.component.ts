import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent {
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
    this.titleService.setTitle('Log in | Admin');
    
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
      this.authService.adminLogin(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      ).subscribe({
        next: (response) => {
          console.log('Admin Login Response:', response);  // Debugging response
          this.router.navigate(['admin/users']);
        },
        error: (error) => {
          console.error('Login error:', error); // Log the full error
          console.error('Full Error Object:', JSON.stringify(error, null, 2)); // Log full error object
          this.error = error?.error?.message || error?.message || 'Login failed';
        }
      });
    }
  }
  
  
  

  // onRegister(): void {
  //   if (this.registerForm.valid) {
  //     const registrationData = {
  //       first_name: this.registerForm.get('firstName')?.value,
  //       last_name: this.registerForm.get('lastName')?.value,
  //       email: this.registerForm.get('email')?.value,
  //       password: this.registerForm.get('password')?.value,
  //     };
    
  //     this.authService.register(registrationData).subscribe({
  //       next: (response) => {
  //         console.log('Registration successful:', response);
  //         this.isLoginView = true;
  //         this.error = '';
  //         this.registerForm.reset();
  //       },
  //       error: (error) => {
  //         console.log('Registration error:', error);
  //         if (error.error && error.error.errors) {
  //           // Handle validation errors
  //           const validationErrors = error.error.errors;
  //           const errorMessages = Object.values(validationErrors).flat();
  //           this.error = errorMessages.join(', ');
  //         } else {
  //           this.error = error.error?.message || 'Registration failed';
  //         }
  //       }
  //     });
  //   } else {
  //     this.error = 'Please fill in all required fields correctly';
  //   }
  // }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
