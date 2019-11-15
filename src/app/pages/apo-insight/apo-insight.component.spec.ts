import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AvailInsightComponent } from './apo-insight.component';
import { HttpService } from '../../services/http.service';


xdescribe('AvailInsightComponent', () => {
  let component: AvailInsightComponent;
  let fixture: ComponentFixture<AvailInsightComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  let insightApiresp = {"AccontsCompletedCount":0,"AccountsData":[{"Account":"Virgin",
  "AccountStatus":"Pending"}],"StartDate":"2019-11-11","LanguagesCompletedCount":0,"PendingRatings":1,
  "DueDate":"2019-11-18","AvailComments":[],"CountryData":[{"Country":"Ireland","CountryStatus":"Pending"}],
  "Percentage":0,"UniqueLanguagesCount":1,"AvailHistory":[],"TranslationsData":[{"TranslationStatus":
  "Pending","Language":"English"}],"UniqueCountriesCount":1,"CountriesPendingCount":1,"AccontsPendingCount"
  :1,"LanguagesPendingCount":1,"GlobalTitle":"Year without a Santa Claus, The","AvailLogs":[],
  "CountriesCompletedCount":0,"TitleStatus":[{"StatusDate":"2019-11-11 16:42:20.785","StatusMessage":
  "Announced"}],"PendingEscalation":"","PedingClarification":"","PendingTranslations":1,"TitleId":
  "60000013582044719","UniqueAccontsCount":1}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailInsightComponent ],
      providers:[HttpService],
      imports: [NgCircleProgressModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    let stages = [
      { stageTitle: "Announced" },
      { stageTitle: "Data Collation" },
      { stageTitle: "Quality Audit" },
      { stageTitle: "Data Delivery" }
    ];
    // expect(component.stages).toEqual(stages);
    expect(component.cropperSettings.noFileInput).toBeTruthy();
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();

  });

  it(`should call onInit`, () => {
  //  component.ngOnInit()
   expect(component.showDetails).toBeTruthy();
   expect(component.showDetails1).toBeTruthy();
   expect(component.showDetails2).toBeTruthy();
   expect(component.showDetails3).toBeTruthy();


  let response;
  service.getAvailInsightDetails('FN Aug272019', '60000013582044719', 'FILMS').subscribe(response => {
  expect(response).toBeTruthy();
  const req = httpMock.expectOne(
    { method: 'GET', url:'https://z0lcb1siad.execute-api.us-west-2.amazonaws.com/Stage?FN Aug272019/60000013582044719/FILMS' });
    req.flush(insightApiresp);
    httpMock.verify();
  });
  });

  it(`should call sizePlus`, () => {
   component.sizePlus();
  });

  it(`should call reload`, () => {
    // location.reload();
   });
   it(`should call open nav function`, () => {
     document.getElementById("mySidenav");
    component.openNav();
    // var dummyElement = document.createElement('div').style.width = '200px';
    // document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    
     
     // expect(document.getElementById("mySidenav").style.width).toBe(style);
   });

});
