import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodesComponent } from './tv-episodes.component';
import { HttpService } from '../../services/http.service';
import { HttpTestingController, HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { MatProgressBarModule } from '../../../../node_modules/@angular/material';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { NgCircleProgressModule } from '../../../../node_modules/ng-circle-progress';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { TvSeriesComponent } from '../tv-series/tv-series.component';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';

describe('TvEpisodesComponent', () => {
  let component: TvEpisodesComponent;
  let fixture: ComponentFixture<TvEpisodesComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  const episodeData={
    "resultData": [
        {
            "PercentageOfCompletion": "0",
            "AccontsCount": 14,
            "AccontsCompletedCount": 0,
            "UniqueLanguagesCount": 1,
            "ImageUrl": "",
            "EpisodeNumber": "60001223512022698",
            "UniqueCountriesCount": 1,
            "AccontsPendingCount": 14,
            "CountriesPendingCount": 1,
            "SeriesName": "The Parent 'Hood",
            "GlobalTitle": "The Parent 'Hood: Season 2 Episode 17 Torn Between Two Brothers",
            "LanguagesPendingCount": 1,
            "CountriesCompletedCount": 0,
            "TitleStatus": [
                {
                    "StatusDate": "2019-09-30 04:08:48.188",
                    "StatusMessage": "Announced"
                }
            ],
            "LanguagesCompletedCount": 0,
            "PendingRatings": 1,
            "SeasonNumber": "2",
            "PendingTranslations": 1
        }, {
          "PercentageOfCompletion": "0",
          "AccontsCount": 14,
          "AccontsCompletedCount": 0,
          "UniqueLanguagesCount": 1,
          "ImageUrl": "",
          "EpisodeNumber": "60001223222022698",
          "UniqueCountriesCount": 1,
          "AccontsPendingCount": 14,
          "CountriesPendingCount": 1,
          "SeriesName": "The Parent 'Hood",
          "GlobalTitle": "The Parent 'Hood: Season 2 Episode 2 A Kiss Is Just A Kiss",
          "LanguagesPendingCount": 1,
          "CountriesCompletedCount": 0,
          "TitleStatus": [
              {
                  "StatusDate": "2019-09-30 04:08:47.465",
                  "StatusMessage": "Announced"
              }
          ],
          "LanguagesCompletedCount": 0,
          "PendingRatings": 1,
          "SeasonNumber": "2",
          "PendingTranslations": 1
      }
      ]}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvEpisodesComponent, AvailFilterComponent, TvSeriesComponent],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule, NgCircleProgressModule.forRoot({
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
      }), MatProgressBarModule],
      providers: [HttpService, {
        provide: ActivatedRoute, useValue:
        {
          snapshot:
          {
            queryParams:
              { avail: 'TC Dec142018', series: 'Gotham' }
          }
        }
      }]
    })
      .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TvEpisodesComponent);
    component = fixture.componentInstance;
    component.orderedEpisodeListResp=episodeData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
    expect(component.countriesClicked ).toBeTruthy;
  });
  it('should call showTranslations', () => {
    component.showTranslations(1);
    expect(component.account).toEqual(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.translationsClicked  ).toBeTruthy;
  });
  it('should get episode details',()=>{
    component.getEpisodeDetails();
  })
  it('should able to click', () => {
    let tab='episodes'
component.selectTab(60001223512022698,tab);
expect(component.episodeNum).toEqual(60001223512022698);
// expect(component.episodeStatus).toBeTruthy;
// expect(component.langStatus).toBeFalsy;
// expect(component.transStatus).toBeFalsy;
// expect(component.episodeNum ).toEqual(60001223512022698);
  })
  it('should able to select countries',()=>{
    let title = 60001223512022698, tab = 'countries';
    component.selectTab(title, tab);
  })
  it('should able to select languages',()=>{
    let title = 60001223512022698, tab = 'languages';
    component.selectTab(title, tab);
  })
  it('should imgClickTrack',()=>{
    component.imgClickTrack(1,1);
    expect(component.selectedRecord.ImageUrl).toEqual('');
    expect(component.uploadStatus).toBeFalsy;
    expect(component.uploadStatus).toBeTruthy;
  })
  it('should getProgressSwitch',()=>{
   // component.getProgress(component.orderedEpisodeList[0].TitleStatus);
    expect(component.getProgressSwitch('Announced',0)).toEqual(0)
   
    //component.getProgressSwitch(1,1);
  
  })
  it('should get the episode details',()=>{
    component.getEpisodeDetails();
  })
});
