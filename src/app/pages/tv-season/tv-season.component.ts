import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-tv-season',
  templateUrl: './tv-season.component.html',
  styleUrls: ['./tv-season.component.scss']
})
export class TvSeasonComponent implements OnInit {
  
  showStatus: any;
  seasonList: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  seasonStatus: boolean = false;
  emptyMsg:boolean;
  width: any;
  account: any;
  seasonName: any;
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
  seriesName: string;
  availName: string;
  response: any;
  orderedSeasonListResp: any;
  unorderedSeasonList: any;
  orderedSeasonList: any;

  constructor(private httpService: HttpService, private activatedRoute:ActivatedRoute) {

    this.parentMessage = "SEASON";
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
    this.seasonStatus = false;
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
  selectTab(seasonNum, tabselected) {
    for (let i = 0; i < this.orderedSeasonList.length; i++) {
      if (seasonNum === this.orderedSeasonList[i].SeasonNumber) {
        if (tabselected == "seasons") {
          this.seasonStatus = true;
          this.langStatus = false;
          this.transStatus = false;
          this.seasonName = seasonNum;
          this.width = (this.orderedSeasonList[i].EpisodesCompletedCount / this.orderedSeasonList[i].EpisodesCount) * 100;
          this.remaining = (this.orderedSeasonList[i].EpisodesPendingCount / this.orderedSeasonList[i].EpisodesCount) * 100;
        }
        else if (tabselected == "countries") {
          this.seasonStatus = false;
          this.langStatus = true;
          this.transStatus = false;
          this.seasonName = seasonNum;
          this.width = (this.orderedSeasonList[i].CountriesCompletedCount / this.orderedSeasonList[i].UniqueCountriesCount) * 100;
          this.remaining = (this.orderedSeasonList[i].CountriesPendingCount / this.orderedSeasonList[i].UniqueCountriesCount) * 100;
        }
        else if (tabselected == "languages") {
          this.seasonStatus = false;
          this.langStatus = false;
          this.transStatus = true;
          this.seasonName = seasonNum;
          this.width = (this.orderedSeasonList[i].LanguagesCompletedCount / this.orderedSeasonList[i].UniqueLanguagesCount) * 100;
          this.remaining = (this.orderedSeasonList[i].LanguagesPendingCount / this.orderedSeasonList[i].UniqueLanguagesCount) * 100;

        }
      }
    }
  }

  ngOnInit() {
    this.account = -1;
    this.showStatus = -1;
    this.activatedRoute.queryParams.subscribe(params => {
      this.seriesName = params['series'];
      this.availName = params['avail'];
    });
    this.getApoData();
  }
  getApoData() {
    this.httpService.getSeasonDetails(this.availName, this.seriesName).subscribe(data => {
      this.orderedSeasonListResp = data;
      this.unorderedSeasonList=this.orderedSeasonListResp.resultData;
      this.sortBy('SeasonNumber');  
    },error=>{
      console.log("error message",error,error.message)
    })
  }
  imgClickTrack(record, index) {
    this.showStatus = -1;
    this.seasonStatus = false;
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
  sortBy(field: string) {
    this.unorderedSeasonList.sort((a: any, b: any) => {
            if (a[field] < b[field]) {
                return -1;
            } else if (a[field] > b[field]) {
                return 1;
            } else {
                return 0;
            }
        });
        this.orderedSeasonList = this.unorderedSeasonList;
}

}
