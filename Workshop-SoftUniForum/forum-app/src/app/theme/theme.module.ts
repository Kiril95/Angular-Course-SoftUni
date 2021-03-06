import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { CoreModule } from '../core/core.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemesService } from '../services/themes.service';
import { PostsService } from '../services/posts.service';
import { FormsModule } from '@angular/forms';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeCommentsComponent } from './theme-comments/theme-comments.component';


@NgModule({
  declarations: [
    ThemesComponent,
    ThemeItemComponent,
    CreateThemeComponent,
    ThemeContentComponent,
    ThemeCommentsComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    CoreModule,
    ThemeRoutingModule,
    FormsModule
  ],
  providers: [
    ThemesService,
    PostsService,
    ThemeContentComponent
  ],
})
export class ThemeModule { }
