import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-polymorphism',
  templateUrl: './quiz-polymorphism.component.html',
  styleUrl: './quiz-polymorphism.component.scss'
})
export class QuizPolymorphismComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Polymorphism Quiz | Objectiva');
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
    this.quizService.getPolymorphismQuizzes().subscribe({
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

      this.quizService.getCurrentScore('polymorphism').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('polymorphism', this.score, this.quizData.length)
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
      case 1: feedback = 'You have no clue what polymorphism is. Start by understanding method overloading and overriding.'; break;
      case 2: feedback = 'You’ve heard the word “polymorphism” but don’t know what it means. Learn why it’s useful in OOP.'; break;
      case 3: feedback = 'You barely understand it. Focus on how a single interface can be used with different implementations.'; break;
      case 4: feedback = 'Your knowledge is weak. Practice writing methods that are overloaded and overridden in subclasses.'; break;
      case 5: feedback = 'You get the concept, but struggle to apply it. Work on simple examples of runtime and compile-time polymorphism.'; break;
      case 6: feedback = 'You understand the basics, but your implementations are messy. Clean up your code and use proper method overriding.'; break;
      case 7: feedback = 'You know about polymorphism but don’t see its importance. Learn how it makes code more scalable and maintainable.'; break;
      case 8: feedback = 'Your understanding is shallow. Experiment with interfaces and abstract classes to see polymorphism in action.'; break;
      case 9: feedback = 'You can implement basic polymorphism, but can you explain why it’s beneficial? Work on improving your explanations.'; break;
      case 10: feedback = 'Good job! Now, learn how dynamic method dispatch works in Java.'; break;
      case 11: feedback = 'You are developing a solid foundation. Now, explore how polymorphism helps reduce code duplication.'; break;
      case 12: feedback = 'Your knowledge is growing! Understand how polymorphism allows for flexible and reusable code.'; break;
      case 13: feedback = 'You’re doing well! Try using polymorphism in real-world applications like logging and event handling.'; break;
      case 14: feedback = 'Solid understanding! Explore how frameworks like Spring use polymorphism to achieve loose coupling.'; break;
      case 15: feedback = 'Great progress! Make sure you fully understand how method overriding works in subclassing.'; break;
      case 16: feedback = 'Your polymorphism skills are strong. Try designing a program that takes advantage of polymorphic behavior.'; break;
      case 17: feedback = 'You have a solid grasp! Learn about function pointers and how Java resolves method calls dynamically.'; break;
      case 18: feedback = 'You have a deep understanding. Now, experiment with dependency injection and polymorphism together.'; break;
      case 19: feedback = 'Excellent knowledge! Study how polymorphism is leveraged in real-world design patterns like Strategy and Factory.'; break;
      case 20: feedback = 'Your polymorphism skills are advanced! Try implementing advanced concepts like method reference in functional programming.'; break;
      case 21: feedback = 'Your understanding is outstanding! Now, work on optimizing your polymorphic structures for performance.'; break;
      case 22: feedback = 'Exceptional knowledge! Study how JVM handles polymorphic method calls internally.'; break;
      case 23: feedback = 'Outstanding! Consider researching how polymorphism is implemented in dynamically-typed languages and compare.'; break;
      case 24: feedback = 'Brilliant understanding! Teach others and challenge yourself by designing complex OOP architectures.'; break;
      case 25: feedback = 'Perfect score! But never stop learning—true polymorphism mastery is about knowing when and when NOT to use it.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}