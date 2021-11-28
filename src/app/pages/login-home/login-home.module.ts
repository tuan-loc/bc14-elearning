import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginHomeRoutingModule } from './login-home-routing.module';
import { LoginHomeComponent } from './login-home.component';


@NgModule({
  declarations: [
    LoginHomeComponent
  ],
  imports: [
    CommonModule,
    LoginHomeRoutingModule,
    FormsModule
  ]
})
export class LoginHomeModule { }
