import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './projects.service'



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   hideme = [];
   projects;

  constructor(private httpService: HttpClient, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => this.projects = res);
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