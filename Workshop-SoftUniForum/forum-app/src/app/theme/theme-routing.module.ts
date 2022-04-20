import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThemesComponent
  },
  {
    path: 'create-theme',
    component: CreateThemeComponent
  },
  {
    path: ':themeId',
    component: ThemeContentComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }