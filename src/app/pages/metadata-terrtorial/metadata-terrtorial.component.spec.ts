import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTerrtorialComponent } from './metadata-terrtorial.component';

describe('MetadataTerrtorialComponent', () => {
  let component: MetadataTerrtorialComponent;
  let fixture: ComponentFixture<MetadataTerrtorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataTerrtorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTerrtorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
