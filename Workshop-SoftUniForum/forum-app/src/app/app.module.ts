import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    ThemesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
