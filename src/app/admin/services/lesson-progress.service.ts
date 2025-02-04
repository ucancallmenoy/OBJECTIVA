import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private apiUrl = environment.baseUrl; // Update this to your backend server URL

  constructor(private http: HttpClient) {}

  getLessonProgress(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/lesson-progress`, { params: { user_id: userId.toString() } });
  }

  updateLessonProgress(userId: number, lessonId: number, completed: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/lesson-progress`, { user_id: userId, lesson_id: lessonId, completed });
  }
}
