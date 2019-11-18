import { Component, OnInit, OnChanges } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
import { AuthService } from '../../services/auth.service'  

interface Nav {
  id: number;
  sideTitle: string;
  sideData: string;
  }
   
  type Orientation = ( "prev" | "next" | "none" );


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authStyles.scss'],
  animations: [
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
export class LoginComponent implements OnInit {

  public orientation: Orientation;
  public selectedNav: Nav;

  private changeDetectRef: ChangeDetectorRef;
  private navs: Nav[];

  loginForm: FormGroup;
  showError = false;
  userDetails = [{ 'name': 'neha', 'password': 'neha1' }, 
  { 'name': 'jayesh', 'password': 'jayesh1' },
  { 'name': 'manoj', 'password': 'manoj1' },
  { 'name': 'sridhar', 'password': 'sridhar1' },
  { 'name': 'srinivasan', 'password': 'srinivasan1' },
  { 'name': 'nithia', 'password': 'nithia1' }];
  type= "password";
  transComp:boolean;
  classAdd:boolean;
  userNotEmpty:boolean
  passwordNotEmpty:boolean;
  textColor:boolean;
  constructor(private fb: FormBuilder, private router: Router, private service: HttpService,  changeDetectRef: ChangeDetectorRef, private authService : AuthService  ) { 
    this.changeDetectRef = changeDetectRef;
    this.textColor = false;
   this.transComp = false;
    this.classAdd = false;
    this.userNotEmpty = false;
    this.passwordNotEmpty = false;
        this.orientation = "none";
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

  async delay(ms: number){
    await new Promise(resolve => setTimeout(()=> resolve(), ms)).then(()=>console.log("triggered"));
  }

  


  ngOnInit() {
    this.loginForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    this.authService.logout();  
  }
  
  get f() {
    return this.loginForm.controls;
  }

  passwordEntered(myEvent){
    if(this.loginForm.value.password.length >0){
     this.passwordNotEmpty = true;
     }else{
      this.passwordNotEmpty = false;
    }
    if(myEvent.keyCode==8){
      this.textColor = false;
    }
  }

  userEntered(myEvent){
    if(this.loginForm.value.name.length >0){
      this.userNotEmpty = true;
     }else{
      this.userNotEmpty = false;
    }
    if(myEvent.keyCode==8){
      this.textColor = false;
    }
  }

  
  onSubmit() {
    this.classAdd = true;
    //for (var i = 0; i < this.userDetails.length; i++) {
      if (
        ("neha" == this.loginForm.value.name && "neha1" == this.loginForm.value.password)
       || ("jayesh" == this.loginForm.value.name && "jayesh1" == this.loginForm.value.password)
       || ("manoj" == this.loginForm.value.name && "manoj1" == this.loginForm.value.password)
       || ("sridhar" == this.loginForm.value.name && "sridhar1" == this.loginForm.value.password)
       || ("srinivasan" == this.loginForm.value.name && "srinivasan1" == this.loginForm.value.password)
       || ("nithia" == this.loginForm.value.name && "nithia1" == this.loginForm.value.password)) {
        console.log("welcome");
        this.showError = false;
        this.textColor = false;
        this.delay(1000).then(any => {
          this.transComp = true;
          this.delay(200).then(any => {
            sessionStorage.setItem('isLoggedIn', "true");  
            sessionStorage.setItem('token', this.loginForm.value.name);  
            this.router.navigate(['pages'], {  
          skipLocationChange: false } );
          })
        })
        //break;
      } else{
       
        this.delay(1000).then(any => {
          this.classAdd = false;
          this.transComp = false;
          this.showError = true;
          this.textColor = true;
        })
      }
    //}
    console.log("login details......", this.loginForm.value);
    
  }

  sideTitle:any 
  onEnterKey(trig){
    if(trig.keyCode==13){
      this.onSubmit();
    }
  }

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
  
 showMe(){
    this.type = "text";
  }
  hideMe(){
    this.type = "password";
  }
  focus(){
    this.textColor = false;
  }

}
