import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SlideshowModule } from 'ng-simple-slideshow';


@NgModule({
  imports: [
    ProjectsRoutingModule,CommonModule,SlideshowModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }