import { Component, OnInit } from '@angular/core';
import { quizData, QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-inheritance',
  templateUrl: './quiz-inheritance.component.html',
  styleUrl: './quiz-inheritance.component.scss'
})
export class QuizInheritanceComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Inheritance Quiz | Objectiva');
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
    this.quizService.getInheritanceQuizzes().subscribe({
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

      this.quizService.getCurrentScore('inheritance').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('inheritance', this.score, this.quizData.length)
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
      case 1: feedback = 'You have no real understanding of inheritance. Start by learning what it is and why it matters in OOP.'; break;
      case 2: feedback = 'You might have heard of inheritance, but you don’t understand how it works. Study how child classes extend parent classes.'; break;
      case 3: feedback = 'Your understanding is extremely weak. Focus on how inheritance reduces code duplication while maintaining structure.'; break;
      case 4: feedback = 'You barely grasp inheritance. Try creating a basic class hierarchy with a superclass and subclasses.'; break;
      case 5: feedback = 'You have a vague idea, but you need to apply it. Implement simple inheritance in Java to solidify your understanding.'; break;
      case 6: feedback = 'You understand the basics, but your application is lacking. Experiment with method overriding and constructor inheritance.'; break;
      case 7: feedback = 'You’re improving, but are you considering when NOT to use inheritance? Overusing it can lead to unnecessary complexity.'; break;
      case 8: feedback = 'Your knowledge is still shallow. Focus on how inheritance interacts with encapsulation and polymorphism.'; break;
      case 9: feedback = 'You get the concept, but applying it effectively is a different challenge. Work on designing flexible class hierarchies.'; break;
      case 10: feedback = 'Good job, but be careful. Blindly using inheritance can create rigid code. Learn about composition as an alternative.'; break;
      case 11: feedback = 'You are getting better. Now, refine your understanding by learning when to use inheritance versus interfaces.'; break;
      case 12: feedback = 'You know how inheritance works, but are you applying best practices? Avoid deep inheritance chains.'; break;
      case 13: feedback = 'You have a decent grasp. Start analyzing real-world problems where inheritance is either useful or a bad choice.'; break;
      case 14: feedback = 'Solid understanding! Challenge yourself by working with abstract classes and method overriding.'; break;
      case 15: feedback = 'You are above average! Now, focus on avoiding common pitfalls like unnecessary subclassing.'; break;
      case 16: feedback = 'Your skills are strong, but do you fully understand multiple inheritance problems and how Java avoids them?'; break;
      case 17: feedback = 'You are on the right track! Test your skills by designing an application that balances inheritance with composition.'; break;
      case 18: feedback = 'Your understanding is deep. Now, analyze how Java’s standard libraries make use of inheritance effectively.'; break;
      case 19: feedback = 'You’re doing great! Work on designing flexible hierarchies that minimize code duplication and maximize reusability.'; break;
      case 20: feedback = 'You have a strong grasp of inheritance. Now, consider how it affects maintainability in large codebases.'; break;
      case 21: feedback = 'Your inheritance skills are impressive. Start looking at how design patterns like Factory and Template use inheritance.'; break;
      case 22: feedback = 'Exceptional work! Explore how Java frameworks like Spring utilize inheritance effectively.'; break;
      case 23: feedback = 'Outstanding knowledge, but remember—inheritance is not always the best solution. Question its use in every design.'; break;
      case 24: feedback = 'Your understanding is near perfect. Teach others and explore how inheritance affects performance and memory usage.'; break;
      case 25: feedback = 'Perfect score! But even experts make mistakes. Keep refining your ability to balance inheritance with other OOP principles.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
