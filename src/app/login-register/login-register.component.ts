import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {

  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  loginForm: FormGroup = new FormGroup({});
  registerForm!: FormGroup;
  
  constructor(private router: Router, private titleService: Title, private fb: FormBuilder) {
    // for transition
    this.titleService.setTitle('Log in | Objectiva');

    // Initialize the login form
   this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Initialize the registration form
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
}
  

  homepage() {
    this.router.navigate(['/homepage']);
  }


 // Toggle password visibility
 togglePasswordVisibility() {
   this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
 }

 // Submit login form
 login() {
   if (this.loginForm.valid) {
     // Handle login logic here
     console.log('Login successful', this.loginForm.value);
   }
 }

 // Submit register form
 register() {
   if (this.registerForm.valid) {
     // Handle registration logic here
     console.log('Registration successful', this.registerForm.value);
   }
 }

 // Utility method to check if there are any errors
 hasErrors(): boolean {
  return (this.loginForm.invalid && (this.loginForm.dirty || this.loginForm.touched)) || 
         (this.registerForm.invalid && (this.registerForm.dirty || this.registerForm.touched));
}
}
