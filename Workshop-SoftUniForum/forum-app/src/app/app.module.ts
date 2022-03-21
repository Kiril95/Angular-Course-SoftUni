import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    ThemesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
