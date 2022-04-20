import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'themes',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
