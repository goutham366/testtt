import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public pushRightClass: string;
  public show: boolean = false;
  selectedItem: string = 'New';
  message:string;
  filmList: any = [{ name: "New" }, { name: "Catalog" }]
  constructor(public router: Router, private data: HttpService) {

    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
      }
  });
  
   }
   filmSelection(name) {
    this.selectedItem = name;
    this.data.changeMessage(this.selectedItem)
    
  }
  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
}
}
