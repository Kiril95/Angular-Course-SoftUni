import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';
import { ThemeModule } from './theme/theme.module';
import { UserService } from './services/user.service';

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
    PostsService,
    UserService,
    {provide: Window, useValue: {}},
    {
      provide: APP_INITIALIZER,
      useFactory: (userService: UserService) => {
        return () => userService.getUserProfile();
      },
      deps: [UserService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
