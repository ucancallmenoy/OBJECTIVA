import { Component, OnInit } from '@angular/core';

interface QuizData {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}
@Component({
  selector: 'app-quiz-abstraction',
  templateUrl: './quiz-abstraction.component.html',
  styleUrl: './quiz-abstraction.component.scss'
})
export class QuizAbstractionComponent implements OnInit{
  quizData: QuizData[] = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborghinis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ];

  currentQuiz = 0;
  score = 0;
  showScore = false;
  selectedAnswer: string | null = null; // Tracks the selected answer
  answerOptions: { id: string; text: string }[] = [];

  ngOnInit(): void {
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.selectedAnswer = null; // Reset the selected answer
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
      // Check if the selected answer is correct
      if (this.selectedAnswer === this.quizData[this.currentQuiz].correct) {
        this.score++;
      }

      // Move to the next question or display the score
      this.currentQuiz++;
      if (this.currentQuiz < this.quizData.length) {
        this.loadQuiz();
      } else {
        this.showScore = true;
      }
    } else {
      alert('Please select an answer!');
    }
  }

  resetQuiz(): void {
    this.currentQuiz = 0;
    this.score = 0;
    this.showScore = false;
    this.loadQuiz();
  }
}
