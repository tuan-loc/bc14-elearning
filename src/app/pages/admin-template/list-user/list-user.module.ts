import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListUserComponent } from './list-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule
  ]
})
export class ListUserModule { }
