import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getCurrentScore(quizId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/quiz-scores/${quizId}`, {
      headers: this.getHeaders(),
    });
  }

  getScores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quiz-scores`, {
      headers: this.getHeaders(),
    });
  }


  saveScore(quizId: string, score: number, totalQuestions: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/quiz-scores`, {
      quiz_id: quizId,
      score: score,
      total_questions: totalQuestions
    }, { headers: this.getHeaders() });
  }
}
