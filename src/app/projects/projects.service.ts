import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private httpService: HttpClient) { }
  getProjects(){
    return this.httpService.get('../../assets/projects.json');
  }
}
