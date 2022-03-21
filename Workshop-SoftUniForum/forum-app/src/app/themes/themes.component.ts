import { Component } from '@angular/core';
import { ThemesService } from './../services/themes.service';
import { ITheme } from './../interfaces/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.sass']
})
export class ThemesComponent{
  themes: ITheme[] | undefined;

  constructor(private service: ThemesService) { 
    this.loadThemes();
  }

  loadThemes(): void{
    this.themes = undefined;
    this.service.getThemes().subscribe(theme => this.themes = theme);
  }
}
