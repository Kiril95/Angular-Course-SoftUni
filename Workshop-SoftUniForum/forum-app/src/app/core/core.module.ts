import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
