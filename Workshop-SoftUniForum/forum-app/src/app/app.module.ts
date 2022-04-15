import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { PostsService } from './services/posts.service';
import { ThemesService } from './services/themes.service';
import { ThemeModule } from './theme/theme.module';
import { UserService } from './services/user.service';
import { LocalStorage } from './services/injections';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

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
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    //   useClass: AuthInterceptor
    // },
    // {
    //   provide: LocalStorage,
    //   useValue: window.localStorage,
    //   useFactory: (platformId: Object) => {
    //     if(isPlatformBrowser(platformId)) {
    //       return window.localStorage;
    //     } 
    //     if(isPlatformServer(platformId)) {
    //       return class implements Storage{
    //         length = 0;
    //         private data: Record<string, string> = {}
    //         clear(): void {
    //           this.data = {};
    //         }
    //         getItem(key: string): string | null {
    //           return this.data[key]
    //         }
    //         key(index: number): string | null {
    //           throw new Error('Method not implemented.');
    //         }
    //         removeItem(key: string): void {
    //           const { [key]: removedItem, ...others } = this.data;
    //           this.data = others;
    //         }
    //         setItem(key: string, value: string): void {
    //           this.data[key] = value;
    //         }
    //       }
    //     }
    //     throw new Error('Not implemented')
    //   },
    //   deps: [PLATFORM_ID]
    // },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
