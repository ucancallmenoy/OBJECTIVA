import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-abstraction',
  templateUrl: './quiz-abstraction.component.html',
  styleUrl: './quiz-abstraction.component.scss'
})
export class QuizAbstractionComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Abstraction Quiz | Objectiva');
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
    this.quizService.getAbstractionQuizzes().subscribe({
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

      this.quizService.getCurrentScore('abstraction').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('abstraction', this.score, this.quizData.length)
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
      case 1: feedback = 'You have almost no understanding of abstraction. Start from the basics—learn what abstraction is and why it matters in OOP.'; break;
      case 2: feedback = 'Your grasp of abstraction is extremely weak. You need to study how abstraction helps structure code and hides unnecessary details.'; break;
      case 3: feedback = 'You are struggling with abstraction. Focus on understanding the difference between abstract classes and concrete implementations.'; break;
      case 4: feedback = 'You have a vague idea of abstraction but lack practical knowledge. Start writing simple abstract classes to get hands-on experience.'; break;
      case 5: feedback = 'Your understanding is minimal. Reading theory isn’t enough—try implementing abstraction in small projects.'; break;
      case 6: feedback = 'You are starting to grasp the concept, but you need more practice. Analyze real-world examples of abstraction in Java.'; break;
      case 7: feedback = 'You have some basic knowledge, but it’s not solid. Go beyond definitions—apply abstraction in real coding problems.'; break;
      case 8: feedback = 'You understand some key points but may be relying too much on memorization rather than practical application.'; break;
      case 9: feedback = 'You have an average understanding. Focus on refining your ability to use abstraction effectively in design patterns.'; break;
      case 10: feedback = 'Your knowledge is decent, but you likely lack experience implementing abstraction in real-world applications.'; break;
      case 11: feedback = 'You are on the right track, but you need to work on recognizing when abstraction should and should not be used.'; break;
      case 12: feedback = 'You have a good grasp of abstraction, but your ability to apply it fluently in projects still needs work.'; break;
      case 13: feedback = 'You understand abstraction well, but ensure you are not overusing it where it’s unnecessary.'; break;
      case 14: feedback = 'You are above average in abstraction. Challenge yourself by working on larger projects that require better software architecture.'; break;
      case 15: feedback = 'You are progressing well. Now focus on improving your decision-making on when to use abstraction vs. other OOP principles.'; break;
      case 16: feedback = 'You are getting quite good, but your abstraction implementations may still lack optimization. Aim for cleaner, more efficient designs.'; break;
      case 17: feedback = 'You have a solid grasp, but ensure that your abstraction doesn’t lead to unnecessary complexity.'; break;
      case 18: feedback = 'You are highly competent with abstraction. Now, focus on writing abstraction that improves scalability and maintainability.'; break;
      case 19: feedback = 'Your understanding is strong, but test whether your abstractions make real-world code easier to manage, not just more abstract.'; break;
      case 20: feedback = 'You are very skilled at abstraction, but are you applying it efficiently? Over-abstracting can make code harder to read.'; break;
      case 21: feedback = 'You have impressive abstraction skills. Now, work on optimizing your implementations for performance and readability.'; break;
      case 22: feedback = 'Your understanding of abstraction is exceptional. Now, start mentoring others or contributing to open-source projects to refine your expertise.'; break;
      case 23: feedback = 'You are an abstraction expert, but don’t stop learning. The best developers constantly improve and refine their code.'; break;
      case 24: feedback = 'Your abstraction skills are outstanding. Push yourself further by studying complex design patterns and software architecture.'; break;
      case 25: feedback = 'Perfect score! But be cautious—nobody is truly perfect. Keep challenging yourself to write even better, more maintainable code.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}

