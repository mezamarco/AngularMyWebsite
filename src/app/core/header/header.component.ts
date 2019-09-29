import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  emailAlert() { 
    alert("Contact me at:\nmezamarco@yahoo.com\nI will then send you a copy of my resume.\nThank You,\nMarco Meza");
  }
}
