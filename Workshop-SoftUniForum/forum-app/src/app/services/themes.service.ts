import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITheme } from '../interfaces/theme';

const baseUrl = environment.apiURL;

@Injectable()

export class ThemesService {
 
  constructor(private http: HttpClient) { }

  getThemes(){
    return this.http.get<ITheme[]>(`${baseUrl}/themes`)
  }

}
