import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
type Orientation = ( "prev" | "next" | "none" );
@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  animations: [
    trigger('otpAnim', [
      transition(':enter', [
        style({transform: 'translateX(30%)'}),
        animate(100)
      ]),
      
    ]),
  ]
})
export class MetadataComponent implements OnInit {
  public orientation: Orientation;
  private changeDetectRef: ChangeDetectorRef;
  metaDataList:any;
  addClicked:boolean;
  value: string='-';
  availId:any;
  logsDetails = [{"name":'John Paul', "date":"1/12", "val": "Actors: #ATOM"},
              {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1. Jude Law"},
              {"name":'John Paul', "date":"1/12", "val": "Actors: #CAS"},
              {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"}];
  availDetail: any;
  details: any;
  availdetailId: any;
  show: boolean;
  sizeVar: any;
  close: boolean;
  avail: boolean;
  changedWidth:boolean;
  changeColor: boolean;
  switchvalue:boolean;
  changeText: any;
  user: any;
  showStatus: boolean;
  titleName: string;
  availName:any;
  constructor(private httpservice: HttpService, private activatedRoute: ActivatedRoute) {
    this.show=true;
    this.close=false;
    this.addClicked=false;
    this.sizeVar=12;
    this.changedWidth = false;
    this.changeColor =false;
    this.switchvalue = true;
    this.changeText= "Comment";
    this.user = this.metaDataListUpdateVal;
   }
  comments = [{"name":'Sent for Transalation', "date":"1/12"},
              {"name":'The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path.', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              ];
   
              showInput(){
                this.addClicked = true;
              }
  addComment(trigg, newComment: string) {
    if(trigg.keyCode==13){
     
      if (newComment) {
        var toDate = Date();
        this.comments.push({"name": newComment, "date": toDate});
      }
  }
  }
  
  metaDataShow(avail) {
   this.show=false;
   this.close=true;
   this.changedWidth = true;
   
 
  //  document.getElementById("OriginalData").style.width = "100%";
   this.details= this.metaDataList.filter(availdata=>{
      return availdata.title_Id==avail;
    }) 
  }
  dataShow(data){
    this.user = data;
  }
  showComment(){
    this.close= false;
    this.show=true;
    this.changedWidth = false;
    
  }
  showTitleStatus() {
    this.showStatus = true;

  }
  commentColor(){
    if(!this.changeColor){
      this.changeColor =true;
    }else{
      this.changeColor =false;
    }
  }
  
  metaDataListUpdateVal:String="1. Jude Law";
  update(data: string) { 
    //var modifiedData = data.replace(/^\s*|\s*$/g,'');
    this.metaDataListUpdateVal = data;
    var toDate = Date();
    this.logsDetails.push({"name": "hi", "date": toDate, "val": data});
  }

  dataSource(database){
if(database==='atom'){
return 'rgba(3, 144, 244,1)';
}
else if(database==='cas')
return 'rgb(70, 22, 92)';
else if(database==='sap'){
  return 'rgb(13, 26, 13)';
}
  }
  changewidth(){
   return true;
  }
  getWidth() {
    return '100%';
  }


 sizePlus(){
  this.sizeVar=this.sizeVar+1;
 }
 sizeMinus(){
  this.sizeVar=this.sizeVar-1;
 }
  addHero(newHero: string) {
    if (newHero) {
      this.metaDataList.push(newHero);
    }
  }
openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  
}
openBox(){
  document.getElementById("compareBox").style.width = "100%";
}
closeBox(){
  document.getElementById("compareBox").style.width = "0";
}
  ngOnInit() {
    //this.changeText= "Comment";
    this.httpservice.getMetaData().subscribe(data=>{
      this.metaDataList=data;
    })
    this.activatedRoute.queryParams.subscribe(params => {
      this.titleName = params['title_name'];
      this.availName = params['avail_name'];
      console.log(this.availName)
    });
    // this.httpservice.detailsOfAvail().subscribe(data=>{
    //   this.availDetail=data;
    //   console.log('this.availDetail',this.availDetail);
    // })

   
  }

  onEnterKeyMeta(trig, availId){
    if(trig.keyCode==13){
      this.metaDataShow(availId);
    }
  }
  valuechange(event, value){
    this.changeText = null;
    if(value==undefined){
      this.changeColor =false;
      this.changeText= "Escalaton";
    }else if(value){
      this.changeColor = true;
      this.changeText= "Escalaton";
    }else if(!value){
      this.changeColor =false;
      this.changeText= "Comment";
    }
    console.log("jasdghasdasdasdf : "+value+ "   "+ this.changeText)
  }
  reload() {
    location.reload();
  }

}
