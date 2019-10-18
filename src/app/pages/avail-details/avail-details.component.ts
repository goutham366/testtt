import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avail-details',
  templateUrl: './avail-details.component.html',
  styleUrls: ['./avail-details.component.scss']
})
export class AvailDetailsComponent implements OnInit {
  showDetails: boolean;
  runspinner: any;
  showDetails1: boolean;
  showDetails2: boolean;
  showDetails3: boolean;
  width: any;
  removeButton: boolean;
  removeAddButton: boolean;
  COMMENTS = 'COMMENTS';
  Comments: string = '';
  multipleList: any = [];
  multipleArray: any = [];
  availDetailsViewList: any;
  clickedOnTitle: boolean;
  clickedOnCountry: boolean;
  clickedOnLanguage: boolean;
  condition: boolean;
  commentValue:any;
  // positionA = { x: 0, y: 0 };
  // positionB = { x: 530, y: 0 };
  availName:any;
  constructor(private httpService: HttpService, private location: Location,  private route: ActivatedRoute) {
    this.removeButton = false;
    this.removeAddButton = true;
    this.clickedOnTitle = false;
    this.clickedOnCountry = false;
    this.clickedOnLanguage = false;
  }
  comments = [
  ];
  addComment(trigg, newComment: string) {
    
    if(trigg.keyCode==13){
     
      if (newComment) {
        var toDate = Date();
        this.comments.push({"name": newComment, "date": toDate});
      }
  }
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }

  ngOnInit() {
    this.showDetails = true;
    this.showDetails1 = true;
    this.showDetails2 = true;
    this.showDetails3 = true;
    this.width = 75;
    this.httpService.getAvailDetailsView().subscribe(data => {
      this.availDetailsViewList = data;
      console.log('Avails Details data', this.availDetailsViewList);
    })

    this.route.queryParams.subscribe(params => {
      this.availName = params['avail_name'];
      let str =  this.availName;
      let res = str.split(" ");
      if( res[0]==="IN"){
        this.condition = true;
      }else if( res[0]==="FN"){
        this.condition = false;
      }
    });
  }


  getAvailDetailsView() {

  }
  // addMultipleValue(point) {
  //   console.log("*******");
  //   if (!this.multipleList[point]) {
  //     this.multipleList[point] = [];
  //     this.multipleArray[point] = [];
  //     this.removeAddButton = false;
  //   }
  //   var val = ''
  //   switch (point) {
  //     case this.COMMENTS:
  //       if (this.Comments) {
  //         val = this.Comments
  //       }
  //       this.Comments = point;
  //       break;
  //   }
  //   if (val) {
  //     this.multipleList[point].push({ n: val });
  //     this.multipleArray[point].push(val);
    
  //   }
  //   if (!this.removeButton) {
  //     this.removeButton = true;
  //   } else {
  //     this.removeButton = false;
  //   }
  // }
/******************** */
  // positionA = { x: 0, y: -150 };
  // positionB = { x: 550, y: 0 };

  // onMoving(event) {
  //   const boxWidth = 200;
  //   const boxHeight = 500;
  //   if (this.positionA.x < this.positionB.x &&
  //     event.x + boxWidth >= this.positionB.x + boxWidth / 2 &&
  //     event.x <= this.positionB.x + boxWidth &&
  //     event.y + boxHeight >= this.positionA.y &&
  //     event.y <= this.positionA.y + boxHeight) {
  //     let tmp = this.positionB;
  //     this.positionB = this.positionA;
  //     this.positionA = tmp;
  //   } else if (this.positionA.x >= this.positionB.x &&
  //     event.x <= this.positionB.x + boxWidth / 2 &&
  //     event.x + boxWidth >= this.positionB.x &&
  //     event.y + boxHeight >= this.positionA.y &&
  //     event.y <= this.positionA.y + boxHeight) {
  //     let tmp = this.positionB;
  //     this.positionB = this.positionA;
  //     this.positionA = tmp;
  //   }
  // }


  filteredTitle: any;
 


  filterTitles(data) {
    var availListA = this.availDetailsViewList;
    this.clickedOnTitle = true;
    var filterTitle = [];
    for (let a of availListA) {
      for (let b of a.avail_details) {
        for (let c of b.titlesDetails) {
          if (c.status == data) {
            filterTitle.push({ "status": c.status, "title_name": c.title_name });
          }
        }
      }
    }
    this.filteredTitle = filterTitle;


  }
  filteredCountry: any;
  filterCountries(data) {
    var availListB = this.availDetailsViewList;
    this.clickedOnCountry = true;
    var filterCountry = [];
    for (let d of availListB) {
      for (let e of d.avail_details) {
        for (let f of e.countries) {
          if (f.status == data) {

            filterCountry.push({ "status": f.status, "country_name": f.country_name });
          }
        }
      }
    }
    this.filteredCountry = filterCountry;
  }
  filteredLanguage: any;
  filterlanguages(data) {
    var availListC = this.availDetailsViewList;
    this.clickedOnLanguage = true;
    var filterLanguage = [];
    for (let g of availListC) {
      for (let h of g.avail_details) {
        for (let l of h.languages) {
          if (l.status == data) {
            filterLanguage.push({ "status": l.status, "language_name": l.language_name });
          }
        }

      }
    }
    this.filteredLanguage = filterLanguage;
  }

  reload() {
    location.reload();
  }

}
