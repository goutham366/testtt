import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false; 
  }
  eventCalled() {
    this.isActive = !this.isActive;
}
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}

}
