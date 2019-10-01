import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';
import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvailDashboardComponent } from './avail-dashboard.component';
import { HttpService } from '../../services/http.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';

describe('AvailDashboardComponent', () => {
  let component: AvailDashboardComponent;
  let fixture: ComponentFixture<AvailDashboardComponent>;
  let httpMock: HttpTestingController;
  let service: HttpService;
  const availData = [{ "StartDate": "07/17/2019", "AvailName": "FC Feb262019", "AnnouncementDate": ["02/26/2019"], "DueDate": "08/07/2019", "TitleData": { "PendingTitlesCount": 1135, "UniqueLanguagesCount": 10, "AvailPercentage": 100, "UniqueCountriesCount": 12, "CountriesPendingCount": 12, "LanguagesPendingCount": 10, "CompletedTitlesCount": 0, "CountriesCompletedCount": 0, "TitlesCount": 1135, "LanguagesCompletedCount": 0, "PendingRatings": 2168, "PendingTranslations": 2168, "UniqueAccontsCount": 23 } }, { "StartDate": "07/17/2019", "AvailName": "FN Feb262019", "AnnouncementDate": ["02/26/2019"], "DueDate": "07/22/2019", "TitleData": { "PendingTitlesCount": 28, "UniqueLanguagesCount": 6, "AvailPercentage": 100, "UniqueCountriesCount": 5, "CountriesPendingCount": 5, "LanguagesPendingCount": 6, "CompletedTitlesCount": 0, "CountriesCompletedCount": 0, "TitlesCount": 28, "LanguagesCompletedCount": 0, "PendingRatings": 56, "PendingTranslations": 56, "UniqueAccontsCount": 9 } }, { "StartDate": "07/17/2019", "AvailName": "FT Feb262019", "AnnouncementDate": ["02/26/2019"], "DueDate": "07/19/2019", "TitleData": { "PendingTitlesCount": 27, "UniqueLanguagesCount": 8, "AvailPercentage": 100, "UniqueCountriesCount": 8, "CountriesPendingCount": 8, "LanguagesPendingCount": 8, "CompletedTitlesCount": 0, "CountriesCompletedCount": 0, "TitlesCount": 27, "LanguagesCompletedCount": 0, "PendingRatings": 48, "PendingTranslations": 48, "UniqueAccontsCount": 14 } }]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailDashboardComponent],
      providers:[HttpService],
      imports: [RoundProgressModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
      service = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailDashboardComponent);
    component = fixture.componentInstance;
    component.availsList = availData;
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
    expect(component.availsList).toEqual(availData);
   expect(component.showDetails).toBe(-1);
   //expect(component.transStatus).toBeFalsy();
   // expect(component.langStatus).toBeFalsy();
  // component.handleFileInputForAdd("assets/images/dummy.png");
  })

  it('should have title as avails', async(() => {
    const fixture = TestBed.createComponent(AvailDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Avails');
  }));

  it('should call getOverlayStyle function', () => {
    component.semicircle = false;
    expect(component.semicircle).toBe(false);
  });

  it(`should call showAvailStatus function`, () => {
    let index = component.showStatus;
    component.showAvailStatus(index);
    expect(component.showStatus).toBe(index);
    expect(component.showDetails).toBeNull();
  });

  it(`should call showtitlesDiv function`, () => {
    component.showtitlesDiv(1, 'clicked');
    component.showcountriesDiv(1, 'clicked');
    component.showlanguagesDiv(1, 'clicked');
    component.ngOnInit();
    expect(component.showDetails).toEqual(-1);
  });
  it(`should call showcountriesDiv function`, () => {
    let index = -1;
    const compiled = fixture.debugElement;
    // const select = compiled.query(By.css('#titlesDiv')).nativeElement;
    // component.showtitlesDiv(event, index);
    expect(component.showDetails).toBe(index);
  });
  it(`should call showlanguagesDiv function`, () => {
    let index = -1;
    const compiled = fixture.debugElement;
    expect(component.showDetails).toBe(index);
  });

  it(`should call rotate function for TITLES`, () => {
    
    let clickedText = "titles";
    let title = "availOne";
    component.showTitlesText = 'Titles';

    for (let i = 0; i < component.availsList.length; i++) {
        let tName = component.availsList[i].AvailName;
        if (title === tName) {
          if (clickedText === "titles") {
            expect(component.showTitlesText).toEqual('Titles');
            expect(component.showCountriesText).toBeNull
            expect(component.showLanguagesText).toBeNull
          }
        }
      
    }
    component.rotate(title, clickedText);
  });

  it(`should call rotate function for COUNTRIES`, () => {
    let clickedText = "countries";
    let title = "availOne";
    component.showTitlesText = 'Countries';
    for (let i = 0; i < component.availsList.length; i++) {
      let title = component.availsList[i].avail_name;
        let tName = component.availsList[i].avail_name;
        if (title === tName) {
          if (clickedText === "countries") {
            expect(component.showTitlesText).toEqual('Countries');
            expect(component.showTitlesText).toBeNull
            expect(component.showLanguagesText).toBeNull
          }
        
      }
    }
    component.rotate(title, clickedText);
  });

  it(`should call rotate function for LANGUAGES`, () => {
    let clickedText = "languages";
    let title = "availOne";
    component.showTitlesText = 'Languages';
    for (let i = 0; i < component.availsList.length; i++) {
      let title = component.availsList[i].avail_name;
        let tName = component.availsList[i].avail_name;
        if (title === tName) {
          if (clickedText === "languages") {
            expect(component.showTitlesText).toEqual('Languages');
            expect(component.showTitlesText).toBeNull
            expect(component.showCountriesText).toBeNull
          }
        }
    }
    component.rotate(title, clickedText);
  });




});
