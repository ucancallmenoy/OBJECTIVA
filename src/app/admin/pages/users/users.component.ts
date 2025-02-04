import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;
  
  // Modal and form properties
  showEditModal = false;
  showDeleteModal = false;
  userForm: FormGroup;
  selectedUser: any = null;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''], // Optional for editing
      is_active: [true]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    
    this.userService.getUsers()
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading users';
          this.loading = false;
          console.error('Error:', err);
        }
      });
  }

  openEditModal(user: any) {
    this.selectedUser = user;
    this.userForm.patchValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      is_active: user.is_active ?? true
    });
    this.showEditModal = true;
  }

  saveUser() {
    if (this.userForm.invalid) {
      return;
    }

    const userData = this.userForm.value;
    
    // Only include password if it's been changed
    if (!userData.password) {
      delete userData.password;
    }

    this.userService.updateUser(this.selectedUser.id, userData)
      .subscribe({
        next: () => {
          this.loadUsers(); // Refresh users
          this.showEditModal = false;
        },
        error: (err) => {
          this.error = 'Error updating user';
          console.error('Error:', err);
        }
      });
  }

  openDeleteModal(user: any) {
    this.selectedUser = user;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    this.userService.deleteUser(this.selectedUser.id)
      .subscribe({
        next: () => {
          this.loadUsers(); // Refresh users
          this.showDeleteModal = false;
        },
        error: (err) => {
          this.error = 'Error deleting user';
          console.error('Error:', err);
        }
      });
  }
}