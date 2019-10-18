import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvailDashboardComponent } from './avail-dashboard.component';
import { HttpService } from '../../services/http.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';

describe('AvailDashboardComponent', () => {
  let component: AvailDashboardComponent;
  let fixture: ComponentFixture<AvailDashboardComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  const availData = {"resultData":[{"StartDate":"09/24/2019","AvailName":"FC Jun112019",
  "AnnouncementDate":["06/11/2019"],"DueDate":"10/15/2019","TitleData":{"PendingTitlesCount":1380,
  "AccontsCompletedCount":0,"UniqueLanguagesCount":13,"TitleCountriesCount":1713,
  "AvailPercentage":0,"UniqueCountriesCount":40,"AccontsPendingCount":56,
  "CountriesPendingCount":40,"LanguagesPendingCount":13,"CountriesCompletedCount":0,
  "CompletedTitlesCount":0,"TitlesCount":1380,"LanguagesCompletedCount":0,"PendingRatings":1744,
  "PendingTranslations":1744,"UniqueAccontsCount":56}},{"StartDate":"09/24/2019",
  "AvailName":"FT Jun112019","AnnouncementDate":["06/11/2019"],"DueDate":"09/26/2019","TitleData":
  {"PendingTitlesCount":45,"AccontsCompletedCount":0,"UniqueLanguagesCount":19,
  "TitleCountriesCount":89,"AvailPercentage":0,"UniqueCountriesCount":32,"AccontsPendingCount":48,
  "CountriesPendingCount":32,"LanguagesPendingCount":19,"CountriesCompletedCount":0,
  "CompletedTitlesCount":0,"TitlesCount":45,"LanguagesCompletedCount":0,
  "PendingRatings":114,"PendingTranslations":114,"UniqueAccontsCount":48}},
  {"StartDate":"09/24/2019","AvailName":"FN Jun112019","AnnouncementDate":["06/11/2019"],
  "DueDate":"09/29/2019","TitleData":{"PendingTitlesCount":10,"AccontsCompletedCount":0,
  "UniqueLanguagesCount":7,"TitleCountriesCount":48,"AvailPercentage":0,"UniqueCountriesCount":44,
  "AccontsPendingCount":32,"CountriesPendingCount":44,"LanguagesPendingCount":7,
  "CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":10,
  "LanguagesCompletedCount":0,"PendingRatings":49,"PendingTranslations":49,
  "UniqueAccontsCount":32}},{"StartDate":"09/25/2019","AvailName":"FT Nov202018",
  "AnnouncementDate":["11/20/2018"],"DueDate":"09/27/2019","TitleData":{"PendingTitlesCount":85,
  "AccontsCompletedCount":0,"UniqueLanguagesCount":21,"TitleCountriesCount":254,"AvailPercentage"
  :0,"UniqueCountriesCount":76,"AccontsPendingCount":56,"CountriesPendingCount":76,
  "LanguagesPendingCount":21,"CountriesCompletedCount":0,"CompletedTitlesCount":0,
  "TitlesCount":85,"LanguagesCompletedCount":0,"PendingRatings":266,"PendingTranslations":266,
  "UniqueAccontsCount":56}},{"StartDate":"09/25/2019","AvailName":"FC Nov202018",
  "AnnouncementDate":["11/20/2018"],"DueDate":"10/16/2019","TitleData":{"PendingTitlesCount":1162,
  "AccontsCompletedCount":0,"UniqueLanguagesCount":39,"TitleCountriesCount":6555,"AvailPercentage"
  :0,"UniqueCountriesCount":122,"AccontsPendingCount":64,"CountriesPendingCount":122,
  "LanguagesPendingCount":39,"CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":
  1162,"LanguagesCompletedCount":0,"PendingRatings":6802,"PendingTranslations":6802,
  "UniqueAccontsCount":64}},{"StartDate":"09/25/2019","AvailName":"FN Nov202018",
  "AnnouncementDate":["11/20/2018"],"DueDate":"09/30/2019","TitleData":
  {"PendingTitlesCount":23,"AccontsCompletedCount":0,"UniqueLanguagesCount":8,
  "TitleCountriesCount":107,"AvailPercentage":0,"UniqueCountriesCount":46,
  "AccontsPendingCount":37,"CountriesPendingCount":46,"LanguagesPendingCount":8,
  "CountriesCompletedCount":0,"CompletedTitlesCount":0,"TitlesCount":23,"LanguagesCompletedCount"
  :0,"PendingRatings":107,"PendingTranslations":107,"UniqueAccontsCount":37}}]}

  beforeEach(async(() => {   
    TestBed.configureTestingModule({
      declarations: [AvailDashboardComponent],
      providers:[HttpService],
      imports: [RoundProgressModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
      service = TestBed.get(HttpService);
      httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should able to get availdata response', () => {
      service.getAvailData();
      let url = "https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/avails/FILMS";
      const request1 = httpMock.expectOne(url);
      expect(request1.request.method).toBe('GET');
      request1.flush(availData);
      httpMock.verify();
  });

  it('should check the filtered name', () => {
    let Catalogfilteredname = 'FC';
    let Newfilteredname = 'FN';
    for(let i = 0; i < availData.resultData.length; i++) {
      console.log(availData.resultData[i].AvailName.substring(0, 2));
      if(availData.resultData[i].AvailName.substring(0, 2) === 'FN' ) {
        expect(Newfilteredname).toEqual(availData.resultData[i].AvailName.substring(0, 2));
      }
      if(availData.resultData[i].AvailName.substring(0, 2) === 'FC' ) {
        expect(Catalogfilteredname).toEqual(availData.resultData[i].AvailName.substring(0, 2));
      }
    }
    if(component.selected === 'New') {
      expect(component.availsList.toBe(null));
    }
    
  });
   
  it('should call export click function', () => {
    let parentMessage = "Films";
    let AvailName = 'FC Jan062018';
    component.export(parentMessage, AvailName);
    component.showExportProgress = false;
  });
  
  it('should call export function', () => {
    let parentMessage = "Films";
    let saveFlag = true;
    component.export('Films', 'FC Jan062018');
    const s3Status = { status: "Success", successMessage: "Signed URL saved successfully" }
    if(parentMessage === 'Films') {
      service.exportToSingleAvailS3('Films', 'FC Jan062018');
      let url1 = "https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/export/FC Jan062018";
      const request2 = httpMock.expectOne(url1);
      expect(request2.request.method).toBe('GET');
      request2.flush(s3Status);
    }
  });

  it('should call openmodal function', () => {
    let AvailName = "FC Jan062018";
    component.openModal(AvailName);
    expect(component.selectedAvailNew).toEqual(AvailName);
    expect(component.errorMessageDownload).toEqual('');
  })

  it('should have title as avails', async(() => {
    const fixture = TestBed.createComponent(AvailDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Avails');
  }));

  it('should call getOverlayStyle function', () => {
    component.getOverlayStyle();
    component.semicircle = false;
    expect(component.semicircle).toBe(false);
  });

});
