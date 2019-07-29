import { Component, OnInit, OnChanges } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";

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
  userDetails = [{ 'name': 'joe', 'password': 'joe1' }, { 'name': 'alle', 'password': 'alle1' }, { 'name': 'anu', 'password': 'anu1' }];
  type= "password";
  show = false;
  toggleClass:String;
  transComp:boolean;
  classAdd:boolean;
  showEye:boolean;
  textColor:boolean;
  constructor(private fb: FormBuilder, private router: Router, private service: HttpService,  changeDetectRef: ChangeDetectorRef) { 
    this.changeDetectRef = changeDetectRef;
    this.textColor = false;
   this.transComp = false;
    this.classAdd = false;
    this.showEye = false;
        this.orientation = "none";
        this.toggleClass = "fa fa-eye eyePos";
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

  async delay(ms: number){
    await new Promise(resolve => setTimeout(()=> resolve(), ms)).then(()=>console.log("triggered"));
  }

  


  ngOnInit() {
    this.loginForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }
  
  get f() {
    return this.loginForm.controls;
  }

  passwordEntered(){
    console.log("values entered"+ this.loginForm.value.password.length);
    if(this.loginForm.value.password.length >0){
     this.showEye = true;
     }else{
      this.showEye = false;
    }
  }

  
  onSubmit() {
    this.classAdd = true;
    for (var i = 0; i < this.userDetails.length; i++) {
      if (this.userDetails[i].name == this.loginForm.value.name && this.userDetails[i].password == this.loginForm.value.password) {
        console.log("welcome");
        this.showError = false;
        this.textColor = false;
        this.delay(1000).then(any => {
          this.transComp = true;
          this.delay(200).then(any => {
            this.router.navigate(['pages'], {  
          skipLocationChange: true } );
          })
        })
        break;
      } else{
       
        this.delay(1000).then(any => {
          this.classAdd = false;
          this.transComp = false;
          this.showError = true;
          this.textColor = true;
        })
      }
    }
    console.log("login details......", this.loginForm.value);
    
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
