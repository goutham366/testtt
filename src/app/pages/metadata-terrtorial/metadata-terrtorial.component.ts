import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-metadata-terrtorial',
  templateUrl: './metadata-terrtorial.component.html',
  styleUrls: ['./metadata-terrtorial.component.scss','../metadata/metadata.component.scss']
})
export class MetadataTerrtorialComponent implements OnInit {
  clickedOnLanguage: boolean;
  filteredLanguage: any[];
  availDetailsViewList: any;
  availLanguageList: any;
  clickedOnCountry: boolean;
  user: any;
  languageShort: any;
  @Input() childMessage: any;
  @Input() childCountryList: any;
  result: number;
  resultPending: number;
  resultCompleted: number;
  

  constructor(private httpService: HttpService) {
    this.clickedOnLanguage = false;
    this.user = this.metaDataListUpdateVal;
    
   }

   ngOnInit() {
    this.httpService.getmetadataLangConList().subscribe(data => {
      this.availDetailsViewList = data;
      console.log('Avails Details data', this.availDetailsViewList);
    })
    // this.httpService.getLangMetadata().subscribe(data => {
    //   this.availLanguageList = data;
    //   console.log('Avails Details data', this.availLanguageList);
    // })
    console.log("jjjjjjj : "+this.childMessage);

    this.resultCompleted = (this.childCountryList.CountriesCompletedCount * 100) / this.childCountryList.UniqueCountriesCount;
    this.resultPending = (this.childCountryList.CountriesPendingCount * 100) / this.childCountryList.UniqueCountriesCount;

    
   // this.availLanguageList.push(this.childMessage);
    
  }
  ngAfterViewInit() {
    console.log("jjjjjjj : "+this.childMessage);
  }
  filteredCountry: any;
  filterCountries(data) {
    var availListB = this.availDetailsViewList;
    this.clickedOnCountry = true;
    var filterCountry = [];
    for (let d of availListB) {
      for (let e of d.avail_details) {
        for (let f of e.countries) {
          if (f.status == data) {

            filterCountry.push({ "status": f.status, "country_name": f.country_name });
          }
        }
      }
    }
    this.filteredCountry = filterCountry;
  }
  metaDataListUpdateVal:String="The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path. The battle to defeat the enemy and restore harmony to the LEGO universe takes Emmet, Lucy, Batman and the rest of their friends to faraway, unexplored worlds that test their courage and creativity.";
  
  updateDescription(trig, data){
    this.metaDataListUpdateVal = data;
    if(trig.keyCode==13){
      
    }
  }
  dataShow(data){
    this.user = data;
  }
  dataSource(database){
    if(database==='atom'){
    return 'rgba(3, 144, 244,1)';
    }
    else if(database==='cas')
    return 'rgb(70, 22, 92)';
    else if(database==='sap'){
      return 'rgb(13, 26, 13)';
    }
      }
    isDisabled = true;
  flip() {
    this.isDisabled = !this.isDisabled;
    console.log(this.availLanguageList[0].AnnouncementDate)
  }
  languageName(LangName){
    this.languageShort = LangName;
  }
}
