import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailFilterComponent } from './avail-filter.component';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '../../../../node_modules/@angular/common/http/testing';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '../../../../node_modules/@angular/core';
import { MatProgressBarModule } from '../../../../node_modules/@angular/material';


describe('AvailFilterComponent', () => {
  let component: AvailFilterComponent;
  let fixture: ComponentFixture<AvailFilterComponent>;
  let httpMock: HttpTestingController;
  let service: HttpService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailFilterComponent],
      providers: [HttpService],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule,MatProgressBarModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
