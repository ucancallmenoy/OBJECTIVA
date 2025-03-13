import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { LessonProgressService } from '../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';


// Progress Interfaces
interface LessonProgress {
  completed: boolean;
  last_section?: number;
  updated_at?: string;
}

interface UserProgress {
  [lessonId: string]: LessonProgress;
}

interface ProgressResponse {
  success: boolean;
  data: {
    progress: UserProgress;
    counts?: { [key: string]: number };
    dates?: { [key: string]: string };
  };
}

interface LessonCounts {
  [lessonId: string]: number;
}

interface CompletionDates {
  [lessonId: string]: string;
}

interface LessonNames {
  [key: string]: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  // Properties
  userProgress: UserProgress | null = null;
  newUser: any = {};
  users: any[] = [];
  loading = false;
  error: string | null = null;
  
  showAddModal = false;
  showEditModal = false;
  showDeleteModal = false;
  showInfoModal = false;
  
  userForm: FormGroup;
  selectedUser: any = null;
  
  lessonCounts: LessonCounts | null = null;
  completionDates: CompletionDates | null = null;
  
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  Math = Math;
  Object = Object;
  readonly TOTAL_LESSONS = 30;

  private lessonNames: LessonNames = {
    'intro-lesson-1': 'Introduction to Object-Oriented Programming',
    'intro-lesson-2': 'Understanding Object and Classes',
    'intro-lesson-3': 'Introduction to Java',
    'intro-lesson-4': 'Basic OOP Concepts in Java',
    'intro-lesson-5': 'Class Structure and Access',
    'intro-lesson-6': 'Basic Object-Oriented Design',
    'intro-lesson-7': 'Java Class Libraries Overview',
    'intro-lesson-8': 'Object Interactions',
    'abstraction-lesson-1': 'Understanding Abstraction',
    'abstraction-lesson-2': 'Abstract Classes',
    'abstraction-lesson-3': 'Interfaces',
    'abstraction-lesson-4': 'Implementation in Java',
    'encapsulation-lesson-1': 'Understanding Encapsulation',
    'encapsulation-lesson-2': 'Access Modifiers',
    'encapsulation-lesson-3': 'Getters and Setters',
    'encapsulation-lesson-4': 'Data Validation',
    'encapsulation-lesson-5': 'Implementation in Java',
    'inheritance-lesson-1': 'Understanding inheritance',
    'inheritance-lesson-2': 'Single Inheritance',
    'inheritance-lesson-3': 'Types of Inheritance in Java',
    'inheritance-lesson-4': 'Method Overriding',
    'inheritance-lesson-5': 'Advanced Inheritance Concepts',
    'inheritance-lesson-6': 'Implementation in Java',
    'polymorphism-lesson-1': 'Understanding Polymorphism',
    'polymorphism-lesson-2': 'Compile-time Polymorphism (Static)',
    'polymorphism-lesson-3': 'Runtime Polymorphism (Dynamic)',
    'polymorphism-lesson-4': 'Advanced Polymorphic Concepts',
    'polymorphism-lesson-5': 'Polymorphism with Interfaces',
    'polymorphism-lesson-6': 'Implementation in Java'
  };

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
      password: [''],
      is_active: [true],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  // User Management Methods
  loadUsers(): void {
    this.loading = true;
    this.error = null;
    
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
        this.updatePagination();
      },
      error: (err) => {
        this.error = 'Error loading users';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe({
      next: () => {
        this.loadUsers();
        this.newUser = {};
        this.showAddModal = false;
      },
      error: (error) => {
        this.error = error.message;
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
    if (this.userForm.invalid) return;

    const userData = this.userForm.value;
    if (!userData.password) {
      delete userData.password;
    }

    this.userService.updateUser(this.selectedUser.id, userData).subscribe({
      next: () => {
        this.loadUsers();
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
    this.userService.deleteUser(this.selectedUser.id).subscribe({
      next: () => {
        this.loadUsers();
        this.showDeleteModal = false;
      },
      error: (err) => {
        this.error = 'Error deleting user';
        console.error('Error:', err);
      }
    });
  }

  // Progress Management Methods
  openInfoModal(user: any) {
    this.selectedUser = user;
    this.showInfoModal = true;
    this.getLessonProgress(user.id);
  }

  getLessonProgress(userId: number) {
    this.lessonProgressService.getLessonProgress(userId).subscribe({
      next: (response: ProgressResponse) => {
        if (response.success) {
          this.userProgress = response.data.progress;
          this.lessonCounts = response.data.counts || null;
          this.completionDates = response.data.dates || null;
          console.log('Raw Response:', response);
          console.log('User Progress:', this.userProgress);
        } else {
          this.userProgress = null;
          this.lessonCounts = null;
          this.completionDates = null;
        }
      },
      error: (error) => {
        console.error('Error fetching lesson progress:', error);
        this.userProgress = null;
        this.lessonCounts = null;
        this.completionDates = null;
      }
    });
  }

  getLessonName(lessonId: string): string {
    return this.lessonNames[lessonId] || `Lesson ${lessonId}`;
  }

  hasProgress(lessonId: string): boolean {
    if (!this.userProgress || !this.userProgress[lessonId]) return false;
    return this.userProgress[lessonId].completed || 
           (this.userProgress[lessonId].last_section || 0) > 0;
  }

  isLessonCompleted(lessonId: string): boolean {
    if (!this.userProgress || !this.userProgress[lessonId]) return false;
    return this.userProgress[lessonId].completed === true;
  }

  isLessonInProgress(lessonId: string): boolean {
    if (!this.userProgress || !this.userProgress[lessonId]) return false;
    return !this.userProgress[lessonId].completed && 
           (this.userProgress[lessonId].last_section || 0) > 0;
  }

  getLessonStatus(lessonId: string): string {
    if (!this.userProgress || !this.userProgress[lessonId]) return 'Not Started';
    
    if (this.userProgress[lessonId].completed) {
      return 'Completed';
    }
    
    const lastSection = this.userProgress[lessonId].last_section;
    if (lastSection && lastSection > 0) {
      return `In Progress (Section ${lastSection})`;
    }
    
    return 'Not Started';
  }

  getLessonUpdateDate(lessonId: string): string | null {
    if (!this.userProgress || !this.userProgress[lessonId]) return null;
    return this.userProgress[lessonId].updated_at || null;
  }

  getCompletedLessonsCount(): number {
    if (!this.userProgress) return 0;
    return Object.values(this.userProgress)
      .filter(p => p.completed).length;
  }

  calculateProgress(): string {
    const percentage = Math.round((this.getCompletedLessonsCount() / this.TOTAL_LESSONS) * 100);
    return `${percentage}% (${this.getCompletedLessonsCount()} of ${this.TOTAL_LESSONS} lessons)`;
  }

  getLessonKeys(): string[] {
    return Object.keys(this.lessonNames).sort((a, b) => {
      const aCategory = a.split('-')[0];
      const bCategory = b.split('-')[0];
      const aNumber = parseInt(a.split('-')[2]);
      const bNumber = parseInt(b.split('-')[2]);
      
      if (aCategory !== bCategory) {
        const order = ['intro', 'abstraction', 'encapsulation', 'inheritance', 'polymorphism'];
        return order.indexOf(aCategory) - order.indexOf(bCategory);
      }
      return aNumber - bNumber;
    });
  }

  // Pagination Methods
  get filteredUsers() {
    return this.users.filter(user => 
      user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onPageSizeChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  getPages(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
  getLessonsByCategory(category: string): string[] {
    return this.getLessonKeys().filter(lessonId => lessonId.startsWith(category + '-'));
  }
}