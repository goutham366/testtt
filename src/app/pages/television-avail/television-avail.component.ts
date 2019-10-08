import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-television-avail',
  templateUrl: './television-avail.component.html',
  styleUrls: ['./television-avail.component.scss']
})
export class TelevisionAvailComponent implements OnInit {
  tvData: any;
  tvDataResp: any;
  parentMessage: string;
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
  selected:any;
  pendingResult:any;
 constructor(private httpService:HttpService){
  this.parentMessage = "TV";
 }
 getTvAvailData(){
   this.httpService.getTelevisionAvailData().subscribe(data=>{
     this.tvDataResp=data;
     this.tvDataList=this.tvDataResp.resultData;
     this.httpService.tvMessage.subscribe(message => {
      this.selected = message;
      if(this.selected === '' ||this.selected === null){
        this.tvData = [];
        for (let i = 0; i < this.tvDataList.length; i++) {
           let filteredAvailName = this.tvDataList[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'FN' || filteredAvailName === 'FT') {
            this.tvData.push(this.tvDataList[i]);
          }
        } 
      }
      if (this.selected === "Day After") {
        this.tvData = [];
        for (let i = 0; i < this.tvDataList.length; i++) {
          let filteredAvailName = this.tvDataList[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'TD') {
            this.tvData.push(this.tvDataList[i]);
          }
        }
      }
      else if(this.selected === "Catalog"){
        this.tvData = [];
        for (let i = 0; i < this.tvDataList.length; i++) {
          let filteredAvailName = this.tvDataList[i].AvailName.substring(0, 2);
          if (filteredAvailName === 'TC') {
            this.tvData.push(this.tvDataList[i]);
          }
        }
      }
      else if(this.selected === "TBD"){
        this.tvData = [];
        for (let i = 0; i < this.tvDataList.length; i++) {
          let filteredAvailName = this.tvDataList[i].AvailName.substring(0, 3);
          if (filteredAvailName === 'LDC') {
            this.tvData.push(this.tvDataList[i]);
          }
        }
      }
     })
   })
 }
 getPending(n,data){
  switch(data){
    case 'E': this.pendingResult= (this.tvData[n].TitleData.EpisodesPendingCount*100)/this.tvData[n].TitleData.EpisodesCount;
              break;
    case 'C': this.pendingResult= (this.tvData[n].TitleData.CountriesPendingCount*100)/this.tvData[n].TitleData.UniqueCountriesCount;
              break;
    case 'L': this.pendingResult= (this.tvData[n].TitleData.LanguagesPendingCount*100)/this.tvData[n].TitleData.UniqueLanguagesCount;
              break;
            
  }
   return this.pendingResult;
}
getCompleted(n,data){
  let result;
  switch(data){

    case 'E': result= (this.tvData[n].TitleData.EpisodesCompletedCount*100)/this.tvData[n].TitleData.EpisodesCount;
              break;
    case 'C': result= (this.tvData[n].TitleData.CountriesCompletedCount*100)/this.tvData[n].TitleData.UniqueCountriesCount;
              break;
    case 'L': result= (this.tvData[n].TitleData.LanguagesCompletedCount*100)/this.tvData[n].TitleData.UniqueLanguagesCount;
              break;
  }
  return result;
}
export(page,AvailName) {
  this.showExportProgress = true;
  this.selectedAvail=AvailName;
  if (page === 'TV') {
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

 ngOnInit(){
this.getTvAvailData();
this.httpService.refresh('tv').subscribe(dataof => {
  this.getTvAvailData();
})
 }
}
