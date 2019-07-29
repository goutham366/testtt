import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";

interface Nav {
  id: number;
  sideTitle: string;
  sideData: string;
  }
   
  type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: [ './forgot.component.scss','../authStyles.scss'],
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
  ],
  
})
export class ForgotComponent {

 public orientation: Orientation;
  public selectedNav: Nav;

  private changeDetectRef: ChangeDetectorRef;
  private navs: Nav[];
  showEmailError:boolean;
 constructor(changeDetectRef: ChangeDetectorRef, private router: Router) {
   this.showEmailError = false;
    this.changeDetectRef = changeDetectRef;
    this.orientation = "none";
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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
 


  onSubmit(datae) {
   if(datae.value != "" && this.emailFormControl.valid){
        this.router.navigate(['forgotOTPpage'], { queryParams: { emailFormControl: datae.value },  
        skipLocationChange: true } );
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
  emailEntered(){
    console.log("values entered"+ this.emailFormControl.valid);
    if(this.emailFormControl.valid){
    this.showEmailError= false;
    }else{
      this.showEmailError = true;
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

  
  
  
  

  
  
  
}
