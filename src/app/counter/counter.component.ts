import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  //Number Array Property
  myNumbers: number[] = [10, 20, 30, 40, 50];

  constructor() { }

  ngOnInit(): void {
  }

}
