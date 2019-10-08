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
  parentMessage:any;
  title: any;
  showDetails: any;
  showStatus: any;
  width: any;
  posts: any;
  AvailAPIservice: any;
  availsList: any;
  availsData: any = [];
  availsResponse: any = [];
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
  successCase: boolean;
  errorCase: boolean;
  successMessage: any;
  exporturl: string;
  apiResp: any;
  errorURl: any;
  apiURL: any;
  errorMessageDownload: any;
  enableSaveFlag: boolean=false;
  showExportProgress: boolean;
  expS3: any;
  expRep: any;
  selectedAvail: any;
  errorMessage: string;
  selectedAvailNew: any;
  constructor(private httpService: HttpService) { 
    this.parentMessage = "Films";
  }
  getAvailData() {
    this.httpService.getAvailData().subscribe(data => {
      this.availsResponse = data;
      this.availsData = this.availsResponse.resultData;
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
      else if(this.selected === 'TBD'){
        this.availsList = [];
        for (let i = 0; i < this.availsData.length; i++) {
          let filteredAvailName = this.availsData[i].AvailName.substring(0, 3);
          if (filteredAvailName === 'LDC') {
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
  exportClick(AvailName){
  this.export(this.parentMessage,AvailName);
  }
  export(page,AvailName) {
    this.showExportProgress = true;
    this.selectedAvail=AvailName;
    if (page === 'Films') {
      this.httpService.exportToSingleAvailS3(page,AvailName).subscribe(data => {
        this.showExportProgress = true;
        this.expRep = data;
        if (data['status'] = "Success") {
          this.successCase = true;
          this.errorCase = false;
          this.showExportProgress = false;
          console.log('entered');
          this.httpService.exporS3ToLcalToSingle(page,AvailName).subscribe(data => {
            this.apiResp = data;
            this.apiURL = this.apiResp.url;
            this.enableSaveFlag = true;
          }, error => {
            this.errorCase = true;
            this.successCase = false;
            this.showExportProgress = false;
            this.errorURl = error.error.text;
            this.errorMessageDownload = error.error.message;

          }
          )
        }
      }, error => {
        this.errorCase = true;
        this.successCase = false;
        this.showExportProgress = false;
        this.errorMessageDownload = error.error.message;
        this.showExportProgress = false;
      }
      )

    }
  


  }
  openModal(AvailName){
    this.selectedAvailNew=AvailName;
    this.errorMessage = "";
    this.enableSaveFlag=false;
    this.errorMessageDownload='';
  }
}