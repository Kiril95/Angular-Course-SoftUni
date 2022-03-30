import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThemesService } from './../services/themes.service';
import { ITheme } from './../interfaces/theme';
import { IPost } from '../interfaces';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.sass']
})
export class ThemesComponent{
  themes: ITheme[] | undefined;
  posts: IPost[] | undefined;

  constructor(private themeService: ThemesService, private postService: PostsService, private router: Router) { 
    this.loadThemes();
    this.loadPosts();
  }

  loadThemes(): void{
    this.themes = undefined;
    this.themeService.getThemes().subscribe(theme => this.themes = theme);
  }

  loadPosts(): void{
    this.posts = undefined;
    this.postService.getRecentPosts().subscribe(post => this.posts = post);
  }
}
