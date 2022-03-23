import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  posts: IPost[] | undefined;

  constructor(private service: PostsService, private router: Router) { 
    this.loadPosts();
  }

  ngOnInit() {
    this.router.navigate(['']); // Redirect on page refresh
  }

  loadPosts(): void{
    this.posts = undefined;
    this.service.getRecentPosts().subscribe(post => this.posts = post);
  }
}
