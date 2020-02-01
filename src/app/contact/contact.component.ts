import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ContactService} from './contact.service';

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
  contactMessage: ContactMessage;
  people;

  constructor(private spinner: NgxSpinnerService, private contactService: ContactService) { }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 500 miliseconds */
      this.showSpinner = false;
    }, 500)

    //Make API call when the component is being rendered
    this.contactService.getPeople().subscribe(res => {this.people = res});
  }

  submitForm(){
    const newMessage: ContactMessage = Object.assign({},this.contactMessage);
    this.contactService.saveContactMessage(newMessage);
  }

}
