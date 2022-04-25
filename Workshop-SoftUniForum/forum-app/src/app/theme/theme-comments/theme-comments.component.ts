import { Component, OnChanges, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost, ITheme } from 'src/app/interfaces';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theme-comments',
  templateUrl: './theme-comments.component.html',
  styleUrls: ['./theme-comments.component.sass']
})
export class ThemeCommentsComponent implements OnChanges {
  isLogged: boolean = this.userService.isLogged;
  canSubscribe: boolean = false;
  userOperations: boolean = false;
  editMode: boolean = false;
  userId = this.userService.user?._id as string | undefined;
  username: string | undefined = this.userService.user?.username;
  
  @Input() index!: number;
  @Input() post!: IPost;
  @Input() theme!: ITheme;

  constructor(
    private postService: PostsService,
    private userService: UserService,
    private router: Router) { }

  ngOnChanges(): void {
    if (this.userId) {
      this.canSubscribe = !this.theme?.subscribers.includes(this.userId);

      if (this.post.userId._id === this.userId) {
        this.userOperations = true;
      }
    }
  }

  canLike(comment: IPost): boolean | null {
    if (this.userId) {
      return !comment.likes.includes(this.userId);
    }

    return null;
  }

  likeComment(comment: any) {
    this.postService.sendLike(comment._id).subscribe(() => {
      this.refreshView(comment.themeId);
    });
  }

  deleteComment(comment: any) {
    console.log(comment);
    const themeId = comment.themeId;
    const postId = comment._id;

    // TO DO :)
    // this.postService.deleteItem(comment._id).subscribe(() => {  
    //   this.router.navigate([`/themes`]);
    // });
  }

  postComment(editForm: NgForm, comment: any) {
    if (editForm.invalid) {
      return;
    }
    const themeId = comment.themeId;

    this.postService.postItem(editForm.value, themeId).subscribe({
      next: () => {
        this.refreshView(themeId);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  viewComment(comment: IPost): string | undefined {
    this.editMode = true;
    return comment.text;
  }

  editComment(editForm: NgForm, comment: any) {
    if (editForm.invalid) {
      return;
    }
    const themeId = comment.themeId;
    const postId = comment._id;

    this.postService.editItem(editForm.value, themeId, postId).subscribe({
      next: () => {
        this.editMode = false;
        this.refreshView(themeId);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  refreshView(themeId: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/themes', themeId]);
  }
}
