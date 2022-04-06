import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { CoreModule } from '../core/core.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';


@NgModule({
  declarations: [
    ThemesComponent,
    CreateThemeComponent,
    ThemeContentComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MatProgressBarModule,
    HttpClientModule,
    CoreModule
  ]
})
export class ThemeModule { }
