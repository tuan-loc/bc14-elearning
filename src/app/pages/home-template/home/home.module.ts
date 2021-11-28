import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { LatestCourseComponent } from './latest-course/latest-course.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutHomeComponent } from './about-home/about-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    LatestCourseComponent,
    AboutHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    MaterialModule,
    SlickCarouselModule,
  ]
})
export class HomeModule { }
