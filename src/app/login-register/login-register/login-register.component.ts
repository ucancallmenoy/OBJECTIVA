import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {
  isLoginView: boolean = true;
  isOtpView: boolean = false;
  passwordFieldType: string = 'password';
  loginForm: FormGroup;
  registerForm: FormGroup;
  otpForm: FormGroup;
  error: string = '';
  emailForOtp: string = '';
  success: string = '';

  constructor(
    private router: Router,
    private titleService: Title,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.titleService.setTitle('Log in | Objectiva');
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.gmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, this.noWhitespaceValidator]],
      lastName: ['', [Validators.required, this.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email, this.gmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      recaptcha: ['', Validators.required]
    });
    
    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }

  gmailValidator(control: AbstractControl) {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { gmail: true };
    }
    return null;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      ).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.error = error.error.message || 'Login failed';
        }
      });
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      this.authService.checkEmailExists(email).subscribe({
        next: (exists) => {
          if (exists) {
            this.error = 'Email already exists';
          } else {
            this.sendOtp(email);
          }
        },
        error: (error) => {
          this.error = error.error?.message || 'Failed to check email';
        }
      });
    } else {
      console.log('Register Form is invalid');
    }
  }

  sendOtp(email: string): void {
    this.authService.sendOtp(email).subscribe({
      next: () => {
        this.isOtpView = true;
        this.emailForOtp = email;
        this.error = '';
      },
      error: (error) => {
        this.error = error.error?.message || 'Failed to send OTP';
      }
    });
  }
  
  verifyOtp(): void {
    if (this.otpForm.valid) {
      this.authService.verifyOtp(
        this.emailForOtp,
        this.otpForm.get('otp')?.value
      ).subscribe({
        next: () => {
          const registrationData = {
            firstName: this.registerForm.get('firstName')?.value?.trim(),
            lastName: this.registerForm.get('lastName')?.value?.trim(),
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value
          };          
          console.log("Registration Data:", registrationData);
  
          this.authService.register(registrationData).subscribe({
            next: () => {
              this.isLoginView = true;
              this.isOtpView = false;
              this.registerForm.reset();
              this.otpForm.reset();
              this.success = 'Registration successful! Please log in.';
            },
            error: (error) => {
              console.error('Registration error:', error);
              this.error = error.error?.message || 'Registration failed';
            }
          });
        },
        error: (error) => {
          this.error = error.error?.message || 'Invalid OTP';
        }
      });
    }
  }
  
  updateFormControl(controlName: string, event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();
    this.registerForm.get(controlName)?.setValue(value);
    this.registerForm.get(controlName)?.updateValueAndValidity();
  }

  noWhitespaceValidator(control: AbstractControl) {
    if (control.value && control.value.trim() === '') {
      return { required: true };
    }
    return null;
  }
  
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  markFieldAsTouched(fieldName: string, form: FormGroup): void {
    const control = form.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }
}