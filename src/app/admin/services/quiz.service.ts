import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private getQuiz = environment.quiz;

  constructor(private http: HttpClient) {}


    getAbstractionQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/abstraction`);
    }

    getPolymorphismQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/polymorphism`);
    }
    getInheritanceQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/inheritance`);
    }
    
    getEncapsulationQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/encapsulation`);
    }
    
    getIntroToJavaQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/introtooop`);
    }
    
    getIntroToOopQuizzes(): Observable<any> {
      return this.http.get<any>(`${this.getQuiz}/introtojava`);
    }

    addQuiz(category: string, quizData: any): Observable<any> {
      return this.http.post<any>(`${this.getQuiz}/${category}`, quizData);
    }
  
    updateQuiz(category: string, id: number, quizData: any): Observable<any> {
      return this.http.put<any>(`${this.getQuiz}/${category}/${id}`, quizData);
    }
  
    deleteQuiz(category: string, id: number): Observable<any> {
      return this.http.delete<any>(`${this.getQuiz}/${category}/${id}`);
    }
}
