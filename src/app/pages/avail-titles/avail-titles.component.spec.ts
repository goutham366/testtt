import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailTitlesComponent } from './avail-titles.component';

describe('AvailTitlesComponent', () => {
  let component: AvailTitlesComponent;
  let fixture: ComponentFixture<AvailTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
