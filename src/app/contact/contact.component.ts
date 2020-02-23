import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ContactService} from './contact.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';



interface ContactMessage{
  name:string
  email:string
  message:string
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showSpinner:boolean = true;
  m: ContactMessage;
  
  peopleResponse;
  messagesResponse;


  messageForm = this.fb.group({
    name: [''],
    email: [''],
    message: ['Enter Message Here...']
  });
  newMessageEntered: boolean = false;

  constructor(private spinner: NgxSpinnerService, private contactService: ContactService, private fb:FormBuilder) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 500 miliseconds */
      this.showSpinner = false;
    }, 500)

    //Subscribe to the API GET call
    this.contactService.getPeople().subscribe(res => {this.peopleResponse = res});

    //Subscribe to the API GET call
    this.contactService.getMessages().subscribe(res => {this.messagesResponse = res});
  }

  onSubmit() {
    console.warn(this.messageForm.value);
    this.newMessageEntered = true;
    this.contactService.addContactMessage(this.messageForm.value).subscribe();
  }

}


