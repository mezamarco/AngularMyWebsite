import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeContainerService {

  constructor(private httpService: HttpClient) { }

  getLanguages(){
    return this.httpService.get('../../assets/languages.json');
  }
  getAutomation(){
    return this.httpService.get('../../assets/automation.json');
  }
  getCiCd(){
    return this.httpService.get('../../assets/cicd.json');
  }
  getDevelopmentTools(){
    return this.httpService.get('../../assets/developmentTools.json');
  }
  getDatabases(){
    return this.httpService.get('../../assets/databases.json');
  }
  getFrameworks(){
    return this.httpService.get('../../assets/frameworks.json');
  }
  getOperatingSystems(){
    return this.httpService.get('../../assets/operatingSystems.json');
  }

}
