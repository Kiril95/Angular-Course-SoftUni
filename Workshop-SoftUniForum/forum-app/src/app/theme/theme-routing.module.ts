import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
      },
      {
        path: ':themeId',
        component: ThemeContentComponent,
      }
    ]
  },
  {
    path: 'create-theme',
    component: CreateThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }