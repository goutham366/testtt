import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-avail-titles',
  templateUrl: './avail-titles.component.html',
  styleUrls: ['./avail-titles.component.scss']
})
export class AvailTitlesComponent implements OnInit {
 
  showStatus: any;
  apoList: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  accStatus: boolean = false;
  emptyMsg: boolean;
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
  parentMessage: any;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {
    this.parentMessage = "TV";
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
  }
  showTranslations(index) {
    this.account = index;
    this.showStatus = -1;
    this.translationsClicked = true;
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
    this.httpService.getAvailTittlesData().subscribe(data => {
      this.apoList = data;
    })
  }
  ngOnInit() {
    this.account = -1;
    this.showStatus = -1;
    this.getApoData();
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
    var result = this.getProgressSwitch(title, l);
    return result;
  }
  getProgressFill(title) {
    var l = title.length;
    if (title[l - 1].StatusMessage == "") {
      return -1
    } else {
      var result = this.getProgressSwitch(title, l);
      return result;
    }
  }
  getProgressSwitch(title, l) {
    switch (title[l - 1].StatusMessage) {
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
    if (date < duedat) {
      return "lessthan-todaydate";
    }
    else {
      return "due-date";
    }
  }


}


