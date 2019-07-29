import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-avail-details',
  templateUrl: './avail-details.component.html',
  styleUrls: ['./avail-details.component.scss']
})
export class AvailDetailsComponent implements OnInit {
  showDetails: boolean;
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
  clickedOnTitle:boolean;
  clickedOnCountry:boolean;
  clickedOnLanguage:boolean;
  // positionA = { x: 0, y: 0 };
  // positionB = { x: 530, y: 0 };
  constructor(private httpService: HttpService) {
    this.removeButton = false;
    this.removeAddButton = true;
    this.clickedOnTitle = false;
    this.clickedOnCountry = false;
    this.clickedOnLanguage = false;
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
  }
  addMultipleValue(point) {
    if (!this.multipleList[point]) {
      this.multipleList[point] = [];
      this.multipleArray[point] = [];
      this.removeAddButton = false;
    }

    var val = ''
    switch (point) {
      case this.COMMENTS:
        if (this.Comments) {
          val = this.Comments
        }
        this.Comments = '';
        break;
    }
    if (val) {

      this.multipleList[point].push({ n: val });
      this.multipleArray[point].push(val);
    }
    if (!this.removeButton) {
      this.removeButton = true;
    } else {
      this.removeButton = false;
    }
  }

  positionA = { x: 0, y: -150 };
  positionB = { x: 550, y: -20 };

  onMoving(event) {
    console.log(event.x, event.y);
    const boxWidth = 200;
    const boxHeight = 500;
    if (this.positionA.x < this.positionB.x &&
      event.x + boxWidth >= this.positionB.x + boxWidth / 2 &&
      event.x <= this.positionB.x + boxWidth &&
      event.y + boxHeight >= this.positionA.y &&
      event.y <= this.positionA.y + boxHeight) {
      let tmp = this.positionB;
      this.positionB = this.positionA;
      this.positionA = tmp;
    } else if (this.positionA.x >= this.positionB.x &&
      event.x <= this.positionB.x + boxWidth / 2 &&
      event.x + boxWidth >= this.positionB.x &&
      event.y + boxHeight >= this.positionA.y &&
      event.y <= this.positionA.y + boxHeight) {
      let tmp = this.positionB;
      this.positionB = this.positionA;
      this.positionA = tmp;
    }
  }


  filteredTitle:any;
  filterTitles(data){
    console.log("@@@@@@@@@@@@@@@@@@@@@@ ",this.availDetailsViewList);
    this.clickedOnTitle = true;
    var filterTitle =[];
    for(let gg of this.availDetailsViewList){
      console.log("id ", gg.id);
      for(let kk of gg.avail_details){
        console.log("titles ", kk.titlesDetails);
       
        for(let ll of kk.titlesDetails){
          //console.log("3rd ",ll.status);
          if(ll.status == data){
            console.log("found ", ll.status);
            filterTitle.push({"status":ll.status, "title_name": ll.title_name});
          }
        }  
        console.log("filtered ",this.filteredTitle);
      }
    }
    this.filteredTitle = filterTitle;
    

  }
  filteredCountry:any;
  filterCountries(data){
    this.clickedOnCountry = true;
    var filterCountry = [];
    for(let gg of this.availDetailsViewList){
      //console.log("id ", gg.id);
      for(let kk of gg.avail_details){
        //console.log("titles ", kk.countries);
       
        for(let ll of kk.countries){
          //console.log("3rd ",ll.status);
          if(ll.status == data){
            //console.log("found ", ll.status);
            filterCountry.push({"status":ll.status, "country_name": ll.country_name});
          }
        }  
        // console.log("filtered ",this.filtered);
      }
    }
    this.filteredCountry = filterCountry;
  }
  filteredLanguage:any;
  filterlanguages(data){
    this.clickedOnLanguage = true;
    var filterLanguage = [];
    for(let gg of this.availDetailsViewList){
     
      for(let kk of gg.avail_details){
        
       
        for(let ll of kk.languages){
         
          if(ll.status == data){
            
            filterLanguage.push({"status":ll.status, "language_name": ll.language_name});
          }
        }  
        
      }
    }
    this.filteredLanguage = filterLanguage;
  }

}
