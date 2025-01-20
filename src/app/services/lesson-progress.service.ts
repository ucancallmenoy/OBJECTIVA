import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  updateProgress(lessonId: string, completed: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/lesson-progress`, {
      lesson_id: lessonId,
      completed
    }, { headers: this.getHeaders() });
  }

  getProgress(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lesson-progress`, { 
      headers: this.getHeaders() 
    });
  }
}