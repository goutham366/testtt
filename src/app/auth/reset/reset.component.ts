import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { MustMatch } from '../../directives/passwordmatch';
import { MustMatchAlphabets } from '../../directives/alphabets';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
import { Router } from '@angular/router';

interface Nav {
  id: number;
  sideTitle: string;
  sideData: string;
  }
   
  type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss','../authStyles.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(22%)'}),
        animate(100)
      ]),
      
    ]),
    trigger(
      "navAnimation",
      [
        transition(
          "void => prev", // ---> Entering --->
          [
            style({
              left: -100,
              opacity: 0.0,
              zIndex: 2
            }),
            animate(
              "200ms ease-in-out",
              style({
                left: 0,
                opacity: 1.0,
                zIndex: 2
              })
            )
          ]
        ),
        transition(
          "prev => void", // ---> Leaving --->
          [
            animate(
              "200ms ease-in-out",
              style({
                left: 100,
                opacity: 0.0
              })
            )
          ]
        ),
        transition(
          "void => next", // <--- Entering <---
          [
            style({
              left: 100,
              opacity: 0.0,
              zIndex: 2
            }),
            animate(
              "200ms ease-in-out",
              style({
                left: 0,
                opacity: 1.0,
                zIndex: 2
              })
            )
          ]
        ),
        transition(
          "next => void", // <--- Leaving <---
          [
            animate(
              "200ms ease-in-out",
              style({
                left: -100,
                opacity: 0.0
              })
            )
          ]
        )
      ]
    )
  ]
})
export class ResetComponent {

  public orientation: Orientation;
  public selectedNav: Nav;

  private changeDetectRef: ChangeDetectorRef;
  private navs: Nav[];
  typeNewPwd:String;
  typeCnfPwd:String;
  classAdd:boolean;
  transComp:boolean;
  newPwdNotEmpty:boolean;
  cnfPwdNotEmpty:boolean;
  
  constructor(private fb:FormBuilder,  changeDetectRef: ChangeDetectorRef, private router: Router) {
    this.changeDetectRef = changeDetectRef;
        this.orientation = "none";
        this.typeNewPwd = "password";
        this.typeCnfPwd = "password";
        this.newPwdNotEmpty = false;
        this.cnfPwdNotEmpty = false;
        this.classAdd = false;
        this.transComp = false;

        this.navs = [
        {
            id: 1,
            sideTitle: "AD MONETIZATION",
            sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 2,
            sideTitle: "METADATA ORCHESTRATION",
            sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 3,
            sideTitle: "MEDIA INSIGHTS",
            sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 4,
            sideTitle: "EXPERIENCE FACTORY",
            sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        ];
        this.selectedNav = this.navs[0];
   }
  resetForm = this.fb.group({
   newpassword: ['',Validators.required],
    confirmpassword: ['',Validators.required]
   },
   {
    validator: [MustMatch('newpassword', 'confirmpassword'),MustMatchAlphabets('newpassword')]
},
)
   get f() { return this.resetForm.controls; }
  
  

  async delay(ms: number){
    await new Promise(resolve => setTimeout(()=> resolve(), ms)).then(()=>console.log("triggered"));
  }

  validateInputValues(){
    this.classAdd = true;
    console.log("reset new password::",this.resetForm.valid);
    if(this.resetForm.controls.confirmpassword.errors==null  && this.resetForm.controls.confirmpassword.value.length>=8){
      this.delay(1000).then(any => {
        this.transComp = true;
        this.delay(200).then(any => {
          this.router.navigate([''] );
        })
      })
    }else{
      this.delay(1000).then(any => {
        this.classAdd = false;
        this.transComp = false;
       // this.showError = true;
      })
    }
}

  sideTitle:any 

public navSelect(id, orient){
  this.orientation = orient;

    
    this.changeDetectRef.detectChanges();
    for(let i=0;i<this.navs.length;i++){
      if(id==this.navs[i].id){
        this.selectedNav = this.navs[i];
      }
    }
}

  prevId:any = 1;
  checkId(id){
    if(id>this.prevId){
      this.navSelect(id, "next")
    }else{
      this.navSelect(id, "prev");
    }
    this.prevId = id;
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
     this.newPwdNotEmpty = true;
     }else{
      this.newPwdNotEmpty = false;
    }
  }
  cnfPwdEntered(){
    
    if(this.resetForm.value.confirmpassword.length >0){
     this.cnfPwdNotEmpty = true;
     }else{
      this.cnfPwdNotEmpty = false;
    }
  }
}
