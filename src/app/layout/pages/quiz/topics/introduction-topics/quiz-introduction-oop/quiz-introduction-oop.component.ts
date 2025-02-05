import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-introduction-oop',
  templateUrl: './quiz-introduction-oop.component.html',
  styleUrls: ['./quiz-introduction-oop.component.scss'],
})
export class QuizIntroductionOopComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Introduction to OOP Quiz | Objectiva');
  }

  quizData: any[] = [];
  currentQuiz = 0;
  score = 0;
  showScore = false;
  selectedAnswer: string | null = null; // Tracks the selected answer
  answerOptions: { id: string; text: string }[] = [];

  // NEW
  showExplanation = false;
  isAnswerCorrect = false;
  hasSubmitted = false;
  loading = true;  // Tracks loading state

  higher: string = '';
  feedback: string = '';

  ngOnInit(): void {
    this.quizService.getIntroductionToOopQuizzes().subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(data, 25);
        this.loadQuiz();
        this.loading = false;  // Set loading to false once data is loaded
      },
      error: (err) => {
        console.error('Error fetching quizzes:', err);
        this.loading = false;  // Set loading to false in case of error
      }
    });
  }

  getRandomQuestions(data: any[], count: number): any[] {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  loadQuiz(): void {
    this.selectedAnswer = null; // Reset selected answer when loading a new question
    this.hasSubmitted = false;  // Ensure submit state is reset
    this.showExplanation = false; // Hide explanation

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
      this.isAnswerCorrect = this.selectedAnswer === this.quizData[this.currentQuiz].correct;
      this.showExplanation = true;
      this.hasSubmitted = true;

      if (this.isAnswerCorrect) {
        this.score++;
      }
    }
  }

  nextQuestion(): void {
    this.currentQuiz++;
    this.selectedAnswer = null;  // Reset selected answer
    this.hasSubmitted = false;   // Reset submit state
    this.showExplanation = false; // Hide explanation

    if (this.currentQuiz < this.quizData.length) {
      this.loadQuiz();
    } else {
      this.showScore = true;
      this.generateFeedback();

      this.quizService.getCurrentScore('introduction-oop').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('introduction-oop', this.score, this.quizData.length)
              .subscribe({
                next: (response) => {
                  if (currentScore !== null && this.score > currentScore) {
                    this.higher = 'Excellent! Your score is greater than your current score which means you have improved!';
                  }
                },
                error: (error) => console.error('Error saving score:', error)
              });
          }
        },
        error: (error) => console.error('Error fetching current score:', error)
      });
    }
  }

  resetQuiz(): void {
    this.currentQuiz = 0;
    this.score = 0;
    this.showScore = false;
    this.selectedAnswer = null;
    this.showExplanation = false;
    this.hasSubmitted = false;
    this.loadQuiz();
  }

  generateFeedback(): void {
    let feedback: string;

    switch (this.score) {
      case 1: feedback = 'You have no understanding of OOP. Learn what objects and classes are before moving forward.'; break;
      case 2: feedback = 'You might have heard of OOP, but you don’t really get it. Start by understanding real-world object modeling.'; break;
      case 3: feedback = 'Your OOP knowledge is extremely weak. Focus on the four pillars: encapsulation, abstraction, inheritance, and polymorphism.'; break;
      case 4: feedback = 'You barely grasp OOP. Work on creating simple classes and objects to understand the fundamentals.'; break;
      case 5: feedback = 'You understand the very basics, but your ability to apply OOP concepts is lacking. Code more and experiment.'; break;
      case 6: feedback = 'You have a surface-level understanding. Start using OOP principles in practical coding exercises.'; break;
      case 7: feedback = 'You know how to define classes and objects, but do you understand why OOP is useful? Explore real-world applications.'; break;
      case 8: feedback = 'You grasp the basics, but your design thinking needs improvement. Learn about cohesion and coupling.'; break;
      case 9: feedback = 'You have a fair understanding, but your implementation is weak. Work on projects that apply OOP effectively.'; break;
      case 10: feedback = 'Good job! Now learn about access modifiers and how they enforce data security in OOP.'; break;
      case 11: feedback = 'You are developing a solid OOP foundation. Now, explore how OOP helps in large-scale software development.'; break;
      case 12: feedback = 'Your understanding is growing! Practice designing class hierarchies and using constructors effectively.'; break;
      case 13: feedback = 'You’re doing well! Compare OOP with procedural programming and see the differences in maintainability.'; break;
      case 14: feedback = 'Solid knowledge! Start using design patterns like Singleton and Factory to strengthen your OOP design skills.'; break;
      case 15: feedback = 'Great progress! Make sure you fully understand polymorphism and method overriding.'; break;
      case 16: feedback = 'Your OOP skills are strong. Try breaking down a complex application into reusable classes and modules.'; break;
      case 17: feedback = 'You have a solid understanding! Learn about SOLID principles and best OOP practices to improve further.'; break;
      case 18: feedback = 'You have a deep grasp of OOP. Now, experiment with frameworks that rely on strong OOP foundations, like Spring.'; break;
      case 19: feedback = 'Excellent understanding! Try designing an object-oriented system from scratch and review your design choices.'; break;
      case 20: feedback = 'Your OOP skills are advanced! Dive into architectural patterns like MVC to see how OOP scales in real applications.'; break;
      case 21: feedback = 'Your understanding is outstanding! Now, work on writing clean, maintainable, and scalable OOP code.'; break;
      case 22: feedback = 'Exceptional knowledge! Study how OOP is applied in various programming paradigms and hybrid models.'; break;
      case 23: feedback = 'Outstanding! Consider researching advanced topics like metaprogramming and dynamic object creation.'; break;
      case 24: feedback = 'Brilliant understanding! Teach others and refine your ability to explain OOP principles clearly.'; break;
      case 25: feedback = 'Perfect score! But always challenge your designs—good OOP isn’t just about following rules but knowing when to break them.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
