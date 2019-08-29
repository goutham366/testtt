import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-television-avail',
  templateUrl: './television-avail.component.html',
  styleUrls: ['./television-avail.component.scss']
})
export class TelevisionAvailComponent implements OnInit {
  tvData: any;

 constructor(private httpService:HttpService){

 }
 getTvAvailData(){
   this.httpService.getTelevisionAvailData().subscribe(data=>{
     this.tvData=data;
     console.log('tvData',this.tvData)
   })
 }
 getPending(n,data){
  var result;
  switch(data){
    case 'E': result= (this.tvData[n].TitleData.EpisodesPendingCount*100)/this.tvData[n].TitleData.EpisodesCount;
              break;
    case 'C': result= (this.tvData[n].TitleData.CountriesPendingCount*100)/this.tvData[n].TitleData.UniqueCountriesCount;
              break;
    case 'L': result= (this.tvData[n].TitleData.LanguagesPendingCount*100)/this.tvData[n].TitleData.UniqueLanguagesCount;
              break;
            
  }
  return result;
}
getCompleted(n,data){
  var result;
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

 ngOnInit(){
this.getTvAvailData();
 }
}
