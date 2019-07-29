import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailEscalationComponent } from './avail-escalation.component';

describe('AvailEscalationComponent', () => {
  let component: AvailEscalationComponent;
  let fixture: ComponentFixture<AvailEscalationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailEscalationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailEscalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
