import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'My First Angular App,Angular Hello World';
  
  studentName:string;
  courseName:string;
  angularVersion:number;

  constructor(){
    this.studentName = 'Minh Hoang';
    this.courseName = 'Alternative Web Tech - Angular';
    this.angularVersion = 10;
  }
}
