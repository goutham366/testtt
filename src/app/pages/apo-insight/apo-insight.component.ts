import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CropperSettings } from 'ng2-img-cropper';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apo-insight',
  templateUrl: './apo-insight.component.html',
  styleUrls: ['./apo-insight.component.scss']
})
export class AvailInsightComponent implements OnInit {
  showDetails: any;
  showStatus: any;
  width: any;
  availsList: any = [];
  showTitlesText: any;
  showCountriesText: any;
  showLanguagesText: any;
  completedWidth: any;
  pendingWidth: any;
  showDetails1: boolean;
  showDetails2: boolean;
  showDetails3: boolean;
  removeButton: boolean;
  removeAddButton: boolean;
  COMMENTS = 'COMMENTS';
  Comments: string = '';
  multipleList: any = [];
  multipleArray: any = [];
  availDetailsViewList: any;
  availName: string;
  titleId: any;
  titleName: string;
  titleStartDate: any;
  titleEndDate: any;
  condition: boolean;
  cropTitle:any;
  cropAccounts:any;
  cropCountries:any;
  cropLanguages:any;
  stages: { stageTitle: string; }[];
  progress: number;
  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  cropImage() {
    let img = document.getElementsByName("main_img")[0];
    if (img != null) {
      let main_img = img["src"];
      var image: any = new Image();
      image.src = main_img;
      this.cropper.setImage(image);
    }
  }

  saveCropImage() {
    let img_final = document.getElementsByName("final_img")[0];
    if (img_final) {
      let final_img = document.getElementsByName("final_img")[0]["src"];
      document.getElementsByName("main_img")[0]["src"] = final_img;
    }
  }

  addMultipleValue(point) {
    if (!this.multipleList[point]) {
      this.multipleList[point] = [];
      this.multipleArray[point] = [];
      this.removeAddButton = false;
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
    if (!this.removeButton) {
      this.removeButton = true;
    } else {
      this.removeButton = false;
    }
  }
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.data = {};
    this.cropperSettings.croppedWidth = 175
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 350;
    this.cropperSettings.canvasHeight = 200;
    this.data = {};

    this.stages = [
      { stageTitle: "Announced" },
      { stageTitle: "Data Collation" },
      { stageTitle: "Quality Audit" },
      { stageTitle: "Data Delivery" }
    ];
  }
  ngOnInit() {
    this.showDetails = -1;
    this.width = 75;
    this.showDetails = true;
    this.showDetails1 = true;
    this.showDetails2 = true;
    this.showDetails3 = true;
    this.width = 75;
    this.route.queryParams.subscribe(params => {
      this.availName = params['avail_name'];
      this.titleId = params['titleId'];
      this.titleName = params['title_name'];
      let str =  this.availName;
      let res = str.split(" ");
      if( res[0]==="IN"){
        this.condition = true;
      }else if( res[0]==="FN"){
        this.condition = false;
      }
    });
    this.httpService.getAvailDetailsView().subscribe(data => {
      this.availDetailsViewList = data;
      this.titleStartDate = this.availDetailsViewList.StartDate;
      this.titleEndDate = this.availDetailsViewList.DueDate
      console.log(this.availDetailsViewList);
    })


    this.route.queryParams
        
    .subscribe(params => {
        this.cropTitle = params.title;
        this.cropAccounts = params.accounts;
        this.cropCountries = params.countries;
        this.cropLanguages = params.languages;
        console.log('Avails Details data', this.cropAccounts);
    });

    this.availsList = [
      {
        "id": "1",
        "avail_name": "availOne",
        "avail_title": "FC JAN232019",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "1",
                "title_name": "Aquaman",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/aquaman_big.jpg",
                "accounts_count": "70",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "114",
            "titlesCompleted": "100",
            "titlesPending": "14",
            "countriesCount": "150",
            "countriesCompleted": "90",
            "countriesPending": "60",
            "languagesCount": "120",
            "languagesCompleted": "70",
            "languagesPending": "50",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
      {
        "id": "2",
        "avail_name": "availTwo",
        "avail_title": "FC JAN232019",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "2",
                "title_name": "A Star is Born",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "60",
                "status": "Announced",
                "image_url": "assets/images/a_star_is_born_big.jpg",
                "accounts_count": "114",
                "countries_count": "32",
                "languages_count": "28",
                "accounts_completed": "100",
                "accounts_pending": "14",
                "countries_completed": "30",
                "countries_pending": "2",
                "languages_completed": "20",
                "langauges_pending": "8",
                "pending_title_translations_count": "112",
                "pending_title_ratings_count": "115",
                "pending_title_clarifications_count": "38",
                "escalations_title_count": "2"
              }
            ],
            "titlesCount": "100",
            "titlesCompleted": "50",
            "titlesPending": "50",
            "countriesCount": "150",
            "countriesCompleted": "60",
            "countriesPending": "90",
            "languagesCount": "120",
            "languagesCompleted": "60",
            "languagesPending": "60",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "2"
          }
        ]
      },
    ]
  }

  showtitlesDiv(event, index) {
    this.showDetails = index;
    const hashClass = event.target.classList.contains("clicked");
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showcountriesDiv(event, index) {
    this.showDetails = index;
    const hashClass = event.target.classList.contains("clicked");
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showlanguagesDiv(event, index) {
    this.showDetails = index;
    const hashClass = event.target.classList.contains("clicked");
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }

  showAvailStatus(index) {
    this.showStatus = index;
    this.showDetails = null;
  }
  rotate(title, clickedText) {
    for (let i = 0; i < this.availsList.length; i++) {
      for (let j = 0; j < this.availsList[i].avail_details.length; j++) {
        let tName = this.availsList[i].avail_name;
        if (title === tName) {
          if (clickedText === "titles") {
            this.showTitlesText = "Titles";
            this.completedWidth = this.availsList[i].avail_details[0].titlesCompleted;
            this.pendingWidth = this.availsList[i].avail_details[0].titlesPending;
            this.showCountriesText = null;
            this.showLanguagesText = null;
          }
          else if (clickedText == "countries") {
            this.showCountriesText = "Countries";
            this.completedWidth = this.availsList[i].avail_details[0].countriesCompleted;
            this.pendingWidth = this.availsList[i].avail_details[0].countriesPending;
            this.showTitlesText = null;
            this.showLanguagesText = null;
          }
          else if (clickedText == "languages") {
            this.showLanguagesText = "Languages";
            this.completedWidth = this.availsList[i].avail_details[0].languagesCompleted;
            this.pendingWidth = this.availsList[i].avail_details[0].languagesPending;
            this.showTitlesText = null;
            this.showCountriesText = null;
          }
        }
      }

    }
  }
  reload() {
    location.reload();
  }

  getProgressFill(title) {
    if(title==""){
      return -1
    }else{
      var result= this.getProgressSwitch(title);
      return result;
    }
  }
  getProgressSwitch(title){
    switch (title) {
      case "Announced": this.progress = 0;
        break;
      case "Data Collation": this.progress = 1;
        break;
      case "Quality Audit": this.progress = 2;
        break;
      case "Data Delivery": this.progress = 3;
        break;
      case "": this.progress = 0;
        break;

    }
    return this.progress;
  }

}
