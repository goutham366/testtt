import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailfilterComponent } from './availfilter.component';

describe('AvailfilterComponent', () => {
  let component: AvailfilterComponent;
  let fixture: ComponentFixture<AvailfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
