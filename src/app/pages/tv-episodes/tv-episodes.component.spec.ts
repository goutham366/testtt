import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodesComponent } from './tv-episodes.component';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { NgCircleProgressModule } from '../../../../node_modules/ng-circle-progress';
import { MatProgressBarModule } from '../../../../node_modules/@angular/material';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpService } from '../../services/http.service';
import { HttpTestingController, HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';

describe('TvEpisodesComponent', () => {
  let component: TvEpisodesComponent;
  let fixture: ComponentFixture<TvEpisodesComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  const episodeData = {
    "resultData": [
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 3,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 1,
        "ImageUrl": "",
        "EpisodeNumber": "60000838122062008",
        "UniqueCountriesCount": 3,
        "AccontsPendingCount": 3,
        "CountriesPendingCount": 3,
        "SeriesName": "Hart of Dixie",
        "GlobalTitle": "Hart of Dixie: Season 2 Episode 19 This Kiss",
        "LanguagesPendingCount": 1,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
          {
            "StatusDate": "2019-10-04 06:14:33.393",
            "StatusMessage": "Announced"
          }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 1,
        "SeasonNumber": "2",
        "PendingTranslations": 1
      },
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 4,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 2,
        "ImageUrl": "",
        "EpisodeNumber": "60000786952062008",
        "UniqueCountriesCount": 4,
        "AccontsPendingCount": 4,
        "CountriesPendingCount": 4,
        "SeriesName": "Hart of Dixie",
        "GlobalTitle": "Hart of Dixie: The Complete Second Season",
        "LanguagesPendingCount": 2,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
          {
            "StatusDate": "2019-10-03 11:25:01.906",
            "StatusMessage": "Announced"
          }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 2,
        "SeasonNumber": "2",
        "PendingTranslations": 2
      }]
  }
  const orderData = {
    "resultData": [
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 4,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 2,
        "ImageUrl": "",
        "EpisodeNumber": "60000786952062008",
        "UniqueCountriesCount": 4,
        "AccontsPendingCount": 4,
        "CountriesPendingCount": 4,
        "SeriesName": "Hart of Dixie",
        "GlobalTitle": "Hart of Dixie: The Complete Second Season",
        "LanguagesPendingCount": 2,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
          {
            "StatusDate": "2019-10-03 11:25:01.906",
            "StatusMessage": "Announced"
          }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 2,
        "SeasonNumber": "2",
        "PendingTranslations": 2
      },
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 3,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 1,
        "ImageUrl": "",
        "EpisodeNumber": "60000838122062008",
        "UniqueCountriesCount": 3,
        "AccontsPendingCount": 3,
        "CountriesPendingCount": 3,
        "SeriesName": "Hart of Dixie",
        "GlobalTitle": "Hart of Dixie: Season 2 Episode 19 This Kiss",
        "LanguagesPendingCount": 1,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
          {
            "StatusDate": "2019-10-04 06:14:33.393",
            "StatusMessage": "Announced"
          }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 1,
        "SeasonNumber": "2",
        "PendingTranslations": 1
      },
    ]
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvEpisodesComponent, AvailFilterComponent],
      imports: [RouterTestingModule, MatProgressBarModule, HttpClientModule, HttpClientTestingModule, NgCircleProgressModule.forRoot({
        "backgroundPadding": 7,
        "radius": 28,
        "space": -2,
        "maxPercent": 100,
        "unitsColor": "#008040",
        "outerStrokeWidth": 2,
        "outerStrokeColor": "#008040",
        "innerStrokeColor": "#e7e8ea",
        "innerStrokeWidth": 2,
        "titleColor": "#008040",
        "titleFontSize": "12",
        "subtitleColor": "#008040",
        "animateTitle": false,
        "animationDuration": 1000,
        "showTitle": true,
        "showSubtitle": false,
        "showUnits": true,
        "clockwise": false
      })]
    })
      .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvEpisodesComponent);
    component = fixture.componentInstance;
    component.orderedEpisodeListResp = episodeData;
    component.unorderedEpisodeList = episodeData.resultData;
    component.orderedEpisodeList = orderData.resultData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  // it('should call getEpisode', () => {
  //   component.getEpisodeDetails();
  // })
  // it('should call service', () => {
  //   // component.getEpisodeDetails();
  //   service.getEpisodeDetails('TC Dec072018', 'Hart of Dixie', '2');
  //   console.log('entered into service');
  //   let url = "https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/avails/TV/TC%20Dec072018/Hart%20of%20Dixie/2";
  //   const request1 = httpMock.expectOne(url);
  //   expect(request1.request.method).toBe('GET');
  //   request1.flush(episodeData);
  //   httpMock.verify();
  // })
  // it('should call showTitles', () => {
  //   component.showTitleStatus(1);
  //   expect(component.showStatus).toEqual(1);
  //   expect(component.episodeStatus).toBeFalsy;
  //   expect(component.langStatus).toBeFalsy;
  //   expect(component.transStatus).toBeFalsy;
  //   expect(component.account).toEqual(1);

  // });
  // it('should call showAccounts', () => {
  //   component.showAccounts(1);
  //   expect(component.account).toEqual(1);
  //   expect(component.showStatus).toEqual(-1);
  //   expect(component.acccountClicked).toBeTruthy;
  // });
  // it('should call showCountries', () => {
  //   component.showCountries(1);
  //   expect(component.account).toEqual(1);
  //   expect(component.showStatus).toEqual(-1);
  //   expect(component.countriesClicked).toBeTruthy;
  // });
  // it('should call showTranslations', () => {
  //   component.showTranslations(1);
  //   expect(component.account).toEqual(1);
  //   expect(component.showStatus).toEqual(-1);
  //   expect(component.translationsClicked).toBeTruthy;
  // });
  // it('should able to click', () => {
  //   let tab = 'episodes'
  //   component.selectTab(60000838122062008, tab);
  //   for (let i = 0; i < orderData.resultData.length; i++) {
  //     if (component.orderedEpisodeList[i].EpisodeNumber == 60001223512022698)
  //       expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60001223512022698);

  //     if (tab === 'episodes') {
  //       console.log('inside episodes@@@@@@@@@')
  //       expect(component.episodeStatus).toBeTruthy;
  //       expect(component.langStatus).toBeFalsy;
  //       expect(component.transStatus).toBeFalsy;
  //       // expect(component.episodeNum ).toEqual(component.orderedEpisodeList[i].EpisodeNumber);
  //     }

  //   }

  //   //expect(component.episodeNum ).toEqual(60001223512022698);
  // })
  // it('should able to select countries', () => {
  //   let title = 60000838122062008, tab = 'countries';
  //   // expect(component.episodeNum).toEqual(60001198572016005);
  //   component.selectTab(title, tab);
  //   // for (let i = 0; i < orderData.resultData.length; i++) {
  //   //   if (component.orderedEpisodeList[i].EpisodeNumber == 60000838122062008) {
  //   //     expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60000838122062008);
  //   //     if (tab === 'countries') {
  //   //       console.log('inside episodes@@@@@@@@@')
  //   //       expect(component.episodeStatus).toBeFalsy;
  //   //       expect(component.langStatus).toBeTruthy;
  //   //       expect(component.transStatus).toBeFalsy;
  //   //       // expect(component.episodeNum ).toEqual(component.orderedEpisodeList[i].EpisodeNumber);
  //   //     }
  //   //   }
  //   // }
  // })
  // it('if path', () => {
  //   for (let i = 0; i < orderData.resultData.length; i++) {
  //     if (component.orderedEpisodeList[i].EpisodeNumber == 60000838122062008) {
  //       expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60000838122062008);
  //     }
  //   }
  // })

  // it('should able to select languages', () => {
  //   let title = 60000838122062008, tab = 'languages';
  //   //  expect(component.episodeNum).toEqual(60001198572016005);
  //   component.selectTab(title, tab);
  // })
  // it('should imgClickTrack', () => {
  //   component.imgClickTrack(1, 1);

  // })
  // it('should get episode details', () => {
  //   component.sortBy('EpisodeNumber')
  //   expect(component.unorderedEpisodeList.sort()).toEqual(orderData.resultData);
  // })
  // it('should getProgressSwitch', () => {
  //   // for(let i=0;i<episodeData.resultData;i++){}
  //   //    component.getProgress(episodeData[0].resultData.TitleStatus);
  //   //     //expect(component.getProgressSwitch('Announced',0)).toBe(0);
  //   //     expect(component.getProgressSwitch('Data Collation',1)).toBe(1)
  // });
  // it('should imgClickTrack', () => {
  //   component.imgClickTrack(1, 1);

  //   expect(component.uploadStatus).toBeFalsy;
  //   expect(component.uploadStatus).toBeTruthy;
  //   let file[] = new File([new ArrayBuffer(2e+5)], 'test-file.jpg', { lastModified: null, type: 'image/jpeg' });
  //   component.handleFileInputForAdd(file);

  // })
  // it('should call trigger upload', () => {

  //   component.triggerUpload();
  // })
});


