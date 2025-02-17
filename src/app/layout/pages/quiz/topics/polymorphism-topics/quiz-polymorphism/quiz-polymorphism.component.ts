import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

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
    this.quizService.getQuizzes('polymorphism').subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(
          data.filter((quiz: any) => quiz.category === 'polymorphism'), // Filter for abstraction category
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
    this.quizService.getCurrentScore('encapsulation').subscribe({
      next: (currentScore) => {
        if (currentScore === null || this.score > currentScore) {
          this.quizService.saveScore('encapsulation', this.score, this.quizData.length)
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
      Swal.fire({
        title: 'Are you sure you want to exit?',
        text: "Your progress will not be saved!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, exit'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/quiz']);
        }
      });
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

      this.quizService.getCurrentScore('polymorphism').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('polymorphism', this.score, this.quizData.length)
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
      case 0: feedback = "Getting zero doesn’t mean failure—it means a fresh start with endless room to grow. Learn, improve, and come back stronger!" ; break;
      case 1: feedback = 'You are just getting started with polymorphism! Begin by understanding how it allows flexibility in programming and improves code reusability.'; break;
      case 2: feedback = 'Great start! Focus on learning how polymorphism enables different objects to respond uniquely to the same method call.'; break;
      case 3: feedback = 'You’re making progress! Try to explore the concept of method overriding and how it enhances code adaptability.'; break;
      case 4: feedback = 'Good effort! Start practicing with simple examples to see how polymorphism allows dynamic behavior in programs.'; break;
      case 5: feedback = 'Nice work! Strengthen your understanding by implementing method overloading and overriding in small projects.'; break;
      case 6: feedback = 'You’re getting the hang of it! Try experimenting with polymorphism to see how it improves code efficiency and structure.'; break;
      case 7: feedback = 'Well done! Keep exploring real-world applications of polymorphism to solidify your understanding.'; break;
      case 8: feedback = 'Great progress! Work on implementing polymorphism in object-oriented programs to enhance flexibility and maintainability.'; break;
      case 9: feedback = 'You’re on the right track! Start analyzing how polymorphism simplifies code modifications and reduces redundancy.'; break;
      case 10: feedback = 'Nice job! You have a solid foundation. Now, try understanding how polymorphism plays a role in software design principles.'; break;
      case 11: feedback = 'You’re advancing well! Keep practicing and refining your knowledge by using polymorphism in different programming scenarios.'; break;
      case 12: feedback = 'Impressive progress! Experiment with abstract classes and interfaces to see their role in achieving polymorphism.'; break;
      case 13: feedback = 'You have a strong understanding! Now focus on writing efficient and scalable code that leverages polymorphism effectively.'; break;
      case 14: feedback = 'Great job! Keep challenging yourself with slightly more advanced concepts like dynamic method dispatch.'; break;
      case 15: feedback = 'You’re developing strong coding habits! Focus on designing flexible and reusable code using polymorphism.'; break;
      case 16: feedback = 'You have a solid grasp! Try exploring design patterns where polymorphism plays a crucial role, such as the Strategy pattern.'; break;
      case 17: feedback = 'Excellent work! Continue strengthening your problem-solving skills by applying polymorphism in real-world applications.'; break;
      case 18: feedback = 'Your skills are growing! Study how polymorphism contributes to the SOLID principles, especially the Open/Closed Principle.'; break;
      case 19: feedback = 'Fantastic progress! Work on larger projects to see how polymorphism enhances maintainability and extensibility in software.'; break;
      case 20: feedback = 'You’re highly skilled! Keep refining your knowledge by understanding when and where polymorphism is the best design choice.'; break;
      case 21: feedback = 'Outstanding work! Apply your expertise by mentoring others or contributing to projects that use polymorphism effectively.'; break;
      case 22: feedback = 'You’ve developed a strong mastery of polymorphism! Keep refining your understanding by exploring complex design patterns.'; break;
      case 23: feedback = 'Exceptional progress! Your knowledge is impressive—now, challenge yourself by designing high-level architectures that utilize polymorphism.'; break;
      case 24: feedback = 'You’re nearly an expert! Continue pushing your limits by exploring advanced OOP principles and software scalability strategies.'; break;
      case 25: feedback = 'Perfect score! Your polymorphism skills are exceptional. Keep evolving, as the best developers continuously refine their understanding and adapt to new challenges!'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  
    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}