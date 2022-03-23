import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces/post';

const baseUrl = environment.apiURL;

@Injectable()

export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<IPost[]>(`${baseUrl}/posts`)
  }

  getRecentPosts(){
    return this.http.get<IPost[]>(`${baseUrl}/posts?limit=5`)
  }
  
}
