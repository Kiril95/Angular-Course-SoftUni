import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';
import { ThemeModule } from './theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    ThemeModule,
    HttpClientModule,
  ],
  providers: [
    ThemesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
