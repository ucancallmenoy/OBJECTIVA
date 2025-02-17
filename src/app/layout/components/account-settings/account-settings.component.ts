import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

// Add interface for User
interface User {
  first_name: string;
  last_name: string;
  email: string;
}

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  accountForm!: FormGroup;
  isEditing = false;
  showPasswordFields = false;
  apiUrl = `${environment.baseUrl}/update-profile`;
  user: User = {
    first_name: '',
    last_name: '',
    email: ''
  };
  passwordVisibility = {
    old_password: false,
    password: false,
    confirm_password: false
  };

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Initialize user data with null checks
    this.user = {
      first_name: this.authService.getFirstName() || '',
      last_name: this.authService.getLastName() || '',
      email: this.authService.getEmail() || ''
    };

    this.initializeForm();
  }

  private initializeForm(): void {
    this.accountForm = this.fb.group({
      first_name: [
        { value: this.user.first_name, disabled: true }, 
        [Validators.required, Validators.maxLength(255)]
      ],
      last_name: [
        { value: this.user.last_name, disabled: true }, 
        [Validators.required, Validators.maxLength(255)]
      ],
      email: [
        { value: this.user.email, disabled: true }, 
        [Validators.required, Validators.email]
      ],
      old_password: [''],
      password: [''],
      confirm_password: ['']
    }, { validators: this.passwordsMatch });
  }

  togglePasswordFields(event: any): void {
    this.showPasswordFields = event.target.checked;
    const passwordControls = ['old_password', 'password', 'confirm_password'];
    
    if (this.showPasswordFields) {
      passwordControls.forEach(control => {
        this.accountForm.get(control)?.setValidators([Validators.required, Validators.minLength(8)]);
      });
    } else {
      passwordControls.forEach(control => {
        this.accountForm.get(control)?.clearValidators();
        this.accountForm.get(control)?.setValue('');
      });
    }
    
    passwordControls.forEach(control => {
      this.accountForm.get(control)?.updateValueAndValidity();
    });
  }

  togglePasswordVisibility(field: 'old_password' | 'password' | 'confirm_password'): void { // Explicitly type the field parameter
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }

  passwordsMatch(group: FormGroup) {
    if (!group.get('password')?.value) {
      return null;
    }
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  enableEditing(): void {
    this.isEditing = true;
    this.accountForm.get('first_name')?.enable();
    this.accountForm.get('last_name')?.enable();
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.showPasswordFields = false;
    this.accountForm.get('first_name')?.disable();
    this.accountForm.get('last_name')?.disable();
    this.accountForm.get('email')?.disable();
    this.accountForm.patchValue({
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      old_password: '',
      password: '',
      confirm_password: ''
    });
  }

  updateProfile(): void {
    if (this.accountForm.valid) {
      const formData: any = {
        first_name: this.accountForm.get('first_name')?.value,
        last_name: this.accountForm.get('last_name')?.value,
      };

      if (this.showPasswordFields) {
        formData.old_password = this.accountForm.get('old_password')?.value;
        formData.password = this.accountForm.get('password')?.value;
      }

      this.http.put(this.apiUrl, formData).subscribe({
        next: (response: any) => {
          // Update local user data
          this.user = {
            ...this.user,
            first_name: response.user.first_name,
            last_name: response.user.last_name
          };
          
          // Update localStorage
          localStorage.setItem('firstName', response.user.first_name);
          localStorage.setItem('lastName', response.user.last_name);
          
          alert('Profile updated successfully');
          this.isEditing = false;
          this.showPasswordFields = false;
          this.accountForm.get('first_name')?.disable();
          this.accountForm.get('last_name')?.disable();
        },
        error: (error) => {
          alert('Error updating profile');
          console.error(error);
        }
      });
    }
  }
  

  logout() {
    this.authService.logout();
  }

}