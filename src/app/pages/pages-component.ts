import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './pages-component.html',
  styleUrls: ['./pages-component.scss']
})

export class PagesComponent implements OnInit {
  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

}