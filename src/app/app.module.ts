import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { ProjectsModule } from './projects/projects.module';


import { CoreModule } from './core/core.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContainerComponent } from './container/container.component';
@NgModule({
  imports:      [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    CoreModule, HomeModule, AboutModule, HobbiesModule, ProjectsModule,
  ],
  declarations: [ AppComponent, ContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
