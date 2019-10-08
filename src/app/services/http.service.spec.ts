
import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import { HttpService } from './http.service';

fdescribe('CustomHttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
    ],
      providers: [HttpService]
    });
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
});

afterEach(() => {
  httpMock.verify();
});

it('should be created', () => {
  const service: HttpService = TestBed.get(HttpService);
  expect(service).toBeTruthy();
});

it('be able to retrieve posts from the API bia GET', () => {
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
  service.getAvailData().subscribe(posts => {
      expect(posts).toEqual(availData);
  });
  const request = httpMock.expectOne( `${service.lambda}/avails/FILMS`);
  expect(request.request.method).toBe('GET');
  request.flush(availData);
});
});