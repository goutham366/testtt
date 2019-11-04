import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { AvailDetailsComponent } from './avail-details.component';
import { HttpService } from '../../services/http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressBarModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';
import { FormsModule } from '@angular/forms';

describe('AvailDetailsComponent', () => {
  let component: AvailDetailsComponent;
  let fixture: ComponentFixture<AvailDetailsComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;
  //this.clickedOnTitle = false;
  const availdetailsdata = {
    "resultData": [
      {
        "StartDate": "10/10/2019",
        "AvailName": " FN JUN032019",
        "AnnouncementDate": "08/06/2019",
        "AvailLogs": [
          {
            "AvailName": "FC Jan232019",
            "TitleId": "60001222402082894",
            "LoggedBy": "HariPriya",
            "ImageUrl": "",
            "Activity": "actvity134",
            "LogDescription": "logs",
            "TimeStamp": "2019-10-04 15:58:27.507"
          }

        ],
        "DueDate": "10/31/2019",
        "TranslationsData": [
          {
            "TranslationStatus": "Pending",
            "Language": "Dutch"
          }
        ],
        "AvailComments": [{
          "AvailName": "FC Jan232019",
          "TitleId": "60001222402082894",
          "CommentBy": "HariPriya",
          "CommentDescription": "dummycomments3434",
          "Timestamp": "2019-10-04 15:58:27.507"
        }],
        "TitleData": {
          "PendingTitlesCount": 1,
          "AccontsCompletedCount": 0,
          "UniqueLanguagesCount": 1,
          "TitleCountriesCount": 1,
          "AvailPercentage": 0,
          "UniqueCountriesCount": 1,
          "AccontsPendingCount": 1,
          "CountriesPendingCount": 1,
          "LanguagesPendingCount": 1,
          "CountriesCompletedCount": 0,
          "CompletedTitlesCount": 0,
          "TitlesCount": 1,
          "LanguagesCompletedCount": 0,
          "PendingRatings": 1,
          "PendingTranslations": 1,
          "UniqueAccontsCount": 1
        },
        "TitleDetails": [
          {
            "GlobalTitle": "LEGO Movie 2, The: The Second Part",
            "TitleStatus": "Pending"
          }
        ],
        "CountryData": [
          {
            "Country": "Belgium",
            "CountryStatus": "Pending"
          }
        ]
      }
    ]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailDetailsComponent],
      imports: [RouterTestingModule, RoundProgressModule, MatProgressBarModule, MatInputModule, FormsModule, HttpClientModule, HttpClientTestingModule, NgCircleProgressModule.forRoot({
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
    fixture = TestBed.createComponent(AvailDetailsComponent);
    component = fixture.componentInstance;
    component.availdetailsresp = availdetailsdata;
    component.availDetailsViewList = availdetailsdata.resultData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the comment box', () => {
    component.closeNav();
  })

  it('should open the comment box', () => {
    component.openNav();
  })

  it('should able to add the comments ', () => {
    component.addComment('Harish', '10-30-2019');
  })

  it('should able to get the pending countries', () => {
    let pendingcountries = '10';
    component.filterCountries(pendingcountries);
  })

  it('should able to get the complete countries', () => {
    let completedcountries = '25';
    component.filterCountries(completedcountries);
  })

  it('should able to get the pending languages', () => {
    let pendinglang = '10';
    component.filterlanguages(pendinglang);
  })

  it('should able to get the complete languages', () => {
    let completedlang = '15';
    component.filterlanguages(completedlang);
  })

  it('should able to get the pending titles', () => {
    let pendingtitles = '10';
    component.filterTitles(pendingtitles);
  })

  it('should able to get the complete titles', () => {
    let completedtitles = '20';
    component.filterTitles(completedtitles);
   // expect(component.filterTitles).toMatch('Pending','India');
  })

  it('should able to get the styled layout', () => {
    component.getOverlayStyle();
  })

  it('should able to get avail details', () => {
    service.getAvailDetailsAPIView('FN JUN182019', 'FILMS');
    expect(component.availDetailsViewList).toEqual(availdetailsdata.resultData);
  })

  // it('should refresh the page', () => {
  //   component.reload();
  //   location.reload();
  // })

  it('should get the avail details', () => {
    component.getAvailDetailsView();
  })

  it('should get the api details',()=>{


  })

  it('should get itunes titles details', () => {
    service.getAvailDetailsAPIView('FN JUN182019', 'FILMS');
    let url = "https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage//avails/all/FILMS/FN%20Jun182019";
    const request1 = httpMock.expectOne(url);
    expect(request1.request.method).toBe('GET');
    request1.flush(availdetailsdata);
    httpMock.verify();
  })

});
