import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

interface CompletionStats {
  [lessonId: string]: number;
}

interface ProgressResponse {
  success: boolean;
  data: CompletionStats;
}

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLessonProgress(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/lesson-progress-admin`, { params: { user_id: userId.toString() } });
  }

  updateLessonProgress(userId: number, lessonId: number, completed: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/lesson-progress-admin`, { user_id: userId, lesson_id: lessonId, completed });
  }

  getAllUsersProgress(): Observable<CompletionStats> {
    return this.http.get<ProgressResponse>(`${this.apiUrl}/lesson-progress-admin`).pipe(
      map(response => {
        if (!response.success) {
          throw new Error('Failed to fetch lesson progress');
        }
        return response.data;
      })
    );
  }
}