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
    this.title.setTitle('Introduction To OOP Quiz | Objectiva');
  }

  quizData: any[] = [];
  currentQuiz = 0;
  score = 0;
  showScore = false;
  selectedAnswer: string | null = null; // Tracks the selected answer
  answerOptions: { id: string; text: string }[] = [];

  // START
  minutes: number = 20;
  seconds: number = 0;
  timer: any;
  // END

  // NEW
  showExplanation = false;
  isAnswerCorrect = false;
  hasSubmitted = false;
  loading = true;  // Tracks loading state

  higher: string = '';
  feedback: string = '';
  showFeedback = true; // NEW

  ngOnInit(): void {
    this.quizService.getQuizzes('introtooop').subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(
          data.filter((quiz: any) => quiz.category === 'introtooop'), // Filter for abstraction category
          25
        );
        this.loadQuiz();
        this.loading = false;  // Set loading to false once data is loaded
        this.startTimer(); // Start the timer ----------------------
      },
      error: (err) => {
        console.error('Error fetching quizzes:', err);
        this.loading = false;  // Set loading to false in case of error
      }
    });
  }

  // START
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.finishQuiz();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }
  finishQuiz() {
    clearInterval(this.timer);
    this.hasSubmitted = true;
    this.showScore = true;
    this.generateFeedback();
    // Additional logic to calculate the final score if needed
    this.quizService.getCurrentScore('introduction-oop').subscribe({
      next: (currentScore) => {
        if (currentScore === null || this.score > currentScore) {
          this.quizService.saveScore('introduction-oop', this.score, this.quizData.length)
            .subscribe({
              next: (response) => {
                if (currentScore !== null && this.score > currentScore) {
                  this.higher = 'Excellent! Your score is greater than your current score which means you have improved! Keep up the great work and continue striving for excellence!';
                  this.showFeedback = false;
                }
                
                // add chuchu
              },
              error: (error) => console.error('Error saving score:', error)
            });
        }
        // New condition (if the score is less than the current score)
        else if (currentScore !== null && this.score < currentScore) {
          this.higher = 'Your score is lower than your previous score, but every great achiever was once a beginner—learn from it, grow, and keep going! Mistakes are proof you are trying, and every step forward counts. Keep pushing, you got this!';
          this.showFeedback = false;
        }
      },
      error: (error) => console.error('Error fetching current score:', error)
    });
  }
  exitQuiz() {
    clearInterval(this.timer);
    this.router.navigate(['/quiz']);
  }
  // END

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
                    this.higher = 'Excellent! Your score is greater than your current score which means you have improved! Keep up the great work and continue striving for excellence!';
                    this.showFeedback = false;
                  }
                  
                  // add chuchu
                },
                error: (error) => console.error('Error saving score:', error)
              });
          }
          // New condition (if the score is less than the current score)
          else if (currentScore !== null && this.score < currentScore) {
            this.higher = 'Your score is lower than your previous score, but every great achiever was once a beginner—learn from it, grow, and keep going! Mistakes are proof you are trying, and every step forward counts. Keep pushing, you got this!';
            this.showFeedback = false;
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
    this.minutes = 20; // Reset minutes
    this.seconds = 0;  // Reset seconds
    clearInterval(this.timer); // Clear existing timer
    this.startTimer(); // Restart the timer
    this.loadQuiz();
  }

  generateFeedback(): void {
    let feedback: string;

    switch (this.score) {
      case 1: feedback = 'You’re just beginning your OOP journey! Start by understanding its core purpose and how it helps in structuring programs more efficiently.'; break;
      case 2: feedback = 'Great start! Focus on learning the four main principles of OOP: encapsulation, inheritance, polymorphism, and abstraction.'; break;
      case 3: feedback = 'You’re making progress! Try to grasp how objects and classes work together to create reusable and scalable code.'; break;
      case 4: feedback = 'Good effort! Start exploring how OOP helps in organizing code better compared to procedural programming.'; break;
      case 5: feedback = 'Nice work! Strengthen your understanding by working on small examples that demonstrate OOP concepts in action.'; break;
      case 6: feedback = 'You’re getting the hang of it! Try experimenting with basic class and object creation to apply what you’ve learned.'; break;
      case 7: feedback = 'Well done! Keep practicing with different OOP principles and understand how they improve software design.'; break;
      case 8: feedback = 'Great progress! Work on applying OOP concepts in simple projects to reinforce your learning.'; break;
      case 9: feedback = 'You’re on the right track! Strengthen your understanding by looking at real-world applications of OOP.'; break;
      case 10: feedback = 'Nice job! You have a solid foundation. Now, try to analyze how OOP is used in popular programming languages like Java and Python.'; break;
      case 11: feedback = 'You’re advancing well! Keep practicing and refining your knowledge by applying OOP in structured coding projects.'; break;
      case 12: feedback = 'Impressive progress! Start working on real-world problems where OOP can help in creating modular and maintainable code.'; break;
      case 13: feedback = 'You have a strong understanding! Now focus on writing efficient and well-structured OOP-based applications.'; break;
      case 14: feedback = 'Great job! Keep challenging yourself with slightly more complex OOP design patterns and best practices.'; break;
      case 15: feedback = 'You’re developing strong coding habits! Focus on writing clean, reusable, and scalable OOP-based solutions.'; break;
      case 16: feedback = 'You have a solid grasp! Try learning about advanced OOP concepts like composition, dependency injection, and design principles.'; break;
      case 17: feedback = 'Excellent work! Continue strengthening your problem-solving skills by implementing OOP in more structured applications.'; break;
      case 18: feedback = 'Your skills are growing! Start exploring design patterns to improve the efficiency of your OOP implementations.'; break;
      case 19: feedback = 'Fantastic progress! Work on larger projects to see how OOP helps in maintaining and scaling software systems.'; break;
      case 20: feedback = 'You’re highly skilled! Keep refining your OOP knowledge by studying different programming paradigms and when to use OOP effectively.'; break;
      case 21: feedback = 'Outstanding work! Apply your knowledge by mentoring others or contributing to open-source projects with OOP implementations.'; break;
      case 22: feedback = 'You’ve developed a strong mastery of OOP! Keep refining your understanding by analyzing professional-level OOP-based software.'; break;
      case 23: feedback = 'Exceptional progress! Your knowledge is impressive—now, challenge yourself with system architecture and high-level software design.'; break;
      case 24: feedback = 'You’re nearly an expert! Continue pushing your limits by exploring complex OOP implementations in large-scale projects.'; break;
      case 25: feedback = 'Perfect score! Your OOP knowledge is exceptional. Keep evolving, as the best developers continuously refine their skills and adapt to new challenges!'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
