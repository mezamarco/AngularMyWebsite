import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { ProjectsModule } from './projects/projects.module';

import { CoreModule } from './core/core.module';

@NgModule({
  imports:      [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    CoreModule, HomeModule, ContactModule, HobbiesModule, ProjectsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
