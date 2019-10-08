import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-itunes',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.scss']
})
export class ItunesComponent implements OnInit {
  iTunesData:any; 
  showStatus:any;
  showDetails:any;
  semicircle:any;
  parentMessage:any;
  
  constructor(private httpService: HttpService) {
    this.parentMessage = "Itunes";
   }
  
  ngOnInit() {

    this.httpService.getItunesData().subscribe(data => {
      this.iTunesData = data;
      
    });
  }

  getPending(n,data){
    var result;
    switch(data){
      case 'T': result= (this.iTunesData[n].TitleData.PendingTitlesCount*100)/this.iTunesData[n].TitleData.TitlesCount;
                break;
      case 'C': result= (this.iTunesData[n].TitleData.CountriesPendingCount*100)/this.iTunesData[n].TitleData.UniqueCountriesCount;
                break;
      case 'L': result= (this.iTunesData[n].TitleData.LanguagesPendingCount*100)/this.iTunesData[n].TitleData.UniqueLanguagesCount;
                break;
              
    }
    return result;
  }
  

  getCompleted(n,data){
    var result;
    switch(data){

      case 'T': result= (this.iTunesData[n].TitleData.CompletedTitlesCount*100)/this.iTunesData[n].TitleData.TitlesCount;
                break;
      case 'C': result= (this.iTunesData[n].TitleData.CountriesCompletedCount*100)/this.iTunesData[n].TitleData.UniqueCountriesCount;
                break;
      case 'L': result= (this.iTunesData[n].TitleData.LanguagesCompletedCount*100)/this.iTunesData[n].TitleData.UniqueLanguagesCount;
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

}
