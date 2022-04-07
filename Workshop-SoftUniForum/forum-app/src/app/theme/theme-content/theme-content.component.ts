import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/interfaces';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.sass']
})
export class ThemeContentComponent {
  theme!: ITheme;

  constructor(private themeService: ThemesService, private route: ActivatedRoute) {
    this.loadTheme();
  }

  loadTheme(): void {
    const { themeId } = this.route.snapshot.params;
    //this.themeService.getThemeById(themeId).subscribe(data =>  {console.log(data)});

    this.themeService.getThemeById(themeId).subscribe(targetTheme => this.theme = targetTheme);
  }

}
