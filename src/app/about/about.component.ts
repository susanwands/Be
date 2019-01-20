import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})



export class AboutComponent implements OnInit {

  list = [
    {'title': 'Something 1', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false},
    {'title': 'Something 2', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': true},
    {'title': 'Something 3', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false},
    {'title': 'Something 4', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false},
    {'title': 'Something 5', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false},
    {'title': 'Something 6', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false},
    {'title': 'Something 7', 'type': 'volunteer', 'status': 'active', 'open': 'yes', 'display': false}
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails(index) {
    this.list[index].display = !this.list[index].display;
  }
}
