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
    this.title.setTitle('Introduction To Java Quiz | Objectiva');
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
    this.quizService.getQuizzes('introtojava').subscribe({
      next: (data) => {
        this.quizData = this.getRandomQuestions(
          data.filter((quiz: any) => quiz.category === 'introtojava'), // Filter for abstraction category
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
    this.quizService.getCurrentScore('introduction-java').subscribe({
      next: (currentScore) => {
        if (currentScore === null || this.score > currentScore) {
          this.quizService.saveScore('introduction-java', this.score, this.quizData.length)
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

      this.quizService.getCurrentScore('introduction-java').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('introduction-java', this.score, this.quizData.length)
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
      case 1: feedback = 'Great start! Learning Java is an exciting journey. Begin by familiarizing yourself with basic syntax and concepts to build a strong foundation.'; break;
      case 2: feedback = 'You’re taking your first steps! Focus on understanding simple concepts like variables, data types, and basic operations to gain confidence.'; break;
      case 3: feedback = 'You’re making progress! Keep practicing fundamental concepts, and don’t hesitate to experiment with small code snippets to reinforce your learning.'; break;
      case 4: feedback = 'Good effort! Try working on simple Java programs to see how different concepts come together in actual coding practice.'; break;
      case 5: feedback = 'Nice job! You are developing a foundation. Continue learning about key elements such as loops, conditionals, and methods to strengthen your skills.'; break;
      case 6: feedback = 'You’re getting the hang of it! Keep experimenting with Java’s core features, and start working on small challenges to deepen your understanding.'; break;
      case 7: feedback = 'Well done! You have a basic grasp of Java. Now, focus on applying your knowledge through simple programs and exercises.'; break;
      case 8: feedback = 'Great progress! Try working on slightly more complex problems to improve your confidence and coding fluency.'; break;
      case 9: feedback = 'You’re doing well! Strengthen your foundation by practicing problem-solving and understanding how Java programs are structured.'; break;
      case 10: feedback = 'Nice work! You have a solid grasp of the basics. Now, start exploring object-oriented programming to take your skills to the next level.'; break;
      case 11: feedback = 'You’re advancing well! Keep practicing and refining your coding style to improve efficiency and readability in your programs.'; break;
      case 12: feedback = 'Impressive progress! Try working on real-world examples and small projects to enhance your problem-solving skills.'; break;
      case 13: feedback = 'You have a strong foundation! Start diving into more advanced topics like classes, objects, and basic error handling to expand your skills.'; break;
      case 14: feedback = 'Great job! Continue challenging yourself with new projects and coding exercises to further solidify your Java knowledge.'; break;
      case 15: feedback = 'You’re developing strong coding habits! Keep refining your approach and focus on writing clean, efficient, and well-structured code.'; break;
      case 16: feedback = 'You have a solid understanding! Try learning about best practices and design principles to make your code more scalable and maintainable.'; break;
      case 17: feedback = 'Excellent work! Continue strengthening your problem-solving skills by working on more complex coding challenges and applications.'; break;
      case 18: feedback = 'Your skills are growing! Start exploring Java’s libraries and built-in features to improve efficiency in your programs.'; break;
      case 19: feedback = 'Fantastic progress! Apply your knowledge in real-world projects to gain hands-on experience and further enhance your expertise.'; break;
      case 20: feedback = 'You’re highly skilled! Keep challenging yourself by exploring advanced topics such as file handling, collections, and exception handling.'; break;
      case 21: feedback = 'Outstanding work! Continue refining your understanding by optimizing your code and following best practices in Java development.'; break;
      case 22: feedback = 'You’ve developed a strong mastery of Java basics! Consider mentoring others or working on open-source projects to apply your skills further.'; break;
      case 23: feedback = 'Exceptional progress! Your knowledge is impressive—now, challenge yourself with larger projects or algorithm-based problem-solving.'; break;
      case 24: feedback = 'You’re nearly an expert! Keep pushing your boundaries by exploring more advanced Java frameworks and industry best practices.'; break;
      case 25: feedback = 'Perfect score! Your understanding of Java is exceptional. Keep learning and evolving—there’s always more to discover in the world of programming!'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}
