import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  posts: IPost[] | undefined;

  constructor(private service: PostsService) { 
    this.loadPosts();
  }

  loadPosts(): void{
    this.posts = undefined;
    this.service.getPosts().subscribe(post => this.posts = post);
  }
}
