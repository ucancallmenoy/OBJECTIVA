import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

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

  // START
  minutes: number = 20;
  seconds: number = 0;
  timer: any;
  // END

  showExplanation = false;
  isAnswerCorrect = false;
  hasSubmitted = false;
  loading = true;  // Tracks loading state

  higher: string = '';
  feedback: string = '';
  showFeedback = true; // NEW

  ngOnInit(): void {
    this.quizService.getQuizzes('abstraction').subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(
          data.filter((quiz: any) => quiz.category === 'abstraction'), // Filter for abstraction category
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
    this.quizService.getCurrentScore('abstraction').subscribe({
      next: (currentScore) => {
        if (currentScore === null || this.score > currentScore) {
          this.quizService.saveScore('abstraction', this.score, this.quizData.length)
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

      this.quizService.getCurrentScore('abstraction').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('abstraction', this.score, this.quizData.length)
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
      case 1: feedback = 'Every expert starts somewhere! Your understanding is still developing, but don’t be discouraged. Focus on grasping the core concepts step by step, and over time, you’ll build a strong foundation.';  break;
      case 2: feedback = 'You’re taking the first steps, which is great! Keep exploring the basics and try to understand how different ideas connect. Consistency and curiosity will help you progress steadily.';   break;
      case 3: feedback = 'You’re making an effort, and that’s important! Try to break down complex concepts into simpler parts to strengthen your understanding. Revisiting the fundamentals can be very helpful!';   break;
      case 4: feedback = 'You have a basic grasp, and that’s a great start! Now, focus on reinforcing your knowledge by working through examples and small exercises. The more you practice, the more confident you’ll become.';  break;
      case 5: feedback = 'Good effort! Your understanding is growing, but applying what you know in different situations will help solidify your learning. Try experimenting with hands-on practice to build confidence.';  break;
      case 6: feedback = 'Nice progress! You’re starting to see how everything connects. Continue working on real-world applications and analyzing different examples to deepen your comprehension.';  break;
      case 7: feedback = 'You’re building a solid foundation! Now, challenge yourself with practical exercises and problem-solving tasks to enhance your skills and make your understanding more flexible.'; break; 
      case 8: feedback = 'Well done! You’re getting comfortable with the ideas, but applying them in different scenarios will make your understanding more complete. Keep practicing and exploring new approaches!';  break; 
      case 9: feedback = 'Your understanding is growing stronger! Try refining how you apply these concepts in different situations, and focus on making your thought process more structured and effective.';  break; 
      case 10: feedback = 'Good job! You have a solid grasp of the essentials. Now, focus on bridging the gap between theory and real-world applications to strengthen your expertise.';  break; 
      case 11: feedback = 'You’re on the right track! Keep questioning and refining how you use these ideas. Looking at different examples and perspectives will help reinforce your learning.';  break; 
      case 12: feedback = 'Great work! You’re developing a well-rounded understanding. Continue building on this by taking on new challenges and seeking ways to improve your approach.';  break; 
      case 13: feedback = 'Strong progress! You have a good grasp of the concepts, but make sure to balance depth and simplicity in how you apply them. Keep refining your approach!';  break; 
      case 14: feedback = 'You’re doing great! Expanding your knowledge by applying it in broader contexts will help you gain an even deeper understanding and stronger problem-solving skills.';  break; 
      case 15: feedback = 'Impressive progress! You are developing strong decision-making skills. Keep refining how you apply your knowledge to different challenges and scenarios.';  break; 
      case 16: feedback = 'Your skills are advancing well! Now, focus on improving efficiency and clarity in how you approach problems. Continue challenging yourself to refine your expertise.';  break; 
      case 17: feedback = 'You have a solid grasp! Keep fine-tuning your approach to ensure clarity, effectiveness, and adaptability in different situations.';  break; 
      case 18: feedback = 'Excellent work! Start considering how to apply your knowledge in more complex scenarios. Exploring new challenges will help you push your skills even further.';  break; 
      case 19: feedback = 'Great expertise! Continue testing your understanding by applying it in more challenging projects and refining your problem-solving techniques.';  break; 
      case 20: feedback = 'Impressive skills! Keep refining your approach to ensure your understanding remains practical, efficient, and easy to apply in real-world situations.';  break; 
      case 21: feedback = 'Outstanding! You have strong skills, and now it’s time to focus on optimizing your approach for better clarity, performance, and scalability.';  break; 
      case 22: feedback = 'Exceptional work! You’ve reached a high level of understanding. Consider mentoring others or contributing to projects where you can apply and further refine your expertise.';  break; 
      case 23: feedback = 'You’re highly skilled! Keep pushing yourself by exploring new methods and refining how you apply your knowledge to different situations.';  break; 
      case 24: feedback = 'Remarkable mastery! Continue challenging yourself with advanced concepts and innovative approaches to keep growing as a problem solver.';  break; 
      case 25: feedback = 'Perfect score! You’ve demonstrated an exceptional level of understanding. Keep your curiosity alive and continue improving—there’s always more to explore and refine!';  break; 
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}

