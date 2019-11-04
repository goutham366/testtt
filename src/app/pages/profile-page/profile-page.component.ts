import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { MustMatch } from '../../directives/passwordmatch';
import { MustMatchAlphabets } from '../../directives/alphabets';
import * as d3 from 'd3';
import { ProfilePageWorkChartSVG } from '../../directives/profileWorkSheetChart';


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

  comments = [{"name":'Sent for Transalation', "date":"1/12"},
              {"name":'The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path.', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              {"name":'Hi, Translation received from @Jackson and updated for English short desctiption', "date":"1/12"},
              
              ];
  logsDetails = [{"name":'John Paul', "date":"1/12", "val": "Actors: #ATOM"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1. Jude Law"},
                {"name":'John Paul', "date":"1/12", "val": "Actors: #CAS"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"},
                {"name":'Samuel Tarly', "date":"1/12", "val": "Actors: 1.Bradley Cooper"}];
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



  ngAfterContentInit() { 
      
    var availTitleData = [{"date": 20, "title": "CA JAN152018", "status": "pending"},
                              {"date": 21, "title": "CA JAN152011", "status": "success"},
                              {"date": 22, "title": "CA JAN152014", "status": "success"},
                              {"date": 22, "title": "CA JAN152015", "status": "due"},
                              {"date": 23, "title": "CA JAN152019", "status": "due"},
                              {"date": 23, "title": "CA JAN152020", "status": "success"},
                              {"date": 20, "title": "CA JAN152013", "status": "success"},
                              {"date": 22, "title": "CA JAN152014", "status": "due"},
                              {"date": 23, "title": "CA JAN152024", "status": "due"},
                              {"date": 24, "title": "CA JAN152009", "status": "pending"},
                              {"date": 25, "title": "CA JAN172024", "status": "success"},
                              {"date": 26, "title": "CA JAN162024", "status": "pending"}];

        

        
      
        var myHoriData = [ { "x":0, "y":70   },{ "x": 0, "y":100  },
                    { "x":0, "y":130   },{ "x":0, "y":160  },
                    { "x":0, "y":190 },{ "x":0, "y":220 }, { "x":0, "y":250 },  { "x":0, "y":280 },  { "x":0, "y":310 }];
            

        var myVertData = [ { "x":0, "y":70   },{ "x": 80, "y":70  },
                    { "x":160, "y":70   },{ "x":240, "y":70  },
                    { "x":320, "y":70 },{ "x":400, "y":70 },{ "x":480, "y":70 },{ "x":560, "y":70 },{ "x":640, "y":70 }];
        
        var myXAxisData = [ { "x":64, "y":340},{ "x": 144, "y":340 },
                            { "x":224, "y":340},{ "x": 304, "y":340},
                            { "x":384, "y":340},{ "x":464, "y":340}, { "x":544, "y":340}, { "x":624, "y":340}
                    ]
        var min =  d3.min(availTitleData, function(d) { return d.date; });
        var max =  d3.max(availTitleData, function(d) { return d.date; });
        console.log("svg min date "+ min);
        console.log("svg max date "+ max);

        myXAxisData.forEach(iterFunc);
        function iterFunc(item, index) {
          var date = min+index;
          var string = "2/"+date;
          item["calDate"] = string;
        }

        var myJobData = Array();
        function count() {
          availTitleData.sort(function(a, b){
                return a.date-b.date
          })
          var current;
          var cnt = 0;
          var x = -38;
          var tx = -37;
          for(var i=0;i<availTitleData.length;i++) {
              var y = 290;
              var ty = 304;
              if(availTitleData[i].date != current) {
                if(cnt > 0){
                    x = x+80;
                    tx = tx+80;
                    if(myJobData.length < 1){
                        for(let i=0;i<cnt;i++){
                          y = y-30;
                          ty = ty-30;
                          myJobData.push({"x":x,"y":y, "tx": tx, "ty": ty, "jobStatus": availTitleData[i].status, "jobTitle":availTitleData[i].title});
                        }
                    }else{
                      var c= myJobData.length;
                      for(let j=c;j<cnt+c;j++){
                        y = y-30;
                        ty = ty-30;
                        myJobData.push({"x":x,"y":y, "tx": tx, "ty": ty, "jobStatus": availTitleData[j].status, "jobTitle":availTitleData[j].title});
                      }
                    }
                } 
                current = availTitleData[i].date;
                cnt = 1;
              } else {
                  cnt++;
              }
          }
          if (cnt > 0) {
            var c= myJobData.length;
            x = x+80;
            tx = tx+80;
            var y = 290;
            var ty = 304;
            for(let k=c;k<cnt+c;k++){
              y = y-30;
              ty = ty-30;
              myJobData.push({"x":x,"y":y, "tx": tx, "ty": ty, "jobStatus": availTitleData[k].status, "jobTitle":availTitleData[k].title});
            }
          }
      }
      count();
      

      
      var svgViewport = d3.select("#svgcontainer").append("svg").attr("width", 700).attr("height", 350).attr("x", 500);

      ProfilePageWorkChartSVG(svgViewport, myHoriData, myVertData, myJobData, myXAxisData);
  
  
  }
  

}
