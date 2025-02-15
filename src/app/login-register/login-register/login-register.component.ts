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
  isOtpView: boolean = false;
  passwordFieldType: string = 'password';
  loginForm: FormGroup;
  registerForm: FormGroup;
  otpForm: FormGroup;
  error: string = '';
  emailForOtp: string = '';

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
      firstName: ['', [Validators.required, this.noWhitespaceValidator]],
      lastName: ['', [Validators.required, this.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
    
    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    });
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
      // First send OTP
      this.authService.sendOtp(this.registerForm.get('email')?.value).subscribe({
        next: () => {
          this.isOtpView = true;
          this.emailForOtp = this.registerForm.get('email')?.value;
          this.error = '';
        },
        error: (error) => {
          this.error = error.error?.message || 'Failed to send OTP';
        }
      });
    } else {
      console.log('Register Form is invalid');
    }
  }
  
  verifyOtp(): void {
    if (this.otpForm.valid) {
      this.authService.verifyOtp(
        this.emailForOtp,
        this.otpForm.get('otp')?.value
      ).subscribe({
        next: () => {
          // Log the registration data before sending
          const registrationData = {
            firstName: this.registerForm.get('firstName')?.value?.trim(),
            lastName: this.registerForm.get('lastName')?.value?.trim(),
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value
          };          
          console.log("Registration Data:", registrationData); // Debugging step
  
          this.authService.register(registrationData).subscribe({
            next: () => {
              this.isLoginView = true;
              this.isOtpView = false;
              this.registerForm.reset();
              this.otpForm.reset();
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
  noWhitespaceValidator(control: any) {
    if (control.value && control.value.trim() === '') {
      return { required: true };
    }
    return null;
  }
  
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
