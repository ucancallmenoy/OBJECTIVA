import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncapsulationQuizService } from '../../../services/encapsulation-quiz.service';
@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.scss'
})
export class EncapsulationComponent implements OnInit{
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
  
    constructor(
      private abstractionQuizService: EncapsulationQuizService,
      private formBuilder: FormBuilder
    ) {
      this.quizForm = this.formBuilder.group({
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
      
      this.abstractionQuizService.getQuizzes()
        .subscribe({
          next: (quizzes) => {
            this.quizzes = quizzes;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Error loading abstraction quizzes';
            this.loading = false;
            console.error('Error:', err);
          }
        });
    }
  
    addQuiz(): void {
      this.abstractionQuizService.addQuiz(this.newQuiz).subscribe(
        (response) => {
          this.quizzes.push(response);
          this.newQuiz = {}; // Clear the form
          this.showAddModal = false;
        },
        (error) => {
          this.error = error.message;
        }
      );
    }
  
    openEditModal(quiz: any) {
      this.selectedQuiz = quiz;
      this.quizForm.patchValue({
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
  
      this.abstractionQuizService.updateQuiz(this.selectedQuiz.id, quizData)
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
      this.abstractionQuizService.deleteQuiz(this.selectedQuiz.id)
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
