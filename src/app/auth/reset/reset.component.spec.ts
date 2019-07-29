import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetComponent } from './reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement} from '@angular/core';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  let de : DebugElement;
  let el : HTMLElement;
  let submitEl:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
      imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should invalid the new/confirm password',()=>{
    let newpassword = component.resetForm.controls['newpassword'];
    newpassword.setValue('Harish@123');
    let confirmpassword = component.resetForm.controls['confirmpassword'];
    confirmpassword.setValue('Srinu@54321');
    expect(component.resetForm.valid).toBeFalsy(); 
  });

  it('should invalid the new/confirm password',()=>{
    let newpassword = component.resetForm.controls['newpassword'];
    newpassword.setValue('');
    let confirmpassword = component.resetForm.controls['confirmpassword'];
    confirmpassword.setValue('');
    expect(component.resetForm.valid).toBeFalsy(); 
  });

  // it('should valid if new/confirm password are same',()=>{
  //   let newpassword = component.resetForm.controls['newpassword'];
  //   newpassword.setValue('Harish@123');
  //   let confirmpassword = component.resetForm.controls['confirmpassword'];
  //   confirmpassword.setValue('Harish@123');
  //   expect(component.resetForm.controls['newpassword']).toEqual('Harish@123');
  // })

});
