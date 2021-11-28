import { AuthGuard } from './../../_core/guards/auth.guard';
import { AdminTemplateComponent } from './admin-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./add-user/add-user.module').then((m) => m.AddUserModule),
      },
      {
        path: 'list-user',
        loadChildren: () =>
          import('./list-user/list-user.module').then((m) => m.ListUserModule),
      },
      {
        path: 'add-course',
        loadChildren: () =>
          import('./add-course/add-course.module').then(
            (m) => m.AddCourseModule
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTemplateRoutingModule {}
