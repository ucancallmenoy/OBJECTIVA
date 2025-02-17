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
    this.quizService.getQuizzes('inheritance').subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(
          data.filter((quiz: any) => quiz.category === 'inheritance'), // Filter for abstraction category
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
    this.quizService.getCurrentScore('inheritance').subscribe({
      next: (currentScore) => {
        if (currentScore === null || this.score > currentScore) {
          this.quizService.saveScore('inheritance', this.score, this.quizData.length)
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

      this.quizService.getCurrentScore('inheritance').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('inheritance', this.score, this.quizData.length)
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
      case 1: feedback = 'Great effort in starting your journey! Inheritance is an important concept, so begin by understanding its basic purpose and how it helps organize code more effectively.'; break;
      case 2: feedback = 'You’re taking the first steps! Keep exploring how structuring code through relationships improves reusability and maintainability.'; break;
      case 3: feedback = 'You are making progress! Try breaking down key ideas into smaller parts and recognizing how they contribute to better software design.'; break;
      case 4: feedback = 'You have a basic grasp, which is a great start! Now, focus on reinforcing your knowledge by working through simple examples and understanding their purpose.'; break;
      case 5: feedback = 'Good effort! Your understanding is growing. Applying these concepts in practical exercises will help you solidify your knowledge and gain confidence.'; break;
      case 6: feedback = 'Nice progress! You’re beginning to see how different elements connect. Continue practicing and analyzing real-world examples to strengthen your comprehension.'; break;
      case 7: feedback = 'You’re on the right track! Keep experimenting with different approaches to inheritance and observe how they impact code organization and efficiency.'; break;
      case 8: feedback = 'Well done! You have a good foundation. Now, focus on applying these ideas more fluently in different coding challenges and projects.'; break;
      case 9: feedback = 'Your understanding is getting stronger! Try refining how you use these principles in different situations to improve flexibility and clarity in your code.'; break;
      case 10: feedback = 'Good job! You have a solid grasp of the essentials. Now, work on bridging the gap between theory and real-world applications to strengthen your expertise.'; break;
      case 11: feedback = 'You’re progressing well! Continue refining your approach and applying your knowledge to more advanced problem-solving situations.'; break;
      case 12: feedback = 'Great work! You have a well-rounded understanding. Keep expanding your knowledge by taking on new challenges and refining your approach.'; break;
      case 13: feedback = 'Strong progress! You understand key principles well. Now, focus on improving efficiency and adaptability in different programming scenarios.'; break;
      case 14: feedback = 'You’re doing great! Expanding your knowledge and practicing more complex implementations will help you further enhance your skills.'; break;
      case 15: feedback = 'Impressive progress! You are developing strong decision-making skills. Keep refining how you apply your knowledge in different contexts.'; break;
      case 16: feedback = 'Your skills are advancing well! Now, focus on improving efficiency, readability, and overall structure in your code to make it more effective.'; break;
      case 17: feedback = 'You have a solid grasp! Keep fine-tuning your approach to ensure clarity, adaptability, and practicality in different coding challenges.'; break;
      case 18: feedback = 'Excellent work! Start considering how to apply your knowledge in more complex projects. Challenging yourself will push your skills even further.'; break;
      case 19: feedback = 'Great expertise! Continue testing your understanding by working on real-world applications and refining your problem-solving techniques.'; break;
      case 20: feedback = 'Impressive skills! Keep focusing on writing clean and maintainable code to ensure efficiency and long-term scalability.'; break;
      case 21: feedback = 'Outstanding! Your skills are well-developed. Now, focus on optimizing your approach for better clarity, maintainability, and performance.'; break;
      case 22: feedback = 'Exceptional work! You’ve reached a high level of understanding. Consider mentoring others or contributing to projects to further refine your expertise.'; break;
      case 23: feedback = 'You’re highly skilled! Keep pushing yourself by exploring new approaches and applying your knowledge to more challenging scenarios.'; break;
      case 24: feedback = 'Remarkable mastery! Continue refining your approach by studying advanced techniques and best practices to keep improving.'; break;
      case 25: feedback = 'Perfect score! You have demonstrated an exceptional understanding. Keep your curiosity alive and continue growing—there’s always more to explore!'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  
    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
