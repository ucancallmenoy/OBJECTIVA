import { Component, OnInit } from '@angular/core';
import { quizData,QuizData } from './quiz-data';
import { Router } from '@angular/router';
import { QuizService } from '../../../../../../services/quiz.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-encapsulation',
  templateUrl: './quiz-encapsulation.component.html',
  styleUrl: './quiz-encapsulation.component.scss'
})
export class QuizEncapsulationComponent implements OnInit{
  constructor(
    private quizService: QuizService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Encapsulation Quiz | Objectiva');
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
    this.quizService.getEncapsulationQuizzes().subscribe({
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

      this.quizService.getCurrentScore('encapsulation').subscribe({
        next: (currentScore) => {
          if (currentScore === null || this.score > currentScore) {
            this.quizService.saveScore('encapsulation', this.score, this.quizData.length)
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
      case 1: feedback = 'You lack a fundamental understanding of encapsulation. Start by learning why we use access modifiers in Java.'; break;
      case 2: feedback = 'Your knowledge of encapsulation is almost nonexistent. Focus on how encapsulation restricts direct access to data fields.'; break;
      case 3: feedback = 'You are struggling with encapsulation. Understand the purpose of getters and setters and when to use them.'; break;
      case 4: feedback = 'You have minimal awareness of encapsulation. Practice defining private fields and public methods in simple classes.'; break;
      case 5: feedback = 'You know the basic definition, but that’s not enough. Experiment with encapsulation to protect object integrity.'; break;
      case 6: feedback = 'You understand some concepts but need hands-on practice. Try modifying existing code to use encapsulation effectively.'; break;
      case 7: feedback = 'You have a basic understanding, but you’re missing the big picture. Learn how encapsulation aids in maintaining code modularity.'; break;
      case 8: feedback = 'Your grasp is superficial. Focus on how encapsulation helps in preventing unauthorized access and modification of data.'; break;
      case 9: feedback = 'You have an average understanding. Deepen your knowledge by exploring how encapsulation supports code reusability and maintenance.'; break;
      case 10: feedback = 'You know the essentials, but real-world application seems lacking. Use encapsulation in more complex scenarios to test your skills.'; break;
      case 11: feedback = 'You are on the right path, but work on recognizing when encapsulation can genuinely simplify your codebase.'; break;
      case 12: feedback = 'You understand encapsulation fairly well, but your implementation might still be inconsistent.'; break;
      case 13: feedback = 'You get the concept, but ensure you aren’t overusing setters, which can violate encapsulation principles.'; break;
      case 14: feedback = 'You are better than most, but challenge yourself by encapsulating complex systems to see its true benefits.'; break;
      case 15: feedback = 'You’re making solid progress. Focus now on maintaining encapsulation while working with inheritance and interfaces.'; break;
      case 16: feedback = 'You are proficient, but ensure your encapsulated classes are genuinely simplifying your code, not complicating it.'; break;
      case 17: feedback = 'Your understanding is robust. Make sure your encapsulation practices are enhancing code security and readability.'; break;
      case 18: feedback = 'You are very skilled, but question whether your encapsulation makes the code easier to maintain and extend.'; break;
      case 19: feedback = 'You’re doing great. Test your skills by designing a multi-class system that heavily relies on encapsulation.'; break;
      case 20: feedback = 'You have excellent knowledge, but are you applying it to its fullest potential in large codebases?'; break;
      case 21: feedback = 'Your encapsulation skills are impressive. Now, mentor others to refine your own understanding further.'; break;
      case 22: feedback = 'Exceptional work! Explore advanced topics like encapsulation in API design and library development.'; break;
      case 23: feedback = 'Outstanding knowledge, but remember—every design decision should be questioned for effectiveness and efficiency.'; break;
      case 24: feedback = 'Your understanding is near perfect. Dive into how encapsulation interacts with other OOP principles like inheritance and polymorphism.'; break;
      case 25: feedback = 'Perfect score! But remember, there is always room for improvement. Keep pushing your limits in complex projects.'; break;
      default: feedback = 'Invalid score. Please check your input.';
  }
  

    this.feedback = feedback;
  }

  backtoQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}

