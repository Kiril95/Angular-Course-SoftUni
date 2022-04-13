import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from './injections';
import { IUser } from '../interfaces';

const baseUrl = environment.apiURL;

@Injectable()

export class UserService {

  user: IUser | undefined;

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage'], private http: HttpClient) { 
    try {
      const currentUser = this.localStorage.getItem('<USER>') || 'Error';
      this.user = JSON.parse(currentUser);
    } catch {
      this.user = undefined;
    }

  }
  
  get isLogged(): boolean {
    return !!this.user;
  }

  register(data: { username: string, email: string, phone: string, password: string } ){


  }

}
