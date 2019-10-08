import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AvailTitlesComponent } from './avail-titles.component';
import { HttpService } from '../../services/http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AvailFilterComponent } from '../avail-filter/avail-filter.component';

describe('AvailTitlesComponent', () => {
  let component: AvailTitlesComponent;
  let fixture: ComponentFixture<AvailTitlesComponent>;
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
      }]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailTitlesComponent, AvailFilterComponent],
      imports: [HttpClientModule, HttpClientTestingModule, NgCircleProgressModule.forRoot({
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
            { queryParams: { avail_name: 'TC Dec142018' } }
        }
      }]
    })
      .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailTitlesComponent);
    component = fixture.componentInstance;
    component.apoList = apodata.resultData;
    component.showStatus = -1;
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

});
