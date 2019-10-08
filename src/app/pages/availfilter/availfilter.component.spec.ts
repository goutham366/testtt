import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvailfilterComponent } from './availfilter.component';
import { HttpService } from '../../services/http.service';
import { FILE } from 'dns';

describe('AvailfilterComponent', () => {
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
  it('should test file upload', () => {
    let input  = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    spyOn(component, 'upload');
    input.dispatchEvent(new Event('change'));
    expect(component.upload).toHaveBeenCalled();
    console.log(component.successMessage);
  });
});
