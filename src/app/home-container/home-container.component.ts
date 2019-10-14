import { Component, OnInit } from '@angular/core';
import { HomeContainerService } from './home-container.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  languageTableItems;
  automationTableItems;
  cicdTableItems;
  databasesTableItems;
  developmentToolsTableItems;
  frameworksTableItems;
  operatingSystemsTableItems;
  amazingSkillsTableItems;
  


  constructor( private homeContainerService: HomeContainerService) { }

  ngOnInit() {
    this.homeContainerService.getLanguages().subscribe(res => this.languageTableItems = res);
    this.homeContainerService.getAutomation().subscribe(res => this.automationTableItems = res);
    this.homeContainerService.getCiCd().subscribe(res => this.cicdTableItems = res);
    this.homeContainerService.getDatabases().subscribe(res => this.databasesTableItems = res);
    this.homeContainerService.getDevelopmentTools().subscribe(res => this.developmentToolsTableItems = res);
    this.homeContainerService.getFrameworks().subscribe(res => this.frameworksTableItems = res);
    this.homeContainerService.getFrameworks().subscribe(res => this.operatingSystemsTableItems = res);
    this.homeContainerService.getAmazingSkills().subscribe(res => this.amazingSkillsTableItems = res);

  }

}
