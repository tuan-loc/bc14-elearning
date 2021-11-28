import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';
import { AuthHomeGuard } from 'src/app/_core/guards/auth-home.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      // home - localhost:4200
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      // about - localhost:4200/about
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
      },
      // list-course - localhost:4200/list-course
      {
        path: 'list-course',
        loadChildren: () => import('./list-course/list-course.module').then((m) => m.ListCourseModule),
      },
      // detail-course - localhost:4200/detail
      {
        path: 'detail/:id',
        loadChildren: () => import('./detail-course/detail-course.module').then((m) => m.DetailCourseModule),
      },
      // register - localhost:4200/register
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
      },
      // detail-user - localhost:4200/detail-user
      {
        path: 'detail-user',
        loadChildren: () => import('./detail-user/detail-user.module').then((m) => m.DetailUserModule),
        canActivate: [AuthHomeGuard]
      },
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplateRoutingModule { }
