import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITheme } from '../interfaces/theme';
import { Observable } from 'rxjs';

const baseUrl = environment.apiURL;

@Injectable()

export class ThemesService {
 
  constructor(private http: HttpClient) { }

  getThemes(): Observable<ITheme[]>{
    return this.http.get<ITheme[]>(`${baseUrl}/themes`)
  }

  getThemeById(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(`${baseUrl}/themes/${id}`);
  }

}
