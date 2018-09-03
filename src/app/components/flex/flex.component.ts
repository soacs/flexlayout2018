import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    return true;
  }

  invisibleOnDesktop() {
    return true;
  }

}
