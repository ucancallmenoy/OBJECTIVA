import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';

interface QuizItem {
  id: string;
  title: string;
  description: string;
  score?: number;
  totalQuestions: number;
  url: string;
}
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent implements OnInit{
  
quizzes: QuizItem[] = [
    {
      id: 'introduction-oop',
      title: 'Introduction to OOP',
      description: 'Test your knowledge of OOP fundamentals.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-introduction-oop'
    },
    {
      id: 'introduction-java',
      title: 'Introduction to Java',
      description: 'Understand Java basics and concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-introduction-java'
    },
    {
      id: 'abstraction',
      title: 'Abstraction',
      description: 'Understand Java basics and concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-abstraction'
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation',
      description: 'Understand Java basics and concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-encapsulation'
    },
    {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'Understand Java basics and concepts.',
      totalQuestions: 25,
      url: '/quiz-topics/quiz-inheritance'
    },
    {
      id: 'polymorphism',
      title: 'Polymorphism',
      description: 'Understand Java basics and concepts.',
      totalQuestions: 20,
      url: '/quiz-topics/quiz-polymorphism'
    }
    // Add other quizzes here
  ];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadScores();
  }

  startQuiz(quizId: string): void {
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (quiz) {
      window.location.href = quiz.url; // Navigate to the quiz URL
    }
  }

  loadScores() {
    this.quizService.getScores().subscribe({
      next: (response) => {
        // Update quiz scores from the response
        this.quizzes = this.quizzes.map(quiz => ({
          ...quiz,
          score: response.data[quiz.id]?.score
        }));
      },
      error: (error) => {
        console.error('Error loading scores:', error);
      }
    });
  }
}
