import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   aboutMeIsCollapsed: boolean = false;
   zigZagIsCollapsed: boolean = false;
   binaryTreeIsCollapsed: boolean = false;
   multiWayTrieIsCollapsed: boolean = false;
   huffmanIsCollapsed: boolean = false;
   sixDegreesIsCollapsed: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  toggleAboutMe(){
    this.aboutMeIsCollapsed = !this.aboutMeIsCollapsed;
    console.log(this.aboutMeIsCollapsed);
  }
  toggleZigZag(){
    this.zigZagIsCollapsed = !this.zigZagIsCollapsed;
  } 
  toggleBinary(){
    this.binaryTreeIsCollapsed = !this.binaryTreeIsCollapsed;
  } 
  toggleMultiWay(){
    this.multiWayTrieIsCollapsed = !this.multiWayTrieIsCollapsed;
  } 
  toggleHuffman(){
    this.huffmanIsCollapsed = !this.huffmanIsCollapsed;
  }
  toggleSixDegrees(){
    this.sixDegreesIsCollapsed = !this.sixDegreesIsCollapsed;
  }


}