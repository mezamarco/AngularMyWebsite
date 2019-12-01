import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './projects.service'
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
@Input() minHeight: string;
@Input() arrowSize: string;
@Input() showArrows: boolean = true;
@Input() disableSwiping: boolean = false;
@Input() autoPlay: boolean = false;
@Input() autoPlayInterval: number = 3333;
@Input() stopAutoPlayOnSlide: boolean = true;
@Input() debug: boolean = false;
  
  hideme = [];
  projects;
  showSpinner: boolean = true;
    
  constructor(private httpService: HttpClient, private projectService: ProjectService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => this.projects = res);

      /** spinner starts on init */
      this.spinner.show();
 
      setTimeout(() => {
        /** spinner ends after 700 miliseconds */
        this.showSpinner = false;
      }, 700);
  }

  openAllProjects(lenght){
    for(var i = 0; i < lenght; i++){
      this.hideme[i] = 0; 
    }
  }
  
  closeAllProjects(lenght){
    for(var i = 0; i < lenght; i++){
      this.hideme[i] = 1; 
    }
  }

}