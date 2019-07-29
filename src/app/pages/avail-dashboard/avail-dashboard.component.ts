import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';

const url = "assets/images/";
declare var $: any;
@Component({
  selector: 'app-avail-dashboard',
  templateUrl: './avail-dashboard.component.html',
  styleUrls: ['./avail-dashboard.component.scss']
})
export class AvailDashboardComponent implements OnInit {
  title: any;
  showDetails: any;
  showStatus: any;
  width: any;
  posts: any;
  AvailAPIservice: any;

  availsList: any;
  availsList1 = [];
  // availsList2 = [];
  availsData: any = [];
  availsData1: any = [];
  availsData2: any = [];
  availsListCopy: any = [];

  showTitlesText: any;
  showCountriesText: any;
  showLanguagesText: any;
  completedWidth: any;
  pendingWidth: any;
  semicircle: any;
  selected: any;

  titlesClicked: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.currentMessage.subscribe(message => {
      this.selected = message;
      this.httpService.getAvailData().subscribe(data => {
        this.availsData = data;
        this.availsList = [];
        for (let i = 0; this.availsData.length; i++) {
          let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'FN' || filteredAvailName === 'FT') {
            this.availsList.push(this.availsData[i]);
          }
        }
      });
      if (this.selected === 'New') {
        this.availsList = [];
        this.httpService.getAvailData().subscribe(data => {
          this.availsData = data;
          for (let i = 0; this.availsData.length; i++) {
            let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
            if (filteredAvailName === 'FN' || filteredAvailName === 'FT') {
            }
          }
        });
      }
      else if (this.selected === 'Catalog') {
        this.httpService.getAvailData().subscribe(data => {
          this.availsData = data;
          for (let i = 0; this.availsData.length; i++) {
            let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
            if (filteredAvailName === 'FC') {
              this.availsList.length = 0;
              this.availsList[i] = this.availsData[i];
            }
          }
        });
      }
    });

    this.title = "Avails"
    this.showDetails = -1;
    this.width = 75;

  }
  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': '48%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '54%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': '12px'
    };
  }

  showtitlesDiv(event, index) {
    this.showDetails = index;
    this.titlesClicked = true;
  
  
  }
  showcountriesDiv(event, index) {
    this.showDetails = index;
  
  }
  showlanguagesDiv(event, index) {
    this.showDetails = index;
  

  }

  showAvailStatus(index) {
    this.showStatus = index;
    this.showDetails = null;
  }

  rotate(title, clickedText) {
    for (let i = 0; i < this.availsList.length; i++) {
      let tName = this.availsList[i].AvailName;
      if (title === tName) {
        if (clickedText === "titles") {
          this.showTitlesText = "Titles";
          this.showCountriesText = null;
          this.showLanguagesText = null;
          this.completedWidth = this.availsList[i].TitleData.CompletedTitlesCount;
          this.pendingWidth = this.availsList[i].TitleData.PendingTitlesCount;
        }
        else if (clickedText == "countries") {
          this.showCountriesText = "Countries";
          this.showTitlesText = null;
          this.showLanguagesText = null;
          this.completedWidth = this.availsList[i].TitleData.CountriesCompletedCount;
          this.pendingWidth = this.availsList[i].TitleData.CountriesPendingCount;
        }
        else if (clickedText == "languages") {
          this.showLanguagesText = "Languages";
          this.showTitlesText = null;
          this.showCountriesText = null;
          this.completedWidth = this.availsList[i].TitleData.LanguagesCompletedCount;
          this.pendingWidth = this.availsList[i].TitleData.LanguagesPendingCount;
        }
      }
    }

  }



}