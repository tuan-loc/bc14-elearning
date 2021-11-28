import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailUserRoutingModule } from './detail-user-routing.module';
import { DetailUserComponent } from './detail-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RegisteredCourseComponent } from './registered-course/registered-course.component';


@NgModule({
  declarations: [
    DetailUserComponent,
    PersonalInfoComponent,
    RegisteredCourseComponent
  ],
  imports: [
    CommonModule,
    DetailUserRoutingModule,
    MatTabsModule,
    FormsModule
  ]
})
export class DetailUserModule { }
