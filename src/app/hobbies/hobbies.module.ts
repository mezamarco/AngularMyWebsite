import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    HobbiesRoutingModule,NgxSpinnerModule,CommonModule
  ],
  declarations: [HobbiesComponent]
})
export class HobbiesModule { }