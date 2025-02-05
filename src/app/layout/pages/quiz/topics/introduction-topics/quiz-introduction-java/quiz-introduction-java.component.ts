import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-quiz-introduction-java',
  templateUrl: './quiz-introduction-java.component.html',
  styleUrl: './quiz-introduction-java.component.scss'
})
export class QuizIntroductionJavaComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Introduciton to Java Quiz | Objectiva');
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
    this.quizService.getIntroductionToJavaQuizzes().subscribe({
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

      this.quizService.getCurrentScore('introduction-java').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('introduction-java', this.score, this.quizData.length)
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
      case 1: feedback = 'You don’t know Java at all. Start by learning basic syntax, data types, and how Java code runs.'; break;
      case 2: feedback = 'You’ve heard of Java, but your knowledge is nearly nonexistent. Write simple programs to get familiar with it.'; break;
      case 3: feedback = 'Your understanding is weak. Learn about variables, loops, and methods before jumping into complex topics.'; break;
      case 4: feedback = 'You grasp some basics but struggle with implementation. Focus on hands-on coding instead of just theory.'; break;
      case 5: feedback = 'You understand basic concepts, but your coding skills need serious improvement. Write more small programs.'; break;
      case 6: feedback = 'You are making progress but lack confidence. Work on basic Java programs, debugging, and logical problem-solving.'; break;
      case 7: feedback = 'You understand simple Java syntax, but do you know how to apply it? Solve coding exercises to reinforce learning.'; break;
      case 8: feedback = 'Your basics are there, but your problem-solving is weak. Work on breaking down problems into smaller steps.'; break;
      case 9: feedback = 'You have a fair understanding, but you need to improve your consistency in writing clean and efficient Java code.'; break;
      case 10: feedback = 'Good job! Now focus on understanding Object-Oriented Programming, as Java is built around it.'; break;
      case 11: feedback = 'You’re developing a solid foundation. Now, get comfortable with exception handling and file operations.'; break;
      case 12: feedback = 'Your Java knowledge is growing! Learn how Java handles memory, like stack vs. heap and garbage collection.'; break;
      case 13: feedback = 'You’re on the right track! Start practicing Java collections, generics, and basic algorithms.'; break;
      case 14: feedback = 'Solid grasp! Now, focus on Java’s built-in libraries and how to work with APIs and data structures.'; break;
      case 15: feedback = 'Great progress! Have you started using Java for real-world applications? Try working on small projects.'; break;
      case 16: feedback = 'Your knowledge is strong. Now, challenge yourself by learning multi-threading and concurrency.'; break;
      case 17: feedback = 'You are doing well! Focus on design patterns and best coding practices to improve code quality.'; break;
      case 18: feedback = 'You have a deep understanding of Java basics. Now, explore frameworks like Spring Boot or JavaFX.'; break;
      case 19: feedback = 'Excellent knowledge! Work on optimizing your Java code and understanding performance bottlenecks.'; break;
      case 20: feedback = 'Your Java skills are advanced! Dive into databases, networking, and JVM internals to push your knowledge further.'; break;
      case 21: feedback = 'Your Java skills are impressive! Start contributing to open-source projects or building scalable applications.'; break;
      case 22: feedback = 'Exceptional work! Consider mastering Java-related technologies like Hibernate and Microservices.'; break;
      case 23: feedback = 'Outstanding! You should now focus on enterprise-level Java development and software architecture.'; break;
      case 24: feedback = 'Brilliant understanding! Teach others and refine your expertise by working on complex Java applications.'; break;
      case 25: feedback = 'Perfect score! But Java is constantly evolving—stay updated with new versions and best practices.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
