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
  availsData: any = [];
  showTitlesText: any;
  showCountriesText: any;
  showLanguagesText: any;
  completedTitlesWidth: any;
  pendingTitlesWidth: any;
  completedCountriesWidth: any;
  pendingCountriesWidth: any;
  completedLanguagesWidth: any;
  pendingLanguagesWidth: any;
  semicircle: any;
  selected: any;

  titlesClicked: boolean = false;

  constructor(private httpService: HttpService) { }
  getAvailData() {
    this.httpService.getAvailData().subscribe(data => {
      this.availsData = data;
      this.httpService.currentMessage.subscribe(message => {
        this.selected = message;
        if(this.selected === '' ||this.selected === null){
          this.availsList = [];
          for (let i = 0; i < this.availsData.length; i++) {
            this.pendingTitlesWidth = this.availsData[i].TitleData.PendingTitlesCount;
            let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
            if (filteredAvailName === 'FN' || filteredAvailName === 'FT') {
              this.availsList.push(this.availsData[i]);
            }
          } 
        }
      if (this.selected === 'New') {
        this.availsList = [];
        for (let i = 0; i < this.availsData.length; i++) {
          let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'FN' || filteredAvailName === 'FT') {
            this.availsList.push(this.availsData[i]);
          }
        }
      }
      else if (this.selected === 'Catalog') {
        this.availsList = [];
        for (let i = 0; i < this.availsData.length; i++) {
          let filteredAvailName = this.availsData[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'FC') {
            this.availsList.push(this.availsData[i]);
          }
        }
      }
      })
    });
   
      
      
  }
  ngOnInit() {
    this.getAvailData();
    this.httpService.refresh('avail').subscribe(dataof => {
      this.getAvailData();
    })
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

}