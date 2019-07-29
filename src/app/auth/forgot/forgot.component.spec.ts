import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotComponent } from './forgot.component';

describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  // it('form should be invalid as email id is not present', () => {
  //   let email = component.emailFormControl['emailFormControl'];
  //   email.setValue("");
  //   expect(component.emailFormControl.valid).toBeFalsy();
  // })

  // it('form should be valid as email', async() => {
  //   let email = component.emailFormControl['emailFormControl'];
  //   email.setValue("asd@asd.com");
  //   expect(component.emailFormControl.valid).toBeTruthy();
  // })
});
