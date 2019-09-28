import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  imports: [
    CommonModule,
    HobbiesRoutingModule
  ],
  declarations: [HobbiesComponent]
})
export class HobbiesModule { }