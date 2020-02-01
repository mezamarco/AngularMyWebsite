import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    ContactRoutingModule,NgxSpinnerModule,CommonModule, HttpClientModule
    ],
  declarations: [ContactComponent]
})
export class ContactModule { }