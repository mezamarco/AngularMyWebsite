import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContainerComponent } from '../home-container/home-container.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [HomeComponent, HomeContainerComponent]
})
export class HomeModule { }
