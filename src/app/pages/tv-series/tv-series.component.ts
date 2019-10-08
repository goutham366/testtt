import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {

  showStatus: any;
  seriesList: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  seriesStatus: boolean = false;
  emptyMsg: boolean;
  width: any;
  account: any;
  Seriestitle: any;
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
  seriesListResp: any;
  availName: string;
  SeriesNameNew: any;

  constructor(private httpService: HttpService, private activatedRoute:ActivatedRoute) {

    this.parentMessage = "SERIES";
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
    this.seriesStatus = false;
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
  selectTab(Seriestitle, tabselected) {
    for (let i = 0; i < this.seriesList.length; i++) {
      if (Seriestitle === this.seriesList[i].SeriesName) {
        if (tabselected == "series") {
          this.seriesStatus = true;
          this.langStatus = false;
          this.transStatus = false;
          this.SeriesNameNew = Seriestitle;
          this.width = (this.seriesList[i].SeasonsCompletedCount / this.seriesList[i].SeasonsCount) * 100;
          this.remaining = (this.seriesList[i].SeasonsPendingCount / this.seriesList[i].SeasonsCount) * 100;
        }
        else if (tabselected == "countries") {
          this.seriesStatus = false;
          this.langStatus = true;
          this.transStatus = false;
          this.SeriesNameNew = Seriestitle;
          this.width = (this.seriesList[i].CountriesCompletedCount / this.seriesList[i].UniqueCountriesCount) * 100;
          this.remaining = (this.seriesList[i].CountriesPendingCount / this.seriesList[i].UniqueCountriesCount) * 100;
        }
        else if (tabselected == "languages") {
          this.seriesStatus = false;
          this.langStatus = false;
          this.transStatus = true;
          this.SeriesNameNew = Seriestitle;
          this.width = (this.seriesList[i].LanguagesCompletedCount / this.seriesList[i].UniqueLanguagesCount) * 100;
          this.remaining = (this.seriesList[i].LanguagesPendingCount / this.seriesList[i].UniqueLanguagesCount) * 100;

        }
      }
    }
  }
  getSeriesData() {
    this.httpService.getSeriesDetails(this.availName).subscribe(data => {
      this.seriesListResp = data;
      this.seriesList = this.seriesListResp.resultData;
    })
  }
  ngOnInit() {
    this.account = -1;
    this.showStatus = -1;
    this.activatedRoute.queryParams.subscribe(params => {
      this.availName = params['avail_name'];
    });
    this.getSeriesData();
    // this.httpService.refresh().subscribe(dataof => {
    //   this.getSeriesData();
    // })

  }
  imgClickTrack(record, index) {
    this.showStatus = -1;
    this.seriesStatus = false;
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



}
