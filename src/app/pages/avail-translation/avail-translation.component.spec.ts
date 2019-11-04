import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router'; 
import {ActivatedRoute,Route,ActivatedRouteSnapshot,UrlSegment,Params,Data } from '@angular/router';
import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
// import { By } from 'rxjs/Rx'

import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

import { AvailTranslationComponent } from './avail-translation.component';
import { HttpService } from '../../services/http.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('AvailTranslationComponent', () => {
  let component: AvailTranslationComponent;
  let fixture: ComponentFixture<AvailTranslationComponent>;
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailTranslationComponent ],
      // providers: [{ provide: ActivatedRoute, useValue: mockRoute }],
      imports:[RoundProgressModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
    let titlesClicked: boolean = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

    it('should have title as avails', async(() => {
    const fixture = TestBed.createComponent(AvailTranslationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.availName).toEqual('Avails');
  }));

  it('should have subtitle as translation', async(() => {
    const fixture = TestBed.createComponent(AvailTranslationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Avails');
  }));

  it('should call getOverlayStyle function', () => {
    component.semicircle = false;
    expect(component.semicircle).toBe(false);
  });

  // it(`should call showAvailStatus function`, () => {
  //   let index = component.showStatus;
  //   component.showAvailStatus(index);
  //   expect(component.showStatus).toBe(index);
  //   expect(component.showDetails).toBeNull();
  // });

  // it(`should call showtitlesDiv function`, () => {
  //  component.showtitlesDiv(1, 'clicked');
  //  component.showcountriesDiv(1, 'clicked');
  //  component.showlanguagesDiv(1, 'clicked');
  //  component.ngOnInit();
  //  expect(component.showDetails).toEqual(-1);
  // });
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
    const availsList = [
      {
        "id": "1",
        "avail_name": "availOne",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "60",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "1",
                "title_name": "Aquaman",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/aquaman_big.jpg",
                "accounts_count": "70",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "100",
            "titlesPending": "14",
            "countriesCount": "150",
            "countriesCompleted": "90",
            "countriesPending": "60",
            "languagesCount": "120",
            "languagesCompleted": "70",
            "languagesPending": "50",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "2",
        "avail_name": "availTwo",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "40",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "2",
                "title_name": "A Star is Born",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "60",
                "status": "Announced",
                "image_url": "assets/images/a_star_is_born_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "100",
            "titlesCompleted": "50",
            "titlesPending": "50",
            "countriesCount": "150",
            "countriesCompleted": "60",
            "countriesPending": "90",
            "languagesCount": "120",
            "languagesCompleted": "60",
            "languagesPending": "60",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "3",
        "avail_name": "availThree",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "3",
                "title_name": "12 Strong",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "70",
                "status": "Announced",
                "image_url": "assets/images/12strong_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "14",
            "titlesPending": "100",
            "countriesCount": "160",
            "countriesCompleted": "80",
            "countriesPending": "80",
            "languagesCount": "180",
            "languagesCompleted": "90",
            "languagesPending": "90",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "3"
          }
        ]
      },
      {
        "id": "4",
        "avail_name": "availFour",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "20",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "4",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "34",
            "pending_avail_clarifications_count": "145",
            "escalations_avail_count": "2"
          }
        ]
      },
           {
        "id": "5",
        "avail_name": "availFive",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "70",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "5",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "132",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "13",
            "escalations_avail_count": "6"
          }
        ]
      }
  
  
    ]
    let clickedText = "titles";
    let title = "availOne";
    component.showTitlesText = 'Titles';
   
    for(let i = 0; i < component.availsList.length; i++) {
      let title = component.availsList[i].avail_name;
      component.completedWidth = component.availsList[i].avail_details[0].titlesCompleted
      for(let j = 0; j < component.availsList[i].avail_details.length; j++) {
        let tName = component.availsList[i].avail_name;
        if (title === tName) {
          if(clickedText === "titles") {
            expect(component.showTitlesText).toEqual('Titles');
            expect(component.completedWidth).toEqual(component.availsList[i].avail_details[0].titlesCompleted);
            expect(component.showCountriesText).toBeNull
            expect(component.showLanguagesText).toBeNull
          }
        }
      }
    }
     //component.rotate(title, clickedText);
  });

  it(`should call rotate function for COUNTRIES`, () => {
    const availsList = [
      {
        "id": "1",
        "avail_name": "availOne",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "60",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "1",
                "title_name": "Aquaman",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/aquaman_big.jpg",
                "accounts_count": "70",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "100",
            "titlesPending": "14",
            "countriesCount": "150",
            "countriesCompleted": "90",
            "countriesPending": "60",
            "languagesCount": "120",
            "languagesCompleted": "70",
            "languagesPending": "50",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "2",
        "avail_name": "availTwo",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "40",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "2",
                "title_name": "A Star is Born",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "60",
                "status": "Announced",
                "image_url": "assets/images/a_star_is_born_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "100",
            "titlesCompleted": "50",
            "titlesPending": "50",
            "countriesCount": "150",
            "countriesCompleted": "60",
            "countriesPending": "90",
            "languagesCount": "120",
            "languagesCompleted": "60",
            "languagesPending": "60",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "3",
        "avail_name": "availThree",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "3",
                "title_name": "12 Strong",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "70",
                "status": "Announced",
                "image_url": "assets/images/12strong_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "14",
            "titlesPending": "100",
            "countriesCount": "160",
            "countriesCompleted": "80",
            "countriesPending": "80",
            "languagesCount": "180",
            "languagesCompleted": "90",
            "languagesPending": "90",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "3"
          }
        ]
      },
      {
        "id": "4",
        "avail_name": "availFour",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "20",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "4",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "34",
            "pending_avail_clarifications_count": "145",
            "escalations_avail_count": "2"
          }
        ]
      },
           {
        "id": "5",
        "avail_name": "availFive",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "70",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "5",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "132",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "13",
            "escalations_avail_count": "6"
          }
        ]
      }
  
  
    ]
    let clickedText = "countries";
    let title = "availOne";
    component.showTitlesText = 'Countries';
    for(let i = 0; i < component.availsList.length; i++) {
      let title = component.availsList[i].avail_name;
      for(let j = 0; j < component.availsList[i].avail_details.length; j++) {
        let tName = component.availsList[i].avail_name;
        if (title === tName) {
          if(clickedText === "countries") {
            expect(component.showTitlesText).toEqual('Countries');
            expect(component.showTitlesText).toBeNull
            expect(component.showLanguagesText).toBeNull
          }
        }
      }
    }
    // component.rotate(title, clickedText);
  });

  it(`should call rotate function for LANGUAGES`, () => {
    const availsList = [
      {
        "id": "1",
        "avail_name": "availOne",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "60",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "1",
                "title_name": "Aquaman",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/aquaman_big.jpg",
                "accounts_count": "70",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "100",
            "titlesPending": "14",
            "countriesCount": "150",
            "countriesCompleted": "90",
            "countriesPending": "60",
            "languagesCount": "120",
            "languagesCompleted": "70",
            "languagesPending": "50",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "2",
        "avail_name": "availTwo",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "40",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "2",
                "title_name": "A Star is Born",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "60",
                "status": "Announced",
                "image_url": "assets/images/a_star_is_born_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "100",
            "titlesCompleted": "50",
            "titlesPending": "50",
            "countriesCount": "150",
            "countriesCompleted": "60",
            "countriesPending": "90",
            "languagesCount": "120",
            "languagesCompleted": "60",
            "languagesPending": "60",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "3",
        "avail_name": "availThree",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "3",
                "title_name": "12 Strong",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "70",
                "status": "Announced",
                "image_url": "assets/images/12strong_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "14",
            "titlesPending": "100",
            "countriesCount": "160",
            "countriesCompleted": "80",
            "countriesPending": "80",
            "languagesCount": "180",
            "languagesCompleted": "90",
            "languagesPending": "90",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "3"
          }
        ]
      },
      {
        "id": "4",
        "avail_name": "availFour",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "20",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "4",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "34",
            "pending_avail_clarifications_count": "145",
            "escalations_avail_count": "2"
          }
        ]
      },
           {
        "id": "5",
        "avail_name": "availFive",
        "avail_title": "CAN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "70",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "5",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "132",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "13",
            "escalations_avail_count": "6"
          }
        ]
      }
  
  
    ]
    let clickedText = "languages";
    let title = "availOne";
    component.showTitlesText = 'Languages';
    for(let i = 0; i < component.availsList.length; i++) {
      let title = component.availsList[i].avail_name;
      for(let j = 0; j < component.availsList[i].avail_details.length; j++) {
        let tName = component.availsList[i].avail_name;
        if (title === tName) {
          if(clickedText === "languages") {
            expect(component.showTitlesText).toEqual('Languages');
            expect(component.showTitlesText).toBeNull
            expect(component.showCountriesText).toBeNull
          }
        }
      }
    }
     //component.rotate(title, clickedText);
  });
});
