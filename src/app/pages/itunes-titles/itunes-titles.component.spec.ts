import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesTitlesComponent } from './itunes-titles.component';

describe('ItunesTitlesComponent', () => {
  let component: ItunesTitlesComponent;
  let fixture: ComponentFixture<ItunesTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItunesTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
