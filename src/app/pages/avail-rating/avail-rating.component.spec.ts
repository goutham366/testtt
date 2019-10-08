import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailRatingComponent } from './avail-rating.component';

describe('AvailRatingComponent', () => {
  let component: AvailRatingComponent;
  let fixture: ComponentFixture<AvailRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
