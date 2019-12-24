import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showSpinner:boolean = true;

  constructor(private spinner: NgxSpinnerService) { }


  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 500 miliseconds */
      this.showSpinner = false;
    }, 500)
  }

}
