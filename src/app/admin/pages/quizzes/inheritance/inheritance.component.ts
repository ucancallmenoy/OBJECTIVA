import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.scss'
})
export class InheritanceComponent implements OnInit{
  newQuiz: any = {};
      quizzes: any[] = [];
      loading = false;
      showAddModal = false; 
      error: string | null = null;
      
      // Modal and form properties
      showEditModal = false;
      showDeleteModal = false;
      quizForm: FormGroup;
      selectedQuiz: any = null;
      selectedCategory: string = "inheritance";
    
      constructor(
        private quizService: QuizService,
        private formBuilder: FormBuilder
      ) {
        this.quizForm = this.formBuilder.group({
          category: ['', Validators.required],
          question: ['', Validators.required],
          a: ['', Validators.required],
          b: ['', Validators.required],
          c: ['', Validators.required],
          d: ['', Validators.required],
          correct: ['', Validators.required],
          explanation: [''],
          code: [''] // Optional code field
        });
      }
    
      ngOnInit(): void {
        this.loadQuizzes();
      }
      
      loadQuizzes(): void {
        this.loading = true;
        this.error = null;
        
        this.quizService.getInheritanceQuizzes()
          .subscribe({
            next: (quizzes) => {
              this.quizzes = quizzes;
              this.loading = false;
            },
            error: (err) => {
              this.error = 'Error loading inheritance quizzes';
              this.loading = false;
              console.error('Error:', err);
            }
          });
      }
    
      addQuiz(): void {
        this.quizService.addQuiz(this.selectedCategory,this.newQuiz).subscribe(
          (response) => {
            this.quizzes.push(response);
            this.newQuiz = {}; // Clear the form
            this.showAddModal = false;
          },
          (error) => {
            this.error = 'Error adding quiz. Please fill in all required fields and try again';
        }
        );
      }
    
      openEditModal(quiz: any) {
        this.selectedQuiz = quiz;
        this.quizForm.patchValue({
          category: quiz.category,
          question: quiz.question,
          a: quiz.a,
          b: quiz.b,
          c: quiz.c,
          d: quiz.d,
          correct: quiz.correct,
          explanation: quiz.explanation,
          code: quiz.code
        });
        this.showEditModal = true;
      }
    
      saveQuiz() {
        if (this.quizForm.invalid) {
          return;
        }
    
        const quizData = this.quizForm.value;
    
        this.quizService.updateQuiz(this.selectedQuiz.category,this.selectedQuiz.id, quizData)
          .subscribe({
            next: () => {
              this.loadQuizzes(); // Refresh quizzes
              this.showEditModal = false;
            },
            error: (err) => {
              this.error = 'Error updating quiz';
              console.error('Error:', err);
            }
          });
      }
    
      openDeleteModal(quiz: any) {
        this.selectedQuiz = quiz;
        this.showDeleteModal = true;
      }
    
      confirmDelete() {
        this.quizService.deleteQuiz(this.selectedQuiz.category,this.selectedQuiz.id)
          .subscribe({
            next: () => {
              this.loadQuizzes(); // Refresh quizzes
              this.showDeleteModal = false;
            },
            error: (err) => {
              this.error = 'Error deleting quiz';
              console.error('Error:', err);
            }
          });
      }
    }
