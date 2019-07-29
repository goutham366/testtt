import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailDetailsComponent } from './avail-details.component';

describe('AvailDetailsComponent', () => {
  let component: AvailDetailsComponent;
  let fixture: ComponentFixture<AvailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
