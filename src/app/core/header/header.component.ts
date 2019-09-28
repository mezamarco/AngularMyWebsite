import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  emailAlert() { 
    alert("Please send me an email and will send with a copy of my resume.\nMy email is: mezamarco@yahoo.com\nThank You.");
  }
}
