import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost, ITheme } from 'src/app/interfaces';
import { ThemesService } from 'src/app/services/themes.service';
import { UserService } from 'src/app/services/user.service';
import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.sass']
})
export class ThemeContentComponent implements OnInit {
  isLogged: boolean = this.userService.isLogged;
  canSubscribe: boolean = false;
  userOperations: boolean = false;
  userId = this.userService.user?._id as string | undefined;

  theme!: ITheme;

  constructor(
    private themeService: ThemesService,
    private postService: PostsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme(): void {
    const { themeId } = this.route.snapshot.params;

    this.themeService.getThemeById(themeId).subscribe(targetTheme => {
      this.theme = targetTheme;
      
      if (this.userId) {
        this.canSubscribe = !this.theme?.subscribers.includes(this.userId);

        Object.values(targetTheme.posts).forEach(data => {
          if (data.userId._id === this.userId) {
            this.userOperations = true;
          }
        })
      }
    });
  }

  canLike(comment: IPost) {
    if (this.userId) {
      return !comment.likes.includes(this.userId);
    }

    return null;
  }

  likeComment(comment: IPost) {
    this.postService.sendLike(comment._id).subscribe(() => {
      this.router.navigate([`/themes`]);
    });
  }

  deleteComment(comment: IPost) {
    console.log(comment);
    const themeId = comment.themeId;
    const postId = comment._id;
    
    // TO DO :)
    // this.postService.deleteItem(comment._id).subscribe(() => {  
    //   this.router.navigate([`/themes`]);
    // });
  }

  subscribeThemeWithActivatedId() {
    const { themeId } = this.route.snapshot.params;

    this.themeService.sendSubscription(themeId).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }
  
}
