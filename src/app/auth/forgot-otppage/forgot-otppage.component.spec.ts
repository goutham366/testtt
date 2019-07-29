import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotOTPpageComponent } from './forgot-otppage.component';

describe('ForgotOTPpageComponent', () => {
  let component: ForgotOTPpageComponent;
  let fixture: ComponentFixture<ForgotOTPpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotOTPpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotOTPpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
