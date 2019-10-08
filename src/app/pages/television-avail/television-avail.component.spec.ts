import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionAvailComponent } from './television-avail.component';

describe('TelevisionAvailComponent', () => {
  let component: TelevisionAvailComponent;
  let fixture: ComponentFixture<TelevisionAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
