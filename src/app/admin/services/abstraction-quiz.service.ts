import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AbstractionQuizService {
  private apiUrl = environment.abstractionQuiz;

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addQuiz(quizData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, quizData);
  }

  updateQuiz(id: number, quizData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, quizData);
  }

  deleteQuiz(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
