import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailInsightComponent } from './apo-insight.component';

describe('AvailInsightComponent', () => {
  let component: AvailInsightComponent;
  let fixture: ComponentFixture<AvailInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
