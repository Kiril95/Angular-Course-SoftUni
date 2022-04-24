import { Component, OnChanges, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { ITheme } from '../../interfaces/theme';
import { IPost } from '../../interfaces';
import { PostsService } from '../../services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.sass']
})
export class ThemesComponent implements OnInit {
  themes: ITheme[] | undefined;
  posts: IPost[] | undefined;
  canSubscribe: boolean = false;

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  constructor(
    private themeService: ThemesService, 
    private postService: PostsService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.loadThemes();
    this.loadPosts();
  }
    
  loadThemes(): void {
    this.themes = undefined;
    this.themeService.getThemes().subscribe(theme => this.themes = theme);
  }

  loadPosts(): void {
    this.posts = undefined;
    this.postService.getRecentPosts().subscribe(post => this.posts = post);
  }

}