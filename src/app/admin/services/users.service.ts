import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://127.0.0.1:8000/api'; // Adjust this to your API URL
  constructor(private http: HttpClient) { }
  private apiUrl = environment.adminUserUrl;
  addUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData
    );
  }
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}

  