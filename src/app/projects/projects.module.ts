import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SlideshowModule } from 'ng-simple-slideshow';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    ProjectsRoutingModule,CommonModule,SlideshowModule,NgxSpinnerModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }