import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailClarificationComponent } from './avail-clarification.component';

describe('AvailClarificationComponent', () => {
  let component: AvailClarificationComponent;
  let fixture: ComponentFixture<AvailClarificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailClarificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailClarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
