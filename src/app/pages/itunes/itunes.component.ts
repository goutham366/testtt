import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-itunes',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.scss']
})
export class ItunesComponent implements OnInit {
  iTunesData: any;
  iTunesRes: any;
  showStatus: any;
  showDetails: any;
  semicircle: any;
  parentMessage: any;
  selected: any;
  accountList: any;
  pendingTitlesWidth: any;
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
  tvDataList:any;

  constructor(private httpService: HttpService) {
    this.parentMessage = "iTunes";
  }
  getItunesData() {
    this.httpService.getItunesData().subscribe(data => {
      this.iTunesRes = data;
      this.iTunesData = this.iTunesRes.resultData;
      this.httpService.iTunesMessage.subscribe(message => {
        this.selected = message;
        if (this.selected === '' || this.selected === null) {
          this.accountList = [];
          for (let i = 0; i < this.iTunesData.length; i++) {
            let AvailName = this.iTunesData[i].AvailName.substring(0, 2);
            if (AvailName === 'IN' || AvailName === 'AM') {
              this.accountList.push(this.iTunesData[i]);
            }
          }
        }
        if (this.selected === 'iTunes') {
          this.accountList = [];
          for (let i = 0; i < this.iTunesData.length; i++) {
            let AvailName = this.iTunesData[i].AvailName.substring(0, 2);
            if (AvailName === 'IN') {
              this.accountList.push(this.iTunesData[i]);
            }
          }
        }
        else if (this.selected === 'Amazon') {
          this.accountList = [];
          for (let i = 0; i < this.iTunesData.length; i++) {
            let AvailName = this.iTunesData[i].AvailName.substring(0, 2);
            if (AvailName === 'AM') {
              this.accountList.push(this.iTunesData[i]);
            }
          }
        }
        else if(this.selected === 'TBD'){
          this.accountList = [];
          for (let i = 0; i < this.iTunesData.length; i++) {
            let AvailName = this.iTunesData[i].AvailName.substring(0, 3);
            if (AvailName === 'LDC') {
              this.accountList.push(this.iTunesData[i]);
            }
          }
        }
      })
    });
  }
  ngOnInit() {
    this.getItunesData();
    this.httpService.refresh('iTunes').subscribe(dataof => {
      this.getItunesData();
    })
  }

  getPending(n, data) {
    var result;
    switch (data) {
      case 'T': result = (this.iTunesData[n].TitleData.PendingTitlesCount * 100) / this.iTunesData[n].TitleData.TitlesCount;
        break;
      case 'C': result = (this.iTunesData[n].TitleData.CountriesPendingCount * 100) / this.iTunesData[n].TitleData.UniqueCountriesCount;
        break;
      case 'L': result = (this.iTunesData[n].TitleData.LanguagesPendingCount * 100) / this.iTunesData[n].TitleData.UniqueLanguagesCount;
        break;

    }
    return result;
  }
  getCompleted(n, data) {
    var result;
    switch (data) {

      case 'T': result = (this.iTunesData[n].TitleData.CompletedTitlesCount * 100) / this.iTunesData[n].TitleData.TitlesCount;
        break;
      case 'C': result = (this.iTunesData[n].TitleData.CountriesCompletedCount * 100) / this.iTunesData[n].TitleData.UniqueCountriesCount;
        break;
      case 'L': result = (this.iTunesData[n].TitleData.LanguagesCompletedCount * 100) / this.iTunesData[n].TitleData.UniqueLanguagesCount;
        break;
    }
    return result;
  }


  showAvailStatus(index) {
    this.showStatus = index;
    this.showDetails = null;
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
  export(page,AvailName) {
    this.showExportProgress = true;
    this.selectedAvail=AvailName;
    if (page === 'iTunes') {
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
