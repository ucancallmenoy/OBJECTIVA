import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';


@Component({
  selector: 'app-quiz-encapsulation',
  templateUrl: './quiz-encapsulation.component.html',
  styleUrl: './quiz-encapsulation.component.scss'
})
export class QuizEncapsulationComponent implements OnInit{
  constructor(
      private quizService: QuizService,
      private router: Router
    ) {}
  
    quizData: QuizData[] = quizData;
  
    currentQuiz = 0;
    score = 0;
    showScore = false;
    selectedAnswer: string | null = null; // Tracks the selected answer
    answerOptions: { id: string; text: string }[] = [];
  
    ngOnInit(): void {
      this.quizData = this.getRandomQuestions(quizData, 25);
      this.loadQuiz();
    }
  
    getRandomQuestions(data: QuizData[], count: number): QuizData[] {
      const shuffled = data.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  
    loadQuiz(): void {
      this.selectedAnswer = null; // Reset the selected answer
      const currentQuizData = this.quizData[this.currentQuiz];
      this.answerOptions = [
        { id: 'a', text: currentQuizData.a },
        { id: 'b', text: currentQuizData.b },
        { id: 'c', text: currentQuizData.c },
        { id: 'd', text: currentQuizData.d },
      ];
    }
  
    onSubmit(): void {
      if (this.selectedAnswer) {
        if (this.selectedAnswer === this.quizData[this.currentQuiz].correct) {
          this.score++;
        }
  
        this.currentQuiz++;
        if (this.currentQuiz < this.quizData.length) {
          this.loadQuiz();
        } else {
          this.showScore = true;
          // Save the quiz score
          this.quizService.saveScore('encapsulation', this.score, this.quizData.length)
            .subscribe({
              next: (response) => {
                console.log('Score saved successfully');
              },
              error: (error) => {
                console.error('Error saving score:', error);
              }
            });
        }
      }
    }
  
    resetQuiz(): void {
      this.currentQuiz = 0;
      this.score = 0;
      this.showScore = false;
      this.loadQuiz();
    }
    backtoQuiz(){
      this.router.navigate(['/quiz']); 
    }
}
