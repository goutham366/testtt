import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodesComponent } from './tv-episodes.component';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { NgCircleProgressModule } from '../../../../node_modules/ng-circle-progress';
import { MatProgressBarModule } from '../../../../node_modules/@angular/material';
import { HttpClientModule, HttpRequest, HttpBackend } from '../../../../node_modules/@angular/common/http';
import { HttpService } from '../../services/http.service';
import { HttpTestingController, HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { ScrollingModule } from '../../../../node_modules/@angular/cdk/scrolling';
import { HttpClientTestingBackend } from '../../../../node_modules/@angular/common/http/testing/src/backend';
import { request } from 'https';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Observable, of } from 'rxjs';
xdescribe('TvEpisodesComponent', () => {
  let component: TvEpisodesComponent;
  let fixture: ComponentFixture<TvEpisodesComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;

  //mockActiveRoute = new ActivatedRoute();
  const mockActiveRoute = { 
    queryParams: of({  availName: 'TN%20Aug162019',seriesName:'Claws',seasonNumber:3  }) 
  };

  const episodeData={
    "resultData": [
        {
            "PercentageOfCompletion": "0",
            "AccontsCount": 14,
            "AccontsCompletedCount": 0,
            "UniqueLanguagesCount": 1,
            "ImageUrl": "",
            "EpisodeNumber": "60001235732075823",
            "UniqueCountriesCount": 1,
            "AccontsPendingCount": 14,
            "CountriesPendingCount": 1,
            "SeriesName": "DC Super Hero Girls",
            "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
            "LanguagesPendingCount": 1,
            "CountriesCompletedCount": 0,
            "TitleStatus": [
                {
                    "StatusDate": "2019-10-30 06:20:36.864",
                    "StatusMessage": "Announced"
                }
            ],
            "LanguagesCompletedCount": 0,
            "PendingRatings": 1,
            "SeasonNumber": "1",
            "PendingTranslations": 1
        },
        {
            "PercentageOfCompletion": "0",
            "AccontsCount": 14,
            "AccontsCompletedCount": 0,
            "UniqueLanguagesCount": 1,
            "ImageUrl": "",
            "EpisodeNumber": "60001235732075824",
            "UniqueCountriesCount": 1,
            "AccontsPendingCount": 14,
            "CountriesPendingCount": 1,
            "SeriesName": "DC Super Hero Girls",
            "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
            "LanguagesPendingCount": 1,
            "CountriesCompletedCount": 0,
            "TitleStatus": [
                {
                    "StatusDate": "2019-10-30 06:20:36.864",
                    "StatusMessage": "Data Collation"
                }
            ],
            "LanguagesCompletedCount": 0,
            "PendingRatings": 1,
            "SeasonNumber": "1",
            "PendingTranslations": 1
        },
        {
          "PercentageOfCompletion": "0",
          "AccontsCount": 14,
          "AccontsCompletedCount": 0,
          "UniqueLanguagesCount": 1,
          "ImageUrl": "",
          "EpisodeNumber": "60001235732075825",
          "UniqueCountriesCount": 1,
          "AccontsPendingCount": 14,
          "CountriesPendingCount": 1,
          "SeriesName": "DC Super Hero Girls",
          "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
          "LanguagesPendingCount": 1,
          "CountriesCompletedCount": 0,
          "TitleStatus": [
              {
                  "StatusDate": "2019-10-30 06:20:36.864",
                  "StatusMessage": "Quality Audit"
              }
          ],
          "LanguagesCompletedCount": 0,
          "PendingRatings": 1,
          "SeasonNumber": "1",
          "PendingTranslations": 1
      },
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 14,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 1,
        "ImageUrl": "",
        "EpisodeNumber": "60001235732075826",
        "UniqueCountriesCount": 1,
        "AccontsPendingCount": 14,
        "CountriesPendingCount": 1,
        "SeriesName": "DC Super Hero Girls",
        "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
        "LanguagesPendingCount": 1,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
            {
                "StatusDate": "2019-10-30 06:20:36.864",
                "StatusMessage": "Data Delivery"
            }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 1,
        "SeasonNumber": "1",
        "PendingTranslations": 1
    }
    ]
}
  const orderData={
    "resultData": [
        {
            "PercentageOfCompletion": "0",
            "AccontsCount": 14,
            "AccontsCompletedCount": 0,
            "UniqueLanguagesCount": 1,
            "ImageUrl": "",
            "EpisodeNumber": "60001235732075823",
            "UniqueCountriesCount": 1,
            "AccontsPendingCount": 14,
            "CountriesPendingCount": 1,
            "SeriesName": "DC Super Hero Girls",
            "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
            "LanguagesPendingCount": 1,
            "CountriesCompletedCount": 0,
            "TitleStatus": [
                {
                    "StatusDate": "2019-10-30 06:20:36.864",
                    "StatusMessage": "Announced"
                }
            ],
            "LanguagesCompletedCount": 0,
            "PendingRatings": 1,
            "SeasonNumber": "1",
            "PendingTranslations": 1
        },
        {
            "PercentageOfCompletion": "0",
            "AccontsCount": 14,
            "AccontsCompletedCount": 0,
            "UniqueLanguagesCount": 1,
            "ImageUrl": "",
            "EpisodeNumber": "60001235732075824",
            "UniqueCountriesCount": 1,
            "AccontsPendingCount": 14,
            "CountriesPendingCount": 1,
            "SeriesName": "DC Super Hero Girls",
            "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
            "LanguagesPendingCount": 1,
            "CountriesCompletedCount": 0,
            "TitleStatus": [
                {
                    "StatusDate": "2019-10-30 06:20:36.864",
                    "StatusMessage": "Data Collation"
                }
            ],
            "LanguagesCompletedCount": 0,
            "PendingRatings": 1,
            "SeasonNumber": "1",
            "PendingTranslations": 1
        },
        {
          "PercentageOfCompletion": "0",
          "AccontsCount": 14,
          "AccontsCompletedCount": 0,
          "UniqueLanguagesCount": 1,
          "ImageUrl": "",
          "EpisodeNumber": "60001235732075825",
          "UniqueCountriesCount": 1,
          "AccontsPendingCount": 14,
          "CountriesPendingCount": 1,
          "SeriesName": "DC Super Hero Girls",
          "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
          "LanguagesPendingCount": 1,
          "CountriesCompletedCount": 0,
          "TitleStatus": [
              {
                  "StatusDate": "2019-10-30 06:20:36.864",
                  "StatusMessage": "Quality Audit"
              }
          ],
          "LanguagesCompletedCount": 0,
          "PendingRatings": 1,
          "SeasonNumber": "1",
          "PendingTranslations": 1
      },
      {
        "PercentageOfCompletion": "0",
        "AccontsCount": 14,
        "AccontsCompletedCount": 0,
        "UniqueLanguagesCount": 1,
        "ImageUrl": "",
        "EpisodeNumber": "60001235732075826",
        "UniqueCountriesCount": 1,
        "AccontsPendingCount": 14,
        "CountriesPendingCount": 1,
        "SeriesName": "DC Super Hero Girls",
        "GlobalTitle": "DC Super Hero Girls: Season 1 Episode 6 #HateTriangle",
        "LanguagesPendingCount": 1,
        "CountriesCompletedCount": 0,
        "TitleStatus": [
            {
                "StatusDate": "2019-10-30 06:20:36.864",
                "StatusMessage": "Data Delivery"
            }
        ],
        "LanguagesCompletedCount": 0,
        "PendingRatings": 1,
        "SeasonNumber": "1",
        "PendingTranslations": 1
    }
    ]
}
const newdata={"resultData":[{"PercentageOfCompletion":"0","AccontsCount":5,"AccontsCompletedCount":0,"UniqueLanguagesCount":1,"ImageUrl":"","EpisodeNumber":"60001229492082149","UniqueCountriesCount":1,"AccontsPendingCount":5,"CountriesPendingCount":1,"SeriesName":"Claws","GlobalTitle":"Claws: Season 3 Episode 9 Melba Toast","LanguagesPendingCount":1,"CountriesCompletedCount":0,"TitleStatus":[{"StatusDate":"2019-10-31 08:11:27.710","StatusMessage":"Announced"}],"LanguagesCompletedCount":0,"PendingRatings":1,"SeasonNumber":"3","PendingTranslations":1},{"PercentageOfCompletion":"0","AccontsCount":5,"AccontsCompletedCount":0,"UniqueLanguagesCount":1,"ImageUrl":"","EpisodeNumber":"60001229502082149","UniqueCountriesCount":1,"AccontsPendingCount":5,"CountriesPendingCount":1,"SeriesName":"Claws","GlobalTitle":"Claws: Season 3 Episode 10 Finna","LanguagesPendingCount":1,"CountriesCompletedCount":0,"TitleStatus":[{"StatusDate":"2019-10-31 08:11:27.713","StatusMessage":"Announced"}],"LanguagesCompletedCount":0,"PendingRatings":1,"SeasonNumber":"3","PendingTranslations":1}]}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvEpisodesComponent, AvailFilterComponent],
      imports: [RouterTestingModule,ScrollingModule, MatProgressBarModule, HttpClientModule, HttpClientTestingModule, NgCircleProgressModule.forRoot({
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
      })],
      providers: [HttpService, { provide: ActivatedRoute, useValue: mockActiveRoute }
]

    })
      .compileComponents();
    
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvEpisodesComponent);
    component = fixture.componentInstance;
    component.orderedEpisodeListResp = episodeData;
    component.unorderedEpisodeList = episodeData.resultData;
    component.orderedEpisodeList = orderData.resultData;
    
    
    component.availName='TN%20Aug162019';
    component.seriesName='Claws';
    component.seasonNumber=3;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should call getEpisode', () => {
    component.getEpisodeDetails();
  })
  it('should call ngOnit', () => {
    component.ngOnInit();
    expect(component.account).toEqual(-1);
    expect(component.showStatus).toEqual(-1);
  })
  it('shoulkd call queryparams',()=>{
  
  //expect(mockActiveRoute.snapshot.queryParams.availName).toEqual('TN%20Aug162019');
  })
  it('should call service', () => {
    let availname='TN%20Aug162019',SeriesName='Claws',SeasonNumber=3;
    service.getEpisodeDetails('TN%20Aug162019','Claws',3).subscribe(data=>{
      expect(component.orderedEpisodeListResp).toEqual(data);
    });
   
    const calls = httpMock.match((request) => {
     // console.log('availnameavailname',`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/avails/TV/${availname}/${SeriesName}/${SeasonNumber}`)
      return request.urlWithParams == `http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/avails/TV/${availname}/${SeriesName}/${SeasonNumber}` &&
             request.method === 'GET';
    });
   //calls.flush(episodeData);
   httpMock.expectNone(`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/avails/TV`)
    expect(component.orderedEpisodeListResp).toEqual(episodeData);
    httpMock.verify();
   
  })

  it('should call showTitles', () => {
    component.showTitleStatus(1);
    expect(component.showStatus).toEqual(1);
    expect(component.episodeStatus).toBeFalsy;
    expect(component.langStatus).toBeFalsy;
    expect(component.transStatus).toBeFalsy;
    expect(component.account).toEqual(1);

  });
  it('should call showAccounts', () => {
    component.showAccounts(1);
    expect(component.account).toEqual(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.acccountClicked).toBeTruthy;
  });
  it('should call showCountries', () => {
    component.showCountries(1);
    expect(component.account).toEqual(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.countriesClicked).toBeTruthy;
  });
  it('should call showTranslations', () => {
    component.showTranslations(1);
    expect(component.account).toEqual(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.translationsClicked).toBeTruthy;
  });
  it('should able to click', () => {
    let tab = 'episodes'
    component.selectTab(60000838122062008, tab);
    for (let i = 0; i < orderData.resultData.length; i++) {
      if (component.orderedEpisodeList[i].EpisodeNumber == 60001223512022698)
        expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60001223512022698);

      if (tab === 'episodes') {

        expect(component.episodeStatus).toBeTruthy;
        expect(component.langStatus).toBeFalsy;
        expect(component.transStatus).toBeFalsy;
        // expect(component.episodeNum ).toEqual(component.orderedEpisodeList[i].EpisodeNumber);
      }

    }
    //expect(component.episodeNum ).toEqual(60001223512022698);
  })
  it('should able to select countries', () => {
    let title = 60000838122062008, tab = 'countries';
    // expect(component.episodeNum).toEqual(60001198572016005);
    component.selectTab(title, tab);
    for (let i = 0; i < orderData.resultData.length; i++) {
      if (component.orderedEpisodeList[i].EpisodeNumber == 60000838122062008) {
        expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60000838122062008);
        if (tab === 'countries') { 
          console.log('inside episodes@@@@@@@@@')
          expect(component.episodeStatus).toBeFalsy;
          expect(component.langStatus).toBeTruthy;
          expect(component.transStatus).toBeFalsy;
          // expect(component.episodeNum ).toEqual(component.orderedEpisodeList[i].EpisodeNumber);
        } 
      }
    }
  })
  it('if path', () => {
    for (let i = 0; i < orderData.resultData.length; i++) {
      if (component.orderedEpisodeList[i].EpisodeNumber == 60000838122062008) {
        expect(component.orderedEpisodeList[i].EpisodeNumber).toEqual(60000838122062008);
      }
    }
  })

  it('should able to select languages', () => {
    let title = 60000838122062008, tab = 'languages';
    //  expect(component.episodeNum).toEqual(60001198572016005);
    component.selectTab(title, tab);
  })
  it('should imgClickTrack', () => {
    component.imgClickTrack(1, 1);

  })
  it('should get episode details', () => {
    component.sortBy('EpisodeNumber')
    expect(component.unorderedEpisodeList.sort()).toEqual(orderData.resultData);
  })
  it('should getProgressSwitch', () => {
          component.getProgress(component.orderedEpisodeList[1].TitleStatus);
        expect(component.getProgressSwitch('Data Collation',1)).toBe(1)
  });
  it('should getProgressSwitch', () => {
         component.getProgress(component.orderedEpisodeList[0].TitleStatus);
           expect(component.getProgressSwitch('Announced',1)).toBe(0)
  });
  it('should getProgressSwitch', () => {
    component.getProgress(component.orderedEpisodeList[2].TitleStatus);

   expect(component.getProgressSwitch('Quality Audit',1)).toBe(2);
});
it('should getProgressSwitch', () => {
  component.getProgress(component.orderedEpisodeList[3].TitleStatus);
 expect(component.getProgressSwitch('Data Delivery',1)).toBe(3);
 
});
it('should call getProgressFill',()=>{
  let status=[{StatusDate: "2019-10-30 06:20:37.116", StatusMessage: "Announced"}];
  component.getProgressFill(status);
  let length=status.length;
  expect(status[length-1].StatusMessage).toEqual('')
})
  it('should imgClickTrack', () => {
    component.imgClickTrack(1, 1);

    expect(component.uploadStatus).toBeFalsy;
    expect(component.uploadStatus).toBeTruthy;
    // let file[] = new File([new ArrayBuffer(2e+5)], 'test-file.jpg', { lastModified: null, type: 'image/jpeg' });
    //component.handleFileInputForAdd(file);

  })
  it('should call trigger upload', () => {

    component.triggerUpload();
  })
});


