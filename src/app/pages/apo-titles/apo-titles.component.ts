import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TooltipPosition } from '@angular/material';
declare var jQuery:any;

interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-apo-titles',
  templateUrl: './apo-titles.component.html',
  styleUrls: ['./apo-titles.component.scss']
})
export class ApoTitlesComponent implements OnInit {
  
  showStatus: any;
  apoList: any;
  apoResponse: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  accStatus: boolean = false;
  emptyMsg:boolean;
  width: any;
  account: any;
  titleName: any;
  avail_title: any;
  remaining: any;
  public stages: Stages[];
  status: any;
  ImageUrl: string = " ";
  fileToUpload: File;
  removeButton: boolean;
  files: any;
  selectedRecord: any;
  uploadStatus: boolean;
  titleid: any;
  progress: number;
  acccountClicked: boolean = false;
  countriesClicked: boolean = false;
  translationsClicked: boolean = false;
  todaydate: any;
  duedate: any;
  parentMessage:any;
  successCase: boolean;
  errorCase: boolean;
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
  isDisabled: boolean = true;
  toolTipValue: string;
  modalShow: boolean;
  constructor(private httpService: HttpService) {
    this.getApoData();
    this.modalShow= true;
    this.parentMessage = "APO";
    this.stages = [
      { stageTitle: "Announced" },
      { stageTitle: "Data Collation" },
      { stageTitle: "Quality Audit" },
      { stageTitle: "Data Delivery" }
    ];

    this.ImageUrl = 'assets/images/dummy.png';
    this.removeButton = false;
    
  }

  showTitleStatus(index) {
    this.showStatus = index;
    this.accStatus = false;
    this.langStatus = false;
    this.transStatus = false;
    this.account = index;
  }
  showAccounts(index) {
    this.account = index;
    this.showStatus = -1;
    this.acccountClicked = true;
  }
  showCountries(index) {
    this.account = index;
    this.showStatus = -1;
    this.countriesClicked = true;
    document.getElementById('id').style.pointerEvents = 'none';
  }
  showTranslations(index) {
    this.account = index;
    this.showStatus = -1;
    this.translationsClicked = true;
    document.getElementById('id').style.pointerEvents = 'auto'; 
  }
  
  checkTitleId(data) {
    if(data==""){
      //this.toolTipValue='hi';
     
      return true;
      
    }else{
      //this.toolTipValue='';
     
      return false;
      
    }
  }
  getCursorForExport(data) {
    if(data==""){
      //this.toolTipValue='hi';
     
      return "auto";
      
    }else{
      //this.toolTipValue='';
     
      return "pointer";
      
    }
  }
  method(){
    return "hrllo";
  }
  export(page,Titlename) {
    this.showExportProgress = true;
    this.selectedAvail=Titlename;
    if (page === 'APO') {
      this.httpService.exportToSingleAPO(page,Titlename).subscribe(data => {
        this.showExportProgress = true;
        this.expRep = data;
        if (data['status'] = "Success") {
          this.successCase = true;
          this.errorCase = false;
          this.showExportProgress = false;
          console.log('entered');
          this.httpService.exportAPOS3ToLcalToSingle(page,Titlename).subscribe(data => {
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


  selectTab(title, tabselected) {
    for (let i = 0; i < this.apoList.length; i++) {
      if (title === this.apoList[i].GlobalTitle) {
        if (tabselected == "titles") {
          this.accStatus = true;
          this.langStatus = false;
          this.transStatus = false;
          this.titleName = title;
          this.width = (this.apoList[i].AccontsCompletedCount / this.apoList[i].AccontsCount) * 100;
          this.remaining = (this.apoList[i].AccontsPendingCount / this.apoList[i].AccontsCount) * 100;
        }
        else if (tabselected == "countries") {
          this.accStatus = false;
          this.langStatus = true;
          this.transStatus = false;
          this.titleName = title;
          this.width = (this.apoList[i].CountriesCompletedCount / this.apoList[i].CountriesCount) * 100;
          this.remaining = (this.apoList[i].CountriesPendingCount / this.apoList[i].CountriesCount) * 100;
        }
        else if (tabselected == "languages") {
          this.accStatus = false;
          this.langStatus = false;
          this.transStatus = true;
          this.titleName = title;
          this.width = (this.apoList[i].LanguagesCompletedCount / this.apoList[i].LanguagesCount) * 100;
          this.remaining = (this.apoList[i].LanguagesPendingCount / this.apoList[i].LanguagesCount) * 100;

        }
      }
    }
  }
  getApoData() {
    this.httpService.getAPODetails().subscribe(data => {
      this.apoResponse = data;
      this.apoList = this.apoResponse.resultData;
    })
  }
  ngOnInit() {
    this.account = -1;
    this.showStatus = -1;
   
    this.httpService.refresh('apo').subscribe(dataof => {
      this.getApoData();
    })
    
  }
  imgClickTrack(record, index) {
    this.showStatus = -1;
    this.accStatus = false;
    this.langStatus = false;
    this.transStatus = false;
    this.account = -1;
    this.selectedRecord = record;
    if (this.selectedRecord.ImageURL == "") {
      this.uploadStatus = false;
    } else {
      this.uploadStatus = true;
    }
  }
  handleFileInputForAdd(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectedRecord.ImageURL = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.removeButton = true;
  }
  triggerUpload() {
    this.files = [];
    if (this.ImageUrl == "assets/images/dummy.png") {
      const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
      fileUpload.click();
    }
  }

  getProgress(title) {
    var l = title.length;
    var result= this.getProgressSwitch(title,l);
    return result;
  }
  getProgressFill(title) {
    var l = title.length;
    if(title[l-1].StatusMessage==""){
      return -1
    }else{
      var result= this.getProgressSwitch(title,l);
      return result;
    }
  }
  getProgressSwitch(title,l){
    switch (title[l-1].StatusMessage) {
      case "Announced": this.progress = 0;
        break;
      case "Data Collation": this.progress = 1;
        break;
      case "Quality Audit": this.progress = 2;
        break;
      case "Data Delivery": this.progress = 3;
        break;
      case "": this.progress = 0;
        break;

    }
    return this.progress;
  }


  getColor(duedate) {
    var todaydate = new Date();
    duedate = new Date(duedate);
    var duedat = duedate.getMonth() + 1 + '/' + duedate.getDate() + '/' + duedate.getFullYear();
    var date = todaydate.getMonth() + 1 + '/' + todaydate.getDate() + '/' + todaydate.getFullYear();
    //console.log(duedat, date, '&&&&&')
    if (date<duedat) {
      return "lessthan-todaydate";
    }
    else {
      return "due-date";
    }
  }
  
  openModal(Titlename,id){
    if(id!=""){
      this.selectedAvailNew=Titlename;
      this.errorMessage = "";
      this.enableSaveFlag=false;
      this.errorMessageDownload='';
      this.modalShow= true;
    }else{
      this.modalShow= false;
    }
  }
}
