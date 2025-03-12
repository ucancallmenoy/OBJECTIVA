import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private lessonProgressUrl = environment.lessonProgressUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  updateProgress(lessonId: string, completed: boolean, lastSection?: number): Observable<any> {
    const payload: any = {
      lesson_id: lessonId,
      completed
    };
    
    // Only add last_section if provided
    if (lastSection !== undefined) {
      payload.last_section = lastSection;
    }
    
    return this.http.post(this.lessonProgressUrl, payload, { 
      headers: this.getHeaders() 
    });
  }

  getProgress(): Observable<any> {
    return this.http.get(this.lessonProgressUrl, { 
      headers: this.getHeaders() 
    });
  }
}