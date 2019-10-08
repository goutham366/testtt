import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import {  ActivatedRoute } from '@angular/router';
interface Stages {
  stageTitle: String;
}
@Component({
  selector: 'app-avail-titles',
  templateUrl: './avail-titles.component.html',
  styleUrls: ['./avail-titles.component.scss']
})
export class AvailTitlesComponent implements OnInit {
  showStatus: any;
  availList: any;
  titleStatus: boolean = false;
  langStatus: boolean = false;
  transStatus: boolean = false;
  accStatus: boolean = false;
  width: any;
  account: any;
  titleName: any;
  avail_title:any;
  remaining:any;
  public stages:Stages[];
  status:any;
  ImageUrl: string = " ";
  fileToUpload: File;
  removeButton: boolean;
  files: any;
  selectedRecord: any;
  uploadStatus: boolean;
  progress: number;

  constructor(private httpService: HttpService,private activatedRoute:ActivatedRoute) {
    console.log("cons");
    
    this.stages = [
      {stageTitle: "Announced"},
      {stageTitle: "Data Collation"},
      {stageTitle: "Quality Audit"},
      {stageTitle: "Data Delivery"}
  ];

  this.ImageUrl = 'assets/images/dummy.jpg';
  this.removeButton = false;

}
  
  showTitleStatus(index) {
    this.showStatus = index;
    this.accStatus = false;
    this.langStatus = false;
    this.transStatus = false;
    this.account = index;
  }
  showAccounts(index, event) {
    this.account = index;
    this.showStatus = -1;
    const hashClass = event.target.classList.contains("clicked");
    console.log("hashClass", hashClass);
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showCountries(index, event) {
    this.account = index;
    this.showStatus = -1;
    const hashClass = event.target.classList.contains("clicked");
    console.log("hashClass", hashClass);
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showTranslations(index, event) {
    this.account = index;
    this.showStatus = -1;
    const hashClass = event.target.classList.contains("clicked");
    console.log("hashClass", hashClass);
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  selectTab(title, tabselected) {
    for (let i = 0; i < this.availList.length; i++) {  
      for (let j = 0; j < this.availList[i].avail_details.length; j++) {
       var s=this.availList[i].avail_details;
       if (title ===s[j].titlesDetails[j].title_name) {
            if (tabselected == "titles") {  
              this.accStatus = true;
              this.langStatus = false;
              this.transStatus = false;
              this.titleName = title;
              this.width=(s[j].titlesDetails[j].accounts_completed/s[j].titlesDetails[j].accounts_count)*100;
              this.remaining=100-this.width;
            }
            else if (tabselected == "countries") {
              this.accStatus = false;
              this.langStatus = true;
              this.transStatus = false;
              this.titleName = title;
              this.width=(s[j].titlesDetails[j].countries_completed/s[j].titlesDetails[j].countries_count)*100;
              this.remaining=100-this.width;
              console.log("width",this.width,this.remaining);
            }
            else if (tabselected == "languages") {
              this.accStatus = false;
              this.langStatus = false;
              this.transStatus = true;
              this.titleName = title;
              this.width=(s[j].titlesDetails[j].languages_completed/s[j].titlesDetails[j].languages_count)*100;
              this.remaining=100-this.width;
            }
          }
       // }
      }
    }
  }

  ngOnInit() {
    console.log("init");
    this.account = -1;
    this.showStatus = -1;
    this.activatedRoute.queryParams.subscribe(params => {
      this.avail_title = params['avail_title'];
    });
    console.log(' this.avail_title', this.avail_title);
    this.httpService.getAvailsDetails().subscribe(data => {
      this.availList = data;  
    // this.availList=  this.availList.filter(data=>{
    //     return data.avail_title == this.avail_title;
    //   })
       console.log('this.availList ',this.availList);
    })
    

  }

  imgClickTrack(record,index) {

    this.showStatus = -1;
    this.accStatus = false;
    this.langStatus = false;
    this.transStatus = false;
    this.account = -1;
    this.selectedRecord = record;
    if (this.selectedRecord.image_url == "") {
      this.uploadStatus = false;
    } else {
      this.uploadStatus = true;
    }
  }
  handleFileInputForAdd(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectedRecord.image_url = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.removeButton = true;
  }
  triggerUpload() {
    this.files = [];
    if (this.ImageUrl == "assets/images/dummy.jpg") {
      const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
      fileUpload.click();
    }
  }

  
  getProgress(data){
    switch(data){
      case "Announced" : this.progress = 0;
                         break;
      case "Data Collation" : this.progress = 1;
                         break;
      case "Quality Audit" : this.progress = 2;
                         break;
      case "Data Delivery" : this.progress = 3;
                         break;
    }

    return this.progress;
  }


}


