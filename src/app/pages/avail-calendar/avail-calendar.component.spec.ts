import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailCalendarComponent } from './avail-calendar.component';

describe('AvailCalendarComponent', () => {
  let component: AvailCalendarComponent;
  let fixture: ComponentFixture<AvailCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
