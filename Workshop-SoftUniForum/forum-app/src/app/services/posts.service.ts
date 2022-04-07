import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces/post';
import { Observable } from 'rxjs';

const baseUrl = environment.apiURL;

@Injectable()

export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${baseUrl}/posts`)
  }

  getRecentPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${baseUrl}/posts?limit=5`)
  }
  
}
