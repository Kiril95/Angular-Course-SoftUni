import { Component, Input, OnChanges } from '@angular/core';
import { ITheme } from 'src/app/interfaces';
import { ThemesService } from 'src/app/services/themes.service';
import { UserService } from 'src/app/services/user.service';
import { ThemeContentComponent } from './../theme-content/theme-content.component';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.sass']
})
export class ThemeItemComponent implements OnChanges {
  isLogged: boolean = this.userService.isLogged;
  canSubscribe: boolean = false;
  userId = this.userService.user?._id as string | undefined;

  @Input() theme!: ITheme;

  constructor(
    private userService: UserService, 
    private themeService: ThemesService,
    private themeContent: ThemeContentComponent) { }

  ngOnChanges(): void {
    if (this.userId) {
      this.canSubscribe = !this.theme?.subscribers.includes(this.userId);
    }
  }

  subscribeThemeWithParameter(theme: ITheme) {
    this.themeService.sendSubscription(theme._id).subscribe(() => {
      this.themeContent.refreshView(theme._id);
    });
  }
}
