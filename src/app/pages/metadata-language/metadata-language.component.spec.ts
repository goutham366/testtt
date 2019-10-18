import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataLanguageComponent } from './metadata-language.component';

describe('MetadataLanguageComponent', () => {
  let component: MetadataLanguageComponent;
  let fixture: ComponentFixture<MetadataLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
