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
    return this.http.get<IPost[]>(`${baseUrl}/posts`, { withCredentials: true });
  }

  getRecentPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${baseUrl}/posts?limit=5`, { withCredentials: true });
  }

  sendLike(id: string): Observable<IPost>{
    return this.http.put<IPost>(`${baseUrl}/likes/${id}`, {}, { withCredentials: true });
  }

  deleteItem(themeId: string, postId: string) {
    return this.http.delete(`${baseUrl}/themes/${themeId}/posts/${postId}`, { withCredentials: true });
  }
  
}
