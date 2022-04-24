import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITheme, IPost } from '../interfaces';
import { Observable } from 'rxjs';

const baseUrl = environment.apiURL;

@Injectable()

export class ThemesService {
 
  constructor(private http: HttpClient) { }

  getThemes(): Observable<ITheme[]>{
    return this.http.get<ITheme[]>(`${baseUrl}/themes`, { withCredentials: true });
  }

  getThemeById(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(`${baseUrl}/themes/${id}`, { withCredentials: true });
  }

  addTheme(data : { themeName: string, postText: string }): Observable<Object>{
    return this.http.post(`${baseUrl}/themes`, data,  { withCredentials: true });
  }

  sendSubscription(id: string): Observable<ITheme>{
    return this.http.put<ITheme>(`${baseUrl}/themes/${id}`, {}, { withCredentials: true });
  }
}
