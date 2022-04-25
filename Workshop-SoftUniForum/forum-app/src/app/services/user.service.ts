import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces';
import { catchError, EMPTY, tap } from 'rxjs';

const baseUrl = environment.apiURL;

@Injectable()

export class UserService {
  user: IUser | null | undefined = undefined;

  constructor(private http: HttpClient) { }
   
  get isLogged(): boolean {
    return !!this.user;
  }

  registerUser(data: { username: string, email: string, password: string, tel: string }) {
    return this.http.post<IUser>(`${baseUrl}/register`, data, { withCredentials: true })
    .pipe(tap(currUser => this.user = currUser));
  }

  loginUser(data: { email: string, password: string }) {
    return this.http.post<IUser>(`${baseUrl}/login`, data, { withCredentials: true })
    .pipe(tap(currUser => this.user = currUser));
  }

  logoutUser() {
    return this.http.post<IUser>(`${baseUrl}/logout`, {}, { withCredentials: true })
    .pipe(tap(() => this.user = null));
  }

  getUserProfile() {
    return this.http.get<IUser>(`${baseUrl}/users/profile`, { withCredentials: true })
    .pipe(tap(currUser => this.user = currUser),
    catchError((err) => {
      return EMPTY;
    }))
  }

  updateProfile(data: { username: string, email: string, tel: string }) {
    return this.http.put<IUser>(`${baseUrl}/users/profile`, data, { withCredentials: true })
    .pipe(tap(currUser => this.user = currUser));
  }
}
