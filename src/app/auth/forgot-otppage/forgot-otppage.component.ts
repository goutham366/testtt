import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormGroupDirective, NgForm, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    templateUrl: './forgot-otppage.component.html',
    styleUrls: ['./forgot-otppage.component.scss','../authStyles.scss'],
    animations: [
        trigger('itemAnim', [
          transition(':enter', [
            style({transform: 'translateX(25%)'}),
            animate(100)
          ]),
          
        ]),
        trigger('otpAnim', [
          transition(':enter', [
            style({transform: 'translateX(40%)'}),
            animate(400)
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
        ),
        trigger("TimeAnimation", [
          transition(
            "void => next", // <--- Entering <---
            [
              style({
                top: 218,
                opacity: 0.0,
                zIndex: 2
              }),
              animate(
                "1000ms linear",
                style({
                  top: 198,
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
                "1000ms linear",
                style({
                  top: 178,
                  opacity: 0.0
                })
              )
            ]
          )
        ])
      ]
  })
  
  export class ForgotOTPpageComponent implements OnInit, OnDestroy{

    public orientation: Orientation;
    public selectedNav: Nav;
    private changeDetectRef: ChangeDetectorRef;
    private navs: Nav[];
    otpExpired:boolean;
    classAdd:boolean;
    transComp:boolean;
    showOTPError: boolean;
    emailformControl: any;
    otpNotEmpty:boolean;
    constructor(private route: ActivatedRoute, changeDetectRef: ChangeDetectorRef, private router: Router) {
        this.changeDetectRef = changeDetectRef;
        this.orientation = "none";
        this.otpExpired = false;
        this.classAdd = false;
        this.transComp = false;
        this.showOTPError = false;
        this.otpNotEmpty = false;
        this.navs = [
        // {
        //     id: 1,
        //     sideTitle: "AD MONETIZATION",
        //     sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        // },
        {
            id: 2,
            sideTitle: "METADATA ORCHESTRATION",
            sideData: "This module creates an orchestration layer to transform the metadata management workflow. Salient features are complete automation, transparency and proactive risk management. This provides end to end transformation of the current processes, including emails, work requests and escalations. Your feedback is always welcome."
        }
        // {
        //     id: 3,
        //     sideTitle: "MEDIA INSIGHTS",
        //     sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        // },
        // {
        //     id: 4,
        //     sideTitle: "EXPERIENCE FACTORY",
        //     sideData: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        // }
        ];
        this.selectedNav = this.navs[0];
     }

    OTPFormControl = new FormControl('', [
        Validators.required
    ]);

    ngOnInit() {
        this.message = `05:00`;
        
        this.start();
        this.route.queryParams
        
        .subscribe(params => {
            this.emailformControl = params.emailFormControl;
            
        });
        console.log("outside subscribe", this.emailformControl);
    }
    
    intervalId = 0;
    message = '';
    seconds = 60;
    min = 4;
    secondVar:String;
    
    clearTimer() { clearInterval(this.intervalId); }
    ngOnDestroy() { this.clearTimer(); }
    start() { this.countDown(); }
    
    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
        this.seconds -= 1;
        this.orientation = "next";
        this.changeDetectRef.detectChanges();
        if(this.seconds == -1 && this.min == 0){
          this.otpExpired = true; 
        }
        if (this.seconds === -1) {
            if(this.min!=0){     
            this.seconds = 59;
            if(this.seconds==59){
                --this.min;
            }
            if(this.seconds<10){
                
                this.message = `0${this.min}:` ;
                this.secondVar = `0${this.seconds}`;
            }else{
                this.message = `0${this.min}:`;
                this.secondVar = `${this.seconds}`;
            }
            }else{
            this.clearTimer();
            }
            
        } else {
            if(this.seconds<10){
                this.message = `0${this.min}:`;
                this.secondVar = `0${this.seconds}`;
            }else{
                this.message = `0${this.min}:`;
                this.secondVar = `${this.seconds}`;
            }
        }
        }, 1000);
        
    }
  
    async delay(ms: number){
      await new Promise(resolve => setTimeout(()=> resolve(), ms)).then(()=>console.log("triggered"));
    }
  
    validateInputValues(){
      this.classAdd = true;
      if (this.OTPFormControl.value !="" &&  this.OTPFormControl.value.length==6) {
        console.log("welcome");
        //this.showOTPError = false;
        this.delay(1000).then(any => {
          this.transComp = true;
          this.delay(1000).then(any => {
            this.router.navigate(['reset'], {  
          skipLocationChange: true } );
          })
        })
      } else{
       
        this.delay(1000).then(any => {
          this.classAdd = false;
          this.transComp = false;
          //this.showOTPError = true;
        })
      }
    }

    onEnterKeyFO(trig){
      if(trig.keyCode==13){
        this.validateInputValues();
      }
    }
    resendOTP(){
      //call API for resending OTP
      this.otpExpired = false; 
      this.orientation = "none";
      this.clearTimer();
      this.message = ``;
      this.secondVar = ``;
      this.delay(1000).then(any => {
      this.intervalId = 0;
      this.seconds = 60;
      this.min = 4;
      this.start();
      })
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

    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;

    }

    otpEntered(){
      console.log("values entered"+ this.OTPFormControl.value);
      if(this.OTPFormControl.value !="" ){  
        this.otpNotEmpty = true;
        if(this.OTPFormControl.value.length==6){
          this.showOTPError = false;
        }else{
          this.showOTPError = true;
        }
      }else{
        this.otpNotEmpty = false;
      }  
    }

   
  
   

  
  }
