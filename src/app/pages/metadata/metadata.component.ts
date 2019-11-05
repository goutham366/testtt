import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
type Orientation = ( "prev" | "next" | "none" );
@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  animations: [
    trigger('otpAnim', [
      transition(':enter', [
        style({transform: 'translateX(30%)'}),
        animate(100)
      ]),
      
    ]),
  ]
})
export class MetadataComponent implements OnInit {
  public orientation: Orientation;
  private changeDetectRef: ChangeDetectorRef;
  metaDataList:any;
  addClicked:boolean;
  value: string='-';
  availId:any;
  // logsDetails = [{"name":'John Paul', "date":"1/12", "val": "Actors: #ATOM"},
  //             {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1. Jude Law"},
  //             {"name":'John Paul', "date":"1/12", "val": "Actors: #CAS"},
  //             {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"}];
  logsDetails = [];
  availDetail: any;
  details: any;
  availdetailId: any;
  show: boolean;
  sizeVar: any;
  close: boolean;
  avail: boolean;
  changedWidth:boolean;
  changeColor: boolean;
  switchvalue:boolean;
  changeText: any;
  userMetadata: any;
  showStatus: boolean;
  titleName: string;
  availName:any;
  accStatus: boolean;
  langStatus: boolean;
  transStatus: boolean;
  account: any;
  isDisabled: boolean;
  commentValue: any;
  filteredMetadataList:any;
  condition: boolean;
  tvAvailName: any;
  titleId: any;
  seriesName: any;
  seasonNumber: any;
  routeName: any;
  showApoBread: boolean;
  lob: any;
  translationData: any;
  globalData: any;
  episodeNumber: any;
  parentMetadataMessage: any;
  parentMetadataCountryList: any;
  availDetailsViewList: Object;
  availLanguageList: Object;
  userCountry: any;
  userLanguage: any;
  metaDataListUpdateVal:String="";
  metaDataLangUpdateVal:String="";
  metaDataCountryUpdateVal:String="";
  countryData: any;
  countryList: any;
  translationList: any;
  resultTerritoryCompleted: number;
  resultTerritoryPending: number;
  countriesCompletedCount: any;
  countriesPendingCount: any;
  uniqueCountriesCount: any;
  uniqueLanguagesCount: any;
  LanguagesPendingCount: any;
  LanguagesCompletedCount: any;
  resultLanguageCompleted: number;
  resultLanguagePending: number;
  clickedOnLanguage: boolean;
  filteredLanguage: any[];
  languageShort='English';
  lobType: any;
  startDate: any;
  endDate: any;

  constructor(private httpservice: HttpService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.show=true;
    this.close=false;
    this.addClicked=false;
    this.sizeVar=12;
    this.changedWidth = false;
    this.changeColor =false;
    this.switchvalue = true;
    this.changeText= "Comment";
    this.isDisabled = true;
    
    this.userMetadata = this.metaDataListUpdateVal;
    this.userLanguage = this.metaDataLangUpdateVal;
    this.userCountry = this.metaDataCountryUpdateVal;
    //this.
    this.filteredMetadataList = [];
   }



   ngOnInit() {
    //this.changeText= "Comment";
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.titleName = params['title_name'];
      this.availName = params['avail_name'];
      this.titleId = params['titleId'];
     // console.log(this.titleId);
      this.seriesName = params['seriesName'];
      this.seasonNumber = params['seasonNumber'];
      this.lobType = params['lob'];
      this.episodeNumber = params['episodeNumber'];
     // console.log(this.episodeNumber);
      this.routeName = params['routeName'];
     // this.lob=params['lob'];
     
      
      let str =  this.availName;
      if(this.availName!="title"){
        let res = str.split(" ");
        if(res[0] === 'TN' || res[0] === 'TC' || res[0]==="LDC_TBD") {
          this.tvAvailName = true;
          this.condition = false;
          this.lob = "TV";
          this.titleId =  this.episodeNumber;
          }
         else if( res[0]==="IN" || res[0]==="LDC_TBD"){
          this.condition = true;
          this.tvAvailName=false;
          this.lob = "ITUNES";
          }else if(res[0]==="FN" || res[0]==="FC" || res[0]=="FT" || res[0]==="LDC_TBD") {
          this.condition = false;
          this.tvAvailName=false;
          this.lob = "FILMS";
          }
          else{
            this.tvAvailName=false;
            this.condition = false;
          }
          this.showApoBread = false;
      }else if(this.routeName==='APO' || this.availName=="title"){
        this.showApoBread = true;
        this.tvAvailName=false;
        this.condition = false;
        this.lob = "APO";
        this.availName = "title";
      }
      this.lobType=this.lob;
    });

    //this.parentMetadataMessage = {"lob":this.lob, "availName":this.availName, "titleId":this.titleId}
    
    
    this.httpservice.getMetaData(this.lob,this.availName,this.titleId).subscribe(data=>{
    this.metaDataList=data;
    this.globalData=this.metaDataList.GlobalMetadata;
    this.countryData = this.metaDataList.CountryMetadata;
    this.translationData = this.metaDataList.translationMetadata;
    this.countryList = this.metaDataList.CountryData;
    this.translationList = this.metaDataList.TranslationsData;
    this.countriesCompletedCount = this.metaDataList.CountriesCompletedCount;
    this.countriesPendingCount = this.metaDataList.CountriesPendingCount;
    this.LanguagesCompletedCount = this.metaDataList.LanguagesCompletedCount;
    this.LanguagesPendingCount = this.metaDataList.LanguagesPendingCount;
    this.uniqueCountriesCount = this.metaDataList.UniqueCountriesCount;
    this.uniqueLanguagesCount = this.metaDataList.UniqueLanguagesCount;
    this.startDate = this.metaDataList.StartDate;
    this.endDate = this.metaDataList.DueDate;
    this.resultTerritoryCompleted = (this.metaDataList.CountriesCompletedCount * 100) / this.metaDataList.UniqueCountriesCount;
    this.resultTerritoryPending = (this.metaDataList.CountriesPendingCount * 100) / this.metaDataList.UniqueCountriesCount;
    this.resultLanguageCompleted = (this.metaDataList.LanguagesCompletedCount * 100) / this.metaDataList.UniqueLanguagesCount;
    this.resultLanguagePending = (this.metaDataList.LanguagesPendingCount * 100) / this.metaDataList.UniqueLanguagesCount;
    // this.parentMetadataMessage = this.metaDataList.CountryMetadata;
    // this.parentMetadataCountryList = this.metaDataList.CountryData;
      //console.log('service metadata',this.metaDataList.TranslationsData);
      // this.filteredMetadataList= this.metaDataList.filter(availdata=>{
      //   if(availdata.GlobalTitle==this.titleName){
      //     return availdata.GlobalTitle==this.titleName;
      //   }
      // }) 

      // for(let i=0;i<this.metaDataList.length;i++){
      //   if(this.metaDataList.GlobalTitle==this.titleName){
      //     this.filteredMetadataList =  this.metaDataList[i];
      //   }
      // }
      // if(this.filteredMetadataList.length==0){
      //   var l = this.metaDataList.length;
      //   this.filteredMetadataList.push(this.metaDataList[l-1]);
      // }
    })


    this.httpservice.getmetadataLangConList().subscribe(data => {
      this.availDetailsViewList = data;
    //  console.log('Avails Details data', this.availDetailsViewList);
    })
    this.httpservice.getLangMetadata().subscribe(data => {
      this.availLanguageList = data;
    //  console.log('Avails Details data', this.availLanguageList);
    })
    
    // this.httpservice.detailsOfAvail().subscribe(data=>{
    //   this.availDetail=data;
    //   console.log('this.availDetail',this.availDetail);
    // })

   
  }
  // comments = [{"name":'Sent for Transalation', "date":"1/12"},
  //             {"name":'The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path.', "date":"1/12"},
  //             {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
  //             ];
              comments = [
              ]; 
              showInput(){
                this.addClicked = true;
              }
  addComment(trigg, newComment: string) {
    if(trigg.keyCode==13){
     
      if (newComment) {
        var toDate = Date();
        this.comments.push({"name": newComment, "date": toDate});
      }
  }
  }
  
  metaDataShow(avail) {
   this.show=false;
   this.close=true;
   this.changedWidth = true;
   
 
  //  document.getElementById("OriginalData").style.width = "100%";
   this.details= this.metaDataList.filter(availdata=>{
      return availdata.title_Id==avail;
    }) 
  }
dataNull(){
  
}
  dataShow(data,nav){
    switch(nav){
      case 'G' : this.userMetadata = data;
      break;
      case 'L' : this.userLanguage = data;
      break;
      case 'T' : this.userCountry = data;
      break;
    }
    
    
    // if(value===metaDataListUpdateVal){
    //   this.user = data;
    // } else if(this.value===this.metaDataLangUpdateVal){
    //   this.userlanguage = data;
    // } else if(value===this.metaDataContunryUpdateVal){
    //   this.userCountry = data;
    // }
  }
  filterlanguages(data) {
    var availListC = this.availDetailsViewList;
    this.clickedOnLanguage = true;
    var filterLanguage = [];
    
    
        for (let l of this.translationList) {
          if (l.status == data) {
            filterLanguage.push({ "status": l.status, "language_name": l.language_name });
          }
        }

    
   
    this.filteredLanguage = filterLanguage;
  }
  languageName(LangName){
    this.languageShort = LangName;
  }
  showComment(){
    this.close= false;
    this.show=true;
    this.changedWidth = false;
    
  }
  showTitleStatus() {
    this.showStatus = true;

  }
  commentColor(){
    if(!this.changeColor){
      this.changeColor =true;
    }else{
      this.changeColor =false;
    }
  }
 // globalData:String="1. Jude Law";
 
  update(data: string) { 
    //var modifiedData = data.replace(/^\s*|\s*$/g,'');
    this.metaDataListUpdateVal = data;
    var toDate = Date();
    this.logsDetails.push({"name": "John Paul", "date": toDate, "val": data});
  }
  
  
  updateDescription(trig, data){
    this.metaDataLangUpdateVal = data;
      var toDate = Date();
      this.logsDetails.push({"name": "John Paul", "date": toDate, "val": data});
    
  }
  
  
  updateCountryDescription(trig, data){
    this.metaDataCountryUpdateVal = data;
      var toDate = Date();
      this.logsDetails.push({"name": "John Paul", "date": toDate, "val": data});
    
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
  changewidth(){
   return true;
  }
  getWidth() {
    return '100%';
  }
  sizePlus(){
    this.sizeVar=this.sizeVar+1;
   }
   sizeMinus(){
    this.sizeVar=this.sizeVar-1;
   }
// c:any =0;
//  sizePlus(){
//    this.c++
//    if(this.c<4){
//     this.sizeVar=this.sizeVar+1;
//    }else{
//      alert("Maximum limit exceeded")
//    }
  
//  }
//  m:any =0;
//  sizeMinus(){
//   this.m++
//   if(this.m<4){
//    this.sizeVar=this.sizeVar-1;
//   }else{
//     alert("Maximum limit exceeded")
//   }
//  }
  addHero(newHero: string) {
    if (newHero) {
      this.metaDataList.push(newHero);
    }
  }
openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  
}
openBox(){
  document.getElementById("compareBox").style.width = "100%";
  this.isDisabled = !this.isDisabled;
}
closeBox(){
  document.getElementById("compareBox").style.width = "0";
}
  

  onEnterKeyMeta(trig, availId){
    if(trig.keyCode==13){
        
      this.metaDataShow(availId);
    }
  }
 
  //isDisabled = true;
  flip() {
    this.isDisabled = !this.isDisabled;
  }
  valuechange(event, value){
    this.changeText = null;
    if(value==undefined){
      this.changeColor =false;
      this.changeText= "Escalaton";
    }else if(value){
      this.changeColor = true;
      this.changeText= "Escalaton";
    }else if(!value){
      this.changeColor =false;
      this.changeText= "Comment";
    }
   // console.log("jasdghasdasdasdf : "+value+ "   "+ this.changeText)
  }
  reload() {
    location.reload();
  }

  checkNaN(value){
    return Number.isNaN(value);
  }
}
