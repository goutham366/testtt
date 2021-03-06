import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-metadata-language',
  templateUrl: './metadata-language.component.html',
  styleUrls: ['./metadata-language.component.scss','../metadata/metadata.component.scss']
})
export class MetadataLanguageComponent implements OnInit {
  availDetailsViewList: any;
  clickedOnLanguage: boolean;
  filteredLanguage: any[];
  availLanguageList: Object;
  comments: any;
  logsDetails: any;
  user : any;
  languageShort: any;
  @Input() childMessage :any;
  
  
  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.languageShort='English';
    this.clickedOnLanguage = false;
    this.user = this.metaDataListUpdateVal;
    
   }

  ngOnInit() {
    this.httpService.getmetadataLangConList().subscribe(data => {
      this.availDetailsViewList = data;
      console.log('Avails Details data', this.availDetailsViewList);
    })
    this.httpService.getLangMetadata().subscribe(data => {
      this.availLanguageList = data;
      console.log('Avails Details data', this.availLanguageList);
    })
    console.log("jjjjjjj : "+this.childMessage)
  }
   addDescription(trigg, newComment: string) {
    if(trigg.keyCode==13){
     
      if (newComment) {
        var toDate = Date();
        this.comments.push({"name": newComment, "date": toDate});
      }
  }
  }
  filterlanguages(data) {
    var availListC = this.availDetailsViewList;
    this.clickedOnLanguage = true;
    var filterLanguage = [];
    for (let g of availListC) {
      for (let h of g.avail_details) {
        for (let l of h.languages) {
          if (l.status == data) {
            filterLanguage.push({ "status": l.status, "language_name": l.language_name });
          }
        }

      }
    }
    this.filteredLanguage = filterLanguage;
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
  }
  languageName(LangName){
    this.languageShort = LangName;
  }
}

