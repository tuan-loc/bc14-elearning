import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  // HomeTemplate - localhost:4200
  {
    path: '',
    // loadChildren thì mới dùng dc lazy load
    // component thì ko dc
    // đặt "m" tượng trưng cho module
    loadChildren: () => import('./pages/home-template/home-template.module').then((m) => m.HomeTemplateModule),
  },

  // Login Home - localhost:4200/login
  {
    path: 'login',
    loadChildren: () => import('./pages/login-home/login-home.module').then((m) => m.LoginHomeModule),
  },

  // AdminTemplate - localhost:4200/admin
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-template/admin-template.module').then((m) => m.AdminTemplateModule),
  },

  // Auth - localhost:4200/auth
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  // PageNotFound
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
