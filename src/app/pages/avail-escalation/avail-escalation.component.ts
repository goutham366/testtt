import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avail-escalation',
  templateUrl: './avail-escalation.component.html',
  styleUrls: ['./avail-escalation.component.scss']
})
export class AvailEscalationComponent implements OnInit {

  showDetails: any;
  showStatus: any;
  width: any;
  posts: any;
  availsList: any = [];
  showTitlesText: any;
  sidenav_title: any;
  showCountriesText: any;
  showLanguagesText: any;
  completedWidth: any;
  pendingWidth: any;
  semicircle: false;

  constructor(private activatedRoute:ActivatedRoute) { }


  ngOnInit() {
    this.showDetails = -1;
    this.width = 75;
    this.activatedRoute.queryParams.subscribe(params => {
      this.sidenav_title = params['sidenav'];
    });
    // var currentDate = moment('2015-10-30');
    // var futureMonth = moment(currentDate).add(1, 'M');
    // for(let i = 0; i < this.availsList.length; i++) {

    // }
    this.availsList = [
      {
        "id": "1",
        "avail_name": "availOne",
        "avail_title": "FN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "60",
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
        "avail_title": "FN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "40",
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
      {
        "id": "3",
        "avail_name": "availThree",
        "avail_title": "FN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "100",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "3",
                "title_name": "12 Strong",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "70",
                "status": "Announced",
                "image_url": "assets/images/12strong_big.jpg",
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
            "titlesCount": "114",
            "titlesCompleted": "14",
            "titlesPending": "100",
            "countriesCount": "160",
            "countriesCompleted": "80",
            "countriesPending": "80",
            "languagesCount": "180",
            "languagesCompleted": "90",
            "languagesPending": "90",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "15",
            "escalations_avail_count": "3"
          }
        ]
      },
      {
        "id": "4",
        "avail_name": "availFour",
        "avail_title": "FN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "20",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "4",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
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
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "123",
            "pending_avail_ratings_count": "34",
            "pending_avail_clarifications_count": "145",
            "escalations_avail_count": "2"
          }
        ]
      },
           {
        "id": "5",
        "avail_name": "availFive",
        "avail_title": "FN JAN2015",
        "date_of_arrival": "01/15",
        "date_of_delivery": "21/03",
        "total_avail_percentage": "70",
        "avail_details": [
          {
            "titlesDetails": [
              {
                "id": "5",
                "title_name": "Game Night",
                "announced_date": "12/09",
                "release_date": "12/12",
                "percentage_title": "30",
                "status": "Announced",
                "image_url": "assets/images/Game_Night_big.jpg",
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
            "titlesCount": "120",
            "titlesCompleted": "40",
            "titlesPending": "80",
            "countriesCount": "160",
            "countriesCompleted": "70",
            "countriesPending": "90",
            "languagesCount": "114",
            "languagesCompleted": "14",
            "languagesPending": "100",
            "pending_avail_translations_count": "132",
            "pending_avail_ratings_count": "112",
            "pending_avail_clarifications_count": "13",
            "escalations_avail_count": "6"
          }
        ]
      }


    ]
  }
  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': '48%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '54%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': '12px'
    };
  }

  showtitlesDiv(event,index) {
    this.showDetails = index;
    const hashClass = event.target.classList.contains("clicked");
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showcountriesDiv(event,index) {
    this.showDetails = index;
    const hashClass = event.target.classList.contains("clicked");
    if (hashClass) {
      event.srcElement.classList.remove("clicked");
    }
    else {
      event.srcElement.classList.add("clicked");
    }
  }
  showlanguagesDiv(event,index) {
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
      for(let j = 0; j < this.availsList[i].avail_details.length; j++ ) {
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

}
