import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpinner: boolean = true;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
 
      setTimeout(() => {
        /** spinner ends after 400 miliseconds */
        this.showSpinner = false;
      }, 500);
  }

}
