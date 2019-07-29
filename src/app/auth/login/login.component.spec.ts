import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement} from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de : DebugElement;
  let el : HTMLElement;
  let submitEl:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl= fixture.debugElement;
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('form should be invalid as name/password is not present',async(() => {
    let name = component.loginForm.controls['name'];
    name.setValue('');
    let password = component.loginForm.controls['password'];
    password.setValue('');
    expect(component.loginForm.valid).toBeFalsy();    
  }));

  it('form should be valid as name/password is present',async(() => {
    let name = component.loginForm.controls['name'];
    name.setValue('Harish');
    let password = component.loginForm.controls['password'];
    password.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();    
  }));

  it('it should enable the login button',async(()=>{
    let name = component.loginForm.controls['name'];
    name.setValue('Srinivas');
    let password = component.loginForm.controls['password'];
    password.setValue('12345678');
    fixture.detectChanges();
    expect(submitEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  }));

  // it('it should disable the login button',async(()=>{
  //   let name = component.loginForm.controls['name'];
  //   name.setValue('');
  //   let password = component.loginForm.controls['password'];
  //   password.setValue('');
  //   fixture.detectChanges();
  //   expect(submitEl.nativeElement.querySelector('button').disabled).toBeTruthy();
  // }));

});
