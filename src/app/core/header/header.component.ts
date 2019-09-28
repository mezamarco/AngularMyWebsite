import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  emailAlert() { 
    alert("Please send me an email.\nI will send you a copy of my resume.\nMy email is:   mezamarco@yahoo.com\nThank You.");
  }
}
