import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITheme } from 'src/app/interfaces';
import { ThemesService } from 'src/app/services/themes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.sass']
})
export class ThemeContentComponent implements OnInit {
  isLogged: boolean = this.userService.isLogged;
  canSubscribe: boolean = false;
  userId = this.userService.user?._id as string | undefined;

  @Input() theme!: ITheme;

  constructor(
    private themeService: ThemesService,
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
      }
    });
  }

  subscribeThemeWithActivatedId() {
    const { themeId } = this.route.snapshot.params;

    this.themeService.sendSubscription(themeId).subscribe(() => {
      this.refreshView(themeId);
    });
  }

  refreshView(themeId: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/themes', themeId]);
  }
}
