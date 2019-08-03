import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvailfilterComponent } from './availfilter.component';
import { HttpService } from '../../services/http.service';

fdescribe('AvailfilterComponent', () => {
  let component: AvailfilterComponent;
  let fixture: ComponentFixture<AvailfilterComponent>;
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailfilterComponent],
      providers: [HttpService],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    service = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should upload the file', () => {
    let errorMsg = 'Is not a valid file format';
    let mockFile = [
      "lastModified": "1563519457611",
      "lastModifiedDate": "Fri Jul 19 2019 12: 27: 37 GMT+0530(India Standard Time)",
      "name": "WB Internal - All Accounts 2019-02-26_Feature.xlsx",
      "size": "14843608",
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "webkitRelativePath": ""
  ]
  
      // component.upload(mockFile);
    // // spyOn(component, 'upload').and.returnValue(true);
    // // spyOn(service,'uploadAvail').and.callThrough();
    // component.upload();
    // const req = httpMock.expectOne('https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/data/availUpload');
    // expect(req.request.method).toBe('POST');
    // //req.flush(mockResponse);
    // // expect(service.uploadAvail).toHaveBeenCalled();
  });
});
