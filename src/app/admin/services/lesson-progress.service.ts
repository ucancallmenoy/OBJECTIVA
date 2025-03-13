import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

// Interface for individual lesson progress
interface LessonProgress {
  completed: boolean;
  last_section?: number;
  updated_at?: string;
}

// Interface for completion statistics
interface CompletionStats {
  [lessonId: string]: number;
}

// Interface for completion dates
interface CompletionDates {
  [lessonId: string]: string;
}

// Combined response interfaces
interface AdminProgressResponse {
  success: boolean;
  data: {
    counts: CompletionStats;
    dates: CompletionDates;
  };
}

interface UserProgressResponse {
  success: boolean;
  data: {
    [lessonId: string]: LessonProgress;
  };
}
interface ProgressResponse {
  success: boolean;
  data: {
    progress: {
      [lessonId: string]: LessonProgress;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLessonProgress(userId: number): Observable<ProgressResponse> {
    return this.http.get<ProgressResponse>(`${this.apiUrl}/lesson-progress-admin`, {
      params: { user_id: userId.toString() }
    });
  }

  updateLessonProgress(userId: number, lessonId: number, completed: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/lesson-progress-admin`, {
      user_id: userId,
      lesson_id: lessonId,
      completed
    });
  }

  getAllUsersProgress(fromDate?: string, toDate?: string): Observable<{counts: CompletionStats, dates: CompletionDates}> {
    let params = new HttpParams();
    
    if (fromDate) {
      params = params.set('from_date', fromDate);
    }
    
    if (toDate) {
      params = params.set('to_date', toDate);
    }
    
    return this.http.get<AdminProgressResponse>(`${this.apiUrl}/lesson-progress-admin`, { params })
      .pipe(
        map(response => {
          if (!response.success) {
            throw new Error('Failed to fetch lesson progress');
          }
          return response.data;
        })
      );
  }
}