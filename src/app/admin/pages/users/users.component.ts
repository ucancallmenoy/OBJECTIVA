import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { LessonProgressService } from '../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  newUser: any = {};
  users: any[] = [];
  loading = false;
  showAddModal = false; 
  error: string | null = null;
  showInfoModal = false;
  lessonProgress: any;
  // Modal and form properties
  showEditModal = false;
  showDeleteModal = false;
  userForm: FormGroup;
  selectedUser: any = null;

  constructor(
    private userService: UserService,
    private lessonProgressService: LessonProgressService,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle('Admin | Objectiva');
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''], // Optional for editing
      is_active: [true],
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

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(
      (response) => {
        this.users.push(response);
        this.newUser = {}; // Clear the form
      },
      (error) => {
        this.error = error.message;
      }
    );
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

  openInfoModal(user: any) {
    this.selectedUser = user;
    this.showInfoModal = true;
    this.getLessonProgress(user.id);
  }

  getLessonProgress(userId: number) {
    this.lessonProgressService.getLessonProgress(userId).subscribe((response: any) => {
      if (response.success) {
        this.lessonProgress = response.data;
      } else {
        this.lessonProgress = null;
      }
    }, error => {
      console.error('Error fetching lesson progress', error);
      this.lessonProgress = null;
    });
  }

  // updateLessonProgress(userId: number, lessonId: number, completed: boolean) {
  //   this.lessonProgressService.updateLessonProgress(userId, lessonId, completed).subscribe();
  // }
}