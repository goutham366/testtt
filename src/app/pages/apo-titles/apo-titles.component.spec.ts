import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoTitlesComponent } from './apo-titles.component';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { MatProgressBarModule } from '../../../../node_modules/@angular/material';
describe('ApoTitlesComponent', () => {
  let component: ApoTitlesComponent;
  let fixture: ComponentFixture<ApoTitlesComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  let input;
  const file = "assets/images/dummy.png";
  const apodata = {
    "resultData": [
        {
            "_id": "5d8a333e41bf3500016229ab",
            "StartDate": "09/14/2019",
            "AvailName": "",
            "AnnouncementDate": "09/24/2019",
            "GlobalTitle": "Annabelle Comes Home (2019)",
            "ImageURL": "",
            "TitleStatus": [
                {
                    "StatusDate": "2019-09-24 15:16:50.309",
                    "StatusMessage": "Announced"
                }
            ],
            "Regions": [
                "Germany",
                "United Kingdom",
                "USA",
                "Brazil",
                "EMEA Licensee Group",
                "France",
                "Italy",
                "Mexico",
                "Nordic",
                "Spain"
            ],
            "DueDate": "06/05/2019",
            "TitleId": "60001209102081284",
            "LOB": "APO",
            "TimeStamp": "2019-09-24 15:16:50.309",
            "TitleVideoVersion": "6000120910",
            "AccontsCount": 16,
            "AccontsCompletedCount": 0,
            "AccontsPendingCount": 16,
            "CountriesCount": 90,
            "CountriesCompletedCount": 0,
            "CountriesPendingCount": 90,
            "LanguagesCount": 31,
            "LanguagesCompletedCount": 0,
            "LanguagesPendingCount": 31,
            "Percentage": 0
        }]}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApoTitlesComponent, AvailFilterComponent],
      imports: [HttpClientModule,HttpClientTestingModule, NgCircleProgressModule.forRoot({
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
      }),MatProgressBarModule],
      providers: [HttpService]
    })
      .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoTitlesComponent);
    component = fixture.componentInstance;
    component.apoList = apodata.resultData;
    component.showStatus=-1;
    let file = new File([new ArrayBuffer(2e+5)], 'test-file.jpg', { lastModified: null, type: 'image/jpeg' });
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should able to click the accounts', () => {
    let title = 'Annabelle Comes Home (2019)', tab = 'titles';
    component.selectTab(title, tab);
    expect(component.accStatus).toBeTruthy();
    expect(component.transStatus).toBeFalsy();
    expect(component.langStatus).toBeFalsy();
    expect(component.titleName).toEqual(title);
  })
  it('should able to select countries',()=>{
    let title = 'Annabelle Comes Home (2019)', tab = 'countries';
    component.selectTab(title, tab);
  })
  it('should able to select languages',()=>{
    let title = 'Annabelle Comes Home (2019)', tab = 'languages';
    component.selectTab(title, tab);
  })
  it('should able to select title status', () => {
    component.showTitleStatus(1);
    expect(component.showStatus).toEqual(1);
    expect(component.accStatus).toBeFalsy();
    expect(component.transStatus).toBeFalsy();
    expect(component.langStatus).toBeFalsy();
    expect(component.account).toEqual(1);
  })
  it('should able to show accounts', () => {
    component.showAccounts(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.acccountClicked).toBeTruthy();
    component.showCountries(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.countriesClicked).toBeTruthy();
    component.showTranslations(1);
    expect(component.showStatus).toEqual(-1);
    expect(component.translationsClicked).toBeTruthy();
    component.ngOnInit();
    
  })
  it('should able to get availdetails', () => {
    service.getAvailsDetails();
    expect(component.apoList).toEqual(apodata.resultData);
    component.imgClickTrack(1, 1);
    expect(component.accStatus).toBeFalsy();
    expect(component.transStatus).toBeFalsy();
    expect(component.langStatus).toBeFalsy();
    expect(component.selectedRecord.ImageURL).toBeUndefined();
    expect(component.uploadStatus).toBeTruthy();
   
    component.triggerUpload();
    // component.handleFileInputForAdd("assets/images/dummy.png");
  })
  it('should get apo details',()=>{
    service.getAPODetails();
    let url = "https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/apo/APO";
    const request1 = httpMock.expectOne(url);
    expect(request1.request.method).toBe('GET');
    request1.flush(apodata);
    httpMock.verify();
  })
// it('should able to get progress wizard',()=>{
//   let title = 'Annabelle Comes Home (2019)'
//   component.getProgress(title);
//   expect(component.getProgress("Announced")).toEqual(0);
//   expect(component.getProgress("Data Collation")).toEqual(1);
//   expect(component.getProgress("Quality Audit")).toEqual(2);
//   expect(component.getProgress("Data Delivery")).toEqual(3);
//   expect(component.getProgress("")).toEqual(0);
// })
});
