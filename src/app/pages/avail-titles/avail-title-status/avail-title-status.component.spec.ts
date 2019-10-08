import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailTitleStatusComponent } from './avail-title-status.component';

describe('AvailTitleStatusComponent', () => {
  let component: AvailTitleStatusComponent;
  let fixture: ComponentFixture<AvailTitleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailTitleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailTitleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
