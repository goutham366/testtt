import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { MustMatch } from '../../directives/passwordmatch';
import { MustMatchAlphabets } from '../../directives/alphabets';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userName:String;
  userRole:String;
  userEmail:String;
  typeNewPwd:String;
  typeCnfPwd:String;
  classAdd:boolean;
  transComp:boolean;
  showEyeNewPwd:boolean;
  showEyeCnfPwd:boolean;
  display:string;

 
  
  removeButton: boolean;  
  removeAddButton :boolean;     
  COMMENTS = 'COMMENTS';
  Comments: string = '';
  multipleList: any = [];
  multipleArray: any = [];

  resetForm = this.fb.group({
    newpassword: ['',Validators.required],
     confirmpassword: ['',Validators.required]
    },
    {
     validator: [MustMatch('newpassword', 'confirmpassword'),MustMatchAlphabets('newpassword')]
 },
 )
    get f() { return this.resetForm.controls; }
  constructor(private fb:FormBuilder,) {
    this.typeNewPwd = "password";
    this.typeCnfPwd = "password";
    this.showEyeNewPwd = false;
    this.showEyeCnfPwd = false;
    this.classAdd = false;
    this.transComp = false;

    this.userName = "John Paul";
    this.userRole = "Data Analyst";
    this.userEmail = "johnpaul@infosys.com";

  }

  showMeNewPwd(){
    this.typeNewPwd = "text";
  }
  hideMeNewPwd(){
    this.typeNewPwd = "password";
  }
  showMeCnfPwd(){
    this.typeCnfPwd = "text";
  }
  hideMeCnfPwd(){
    this.typeCnfPwd = "password";
  }
  newPwdEntered(){
    
    if(this.resetForm.value.newpassword.length >0){
     this.showEyeNewPwd = true;
     }else{
      this.showEyeNewPwd = false;
    }
  }
  cnfPwdEntered(){
    
    if(this.resetForm.value.confirmpassword.length >0){
     this.showEyeCnfPwd = true;
     }else{
      this.showEyeCnfPwd = false;
    }
  }

  ngOnInit() {
  }

  @ViewChild('closeBtn') closeBtn: ElementRef;

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }


  addMultipleValue(point) {
    if (!this.multipleList[point]) {
      this.multipleList[point] = [];
      this.multipleArray[point] = [];
      this.removeAddButton=false;
    }

    var val = ''
    switch (point) {
      case this.COMMENTS:
        if (this.Comments) {
          val = this.Comments
        }
        this.Comments = '';
        break;
    }
    if (val) {

      this.multipleList[point].push({ n: val });
      this.multipleArray[point].push(val);
    }
    if(!this.removeButton){
      this.removeButton = true; 
    }else{
      this.removeButton = false; 
    }
  }
  

}
