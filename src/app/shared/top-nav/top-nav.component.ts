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
  message: string;
  filmList: any = [{ name: "New" }, { name: "Catalog" },{name:"TBD"}]
  accountList: any = [{ name: "iTunes" }, { name: "Amazon" },{name:"TBD"}]
  tvCategories: any = [{ name: "Day After" }, { name: "Catalog" },{name:"TBD"}]
  selectedItemofTv: string = 'Catalog';
  selectedItemofAccount: string = 'iTunes';
  tvColor: boolean;
  filmColor: boolean;
  ituneColor: boolean;
  apoColor: boolean;
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
    var str = router.url;
    var res = str.split("/");
    var l = res.length;
    var fineResult;
    if(res[l-1].includes('?')){
      fineResult = res[l-1].split("?");
      if(fineResult[0]=="tvseries"||fineResult[0]=="tvseason"||fineResult[0]=="tvepisode"){
        this.clicked("television");
      }  
    }else{
      this.clicked(res[l-1]);
    }
   
    
  }
  filmSelection(name) {
    this.selectedItem = name;
    this.data.changeMessage(this.selectedItem)
  }
  accountSelection(name) {
    this.selectedItemofAccount = name;
    this.data.changeiTunesMessage(this.selectedItemofAccount)
  }
  televisonDrop(name) {
    this.selectedItemofTv = name;
    this.data.changeTvMessage(this.selectedItemofTv)
  }
  selectedSubItems() {
    this.selectedItem = null;
    this.selectedItemofAccount = null;
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
  clicked(router){
    switch (router) {
      case "television": {
        this.tvColor = true;
        this.filmColor = false;
        this.ituneColor = false;
        this.apoColor = false;
        break;
      }
      case "pages": {
        this.tvColor = false;
        this.filmColor = true;
        this.ituneColor = false;
        this.apoColor = false;
        break;
      }
      case "itunes": {
        this.tvColor = false;
        this.filmColor = false;
        this.ituneColor = true;
        this.apoColor = false;
        break;
      }
      case "apo": {
        this.tvColor = false;
        this.filmColor = false;
        this.ituneColor = false;
        this.apoColor = true;
        break;
      }
    }
  }
}
