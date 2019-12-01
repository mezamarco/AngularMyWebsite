import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  showSpinner: boolean = true;
  
  constructor(private spinner: NgxSpinnerService) {}
 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 400 miliseconds */
      this.showSpinner = false;
    }, 500);

  }

}