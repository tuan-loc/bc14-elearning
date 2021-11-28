import { ShareModuleModule } from './../../../_core/shares/share-module/share-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ShareModuleModule
  ]
})

export class AboutModule { }
