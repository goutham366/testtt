import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailCompleteComponent } from './avail-complete.component';

describe('AvailCompleteComponent', () => {
  let component: AvailCompleteComponent;
  let fixture: ComponentFixture<AvailCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
