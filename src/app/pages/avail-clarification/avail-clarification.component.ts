import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-avail-clarification',
  templateUrl: './avail-clarification.component.html',
  styleUrls: ['./avail-clarification.component.scss']
})
export class AvailClarificationComponent implements OnInit {
  showDetails: any;
  showStatus: any;
  width: any;
  posts: any;
  availsList: any = [];
  showTitlesText: any;
  sidenav_title: any;
  showCountriesText: any;
  selected: any;
  availsResponse: any = [];
  pendingTitlesWidth: any;
  availsData: any = [];
  showLanguagesText: any;
  title: any;
  parentMessage:any;
  completedWidth: any;
  pendingWidth: any;
  semicircle: boolean = false;
  availName: string = 'Avails'
  titlesClicked: boolean = false;
  countriesClicked: boolean = false;
  languagesClicked: boolean = false;

  constructor(private httpService: HttpService,private activatedRoute: ActivatedRoute) {
    this.parentMessage = "Films";
  }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.sidenav_title = params['sidenav'];
    });
    this.title = "Avails"
    this.showDetails = -1;
    this.width = 75;
    this.availsList = {"resultData":[{"StartDate":"10/17/2019","AvailName":"FC Aug272019","AnnouncementDate":"08/27/2019","DueDate":"11/07/2019","TitleData":{"PendingTitlesCount":348,"AccontsCompletedCount":0,"UniqueLanguagesCount":28,"TitleCountriesCount":560,"AvailPercentage":0,"UniqueCountriesCount":112,"AccontsPendingCount":27,"CountriesPendingCount":112,"LanguagesPendingCount":28,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":348,"LanguagesCompletedCount":0,"PendingRatings":4595,"PendingTranslations":4595,"UniqueAccontsCount":27}},{"StartDate":"10/17/2019","AvailName":"FC Jan092019","AnnouncementDate":"01/09/2019","DueDate":"11/07/2019","TitleData":{"PendingTitlesCount":238,"AccontsCompletedCount":0,"UniqueLanguagesCount":9,"TitleCountriesCount":342,"AvailPercentage":0,"UniqueCountriesCount":32,"AccontsPendingCount":38,"CountriesPendingCount":32,"LanguagesPendingCount":9,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":238,"LanguagesCompletedCount":0,"PendingRatings":386,"PendingTranslations":386,"UniqueAccontsCount":38}},{"StartDate":"10/17/2019","AvailName":"FN Aug272019","AnnouncementDate":"08/27/2019","DueDate":"10/24/2019","TitleData":{"PendingTitlesCount":25,"AccontsCompletedCount":0,"UniqueLanguagesCount":14,"TitleCountriesCount":167,"AvailPercentage":0,"UniqueCountriesCount":71,"AccontsPendingCount":10,"CountriesPendingCount":71,"LanguagesPendingCount":14,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":25,"LanguagesCompletedCount":0,"PendingRatings":169,"PendingTranslations":169,"UniqueAccontsCount":10}},{"StartDate":"10/17/2019","AvailName":"FN Jan092019","AnnouncementDate":"01/09/2019","DueDate":"10/24/2019","TitleData":{"PendingTitlesCount":403,"AccontsCompletedCount":0,"UniqueLanguagesCount":5,"TitleCountriesCount":442,"AvailPercentage":0,"UniqueCountriesCount":9,"AccontsPendingCount":24,"CountriesPendingCount":9,"LanguagesPendingCount":5,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":403,"LanguagesCompletedCount":0,"PendingRatings":465,"PendingTranslations":465,"UniqueAccontsCount":24}},{"StartDate":"10/17/2019","AvailName":"FT Aug272019","AnnouncementDate":"08/27/2019","DueDate":"10/24/2019","TitleData":{"PendingTitlesCount":20,"AccontsCompletedCount":0,"UniqueLanguagesCount":15,"TitleCountriesCount":109,"AvailPercentage":0,"UniqueCountriesCount":56,"AccontsPendingCount":21,"CountriesPendingCount":56,"LanguagesPendingCount":15,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":20,"LanguagesCompletedCount":0,"PendingRatings":114,"PendingTranslations":114,"UniqueAccontsCount":21}},{"StartDate":"10/17/2019","AvailName":"LDC Jan092019","AnnouncementDate":"01/09/2019","DueDate":"11/07/2019","TitleData":{"PendingTitlesCount":88,"AccontsCompletedCount":0,"UniqueLanguagesCount":11,"TitleCountriesCount":108,"AvailPercentage":0,"UniqueCountriesCount":19,"AccontsPendingCount":11,"CountriesPendingCount":19,"LanguagesPendingCount":11,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":88,"LanguagesCompletedCount":0,"PendingRatings":123,"PendingTranslations":123,"UniqueAccontsCount":11}}]}

   
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': '48%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': '12px'
    };
  }
 
    }

 