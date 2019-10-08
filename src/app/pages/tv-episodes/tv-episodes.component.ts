import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-tv-episodes',
  templateUrl: './tv-episodes.component.html',
  styleUrls: ['./tv-episodes.component.scss']
})
export class TvEpisodesComponent implements OnInit {

  showStatus: any;
  orderedEpisodeList: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  episodeStatus: boolean = false;
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
  orderedEpisodeListResp: any;
  unorderedEpisodeList: any;
  seriesName: any;
  availName: any;
  seasonNumber: any;
  episodeNum: any;

  constructor(private httpService: HttpService,private activatedRoute:ActivatedRoute) {

   this.parentMessage = "Episodes";
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
    this.episodeStatus = false;
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
  selectTab(episode, tabselected) {
    for (let i = 0; i < this.orderedEpisodeList.length; i++) {
      if (episode === this.orderedEpisodeList[i].EpisodeNumber) {
        if (tabselected == "episodes") {
          this.episodeStatus = true;
          this.langStatus = false;
          this.transStatus = false;
          this.episodeNum = episode;
          this.width = (this.orderedEpisodeList[i].AccontsCompletedCount / this.orderedEpisodeList[i].AccontsCount) * 100;
          this.remaining = (this.orderedEpisodeList[i].AccontsPendingCount / this.orderedEpisodeList[i].AccontsCount) * 100;
        }
        else if (tabselected == "countries") {
          this.episodeStatus = false;
          this.langStatus = true;
          this.transStatus = false;
          this.episodeNum = episode;
          this.width = (this.orderedEpisodeList[i].CountriesCompletedCount / this.orderedEpisodeList[i].UniqueCountriesCount) * 100;
          this.remaining = (this.orderedEpisodeList[i].CountriesPendingCount / this.orderedEpisodeList[i].UniqueCountriesCount) * 100;
        }
        else if (tabselected == "languages") {
          this.episodeStatus = false;
          this.langStatus = false;
          this.transStatus = true;
          this.episodeNum = episode;
          this.width = (this.orderedEpisodeList[i].LanguagesCompletedCount / this.orderedEpisodeList[i].UniqueLanguagesCount) * 100;
          this.remaining = (this.orderedEpisodeList[i].LanguagesPendingCount / this.orderedEpisodeList[i].UniqueLanguagesCount) * 100;

        }
      }
    }
  }
  getEpisodeDetails() {

    this.httpService.getEpisodeDetails(this.availName,this.seriesName,this.seasonNumber).subscribe(data => {
      this.orderedEpisodeListResp = data;
      this.unorderedEpisodeList=this.orderedEpisodeListResp.resultData;
      this.sortBy('EpisodeNumber');  
      //console.log('episodes list data',this.orderedEpisodeList);
     
    },error=>{
      console.log("error message",error,error.message)
    })
  }
  ngOnInit() {
    this.account = -1;
    this.showStatus = -1;
    this.activatedRoute.queryParams.subscribe(params => {
      this.seriesName = params['seriesName'];
      this.availName = params['availName'];
      this.seasonNumber = params['seasonNumber'];
      console.log('avail name',this.availName,'series name',this.seriesName,'this.seasonNumber',this.seasonNumber);
    });
     this.getEpisodeDetails();
      }
  imgClickTrack(record, index) {
    this.showStatus = -1;
    this.episodeStatus = false;
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
    console.log('progress',title,l)
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
      this.unorderedEpisodeList.sort((a: any, b: any) => {
              if (a[field] < b[field]) {
                  return -1;
              } else if (a[field] > b[field]) {
                  return 1;
              } else {
                  return 0;
              }
          });
          this.orderedEpisodeList = this.unorderedEpisodeList;
  }

}
