import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
      ContactRoutingModule,
      NgxSpinnerModule,
      CommonModule, 
      HttpClientModule,
      ReactiveFormsModule
    ],
  declarations: [ContactComponent]
})
export class ContactModule { }