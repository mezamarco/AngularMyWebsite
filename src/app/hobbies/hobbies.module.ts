import { NgModule } from '@angular/core';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  imports: [
    HobbiesRoutingModule
  ],
  declarations: [HobbiesComponent]
})
export class HobbiesModule { }