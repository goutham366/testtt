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
  selectedItem: string;
  message:string;
  highlight1: boolean = false;
  highlight2: boolean = false;
  highlight3: boolean = false;
  highlight4: boolean = false;
  highlight5: boolean = false;
  highlight6: boolean = false;
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

  // filmSelection(name) {
  //   this.selectedItem = name;
  // }

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
getTab(tab){
if(tab==='film'){
  this.highlight1=true;
  this.highlight2= false;
  this.highlight3 = false;
  this.highlight4 = false;
  this.highlight5 = false;

}
else if(tab==='television'){
  this.highlight1=false;
  this.highlight2= true;
  this.highlight3 = false;
  this.highlight4 = false;
  this.highlight5 = false;

}
else if(tab==='itunes'){
  this.highlight1=false;
  this.highlight2= false;
  this.highlight3 = true;
  this.highlight4 = false;
  this.highlight5 = false;

}
else if(tab==='apo'){
  this.highlight1=false;
  this.highlight2= false;
  this.highlight3 = false;
  this.highlight4 = true;
  this.highlight5 = false;

}
else if(tab==='adhoc'){
  this.highlight1=false;
  this.highlight2= false;
  this.highlight3 = false;
  this.highlight4 = false;
  this.highlight5 = true;

}
}
ngAfterViewInit()
{
  this.highlight1=true;
}
}
