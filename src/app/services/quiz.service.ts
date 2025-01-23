import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ScoreResponse {
  success: boolean;
  data: number | null;
}

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

  getCurrentScore(quizId: string): Observable<number | null> {
    return this.http.get<ScoreResponse>(`${this.apiUrl}/quiz-scores/${quizId}`, {
      headers: this.getHeaders(),
    }).pipe(
      map(response => response.data)
    );
  }

  getScores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quiz-scores`, {
      headers: this.getHeaders(),
    });
  }

  saveScore(topic: string, score: number, totalQuestions: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/quiz-scores`, {
      quiz_id: topic,
      score: score,
      total_questions: totalQuestions
    }, { headers: this.getHeaders() });
  }
}