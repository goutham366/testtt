import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailFilterComponent } from './avail-filter.component';

describe('AvailFilterComponent', () => {
  let component: AvailFilterComponent;
  let fixture: ComponentFixture<AvailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
