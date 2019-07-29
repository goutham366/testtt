import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailOverdueComponent } from './avail-overdue.component';

describe('AvailOverdueComponent', () => {
  let component: AvailOverdueComponent;
  let fixture: ComponentFixture<AvailOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
