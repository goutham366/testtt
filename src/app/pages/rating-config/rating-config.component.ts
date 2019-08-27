import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-rating-config',
  templateUrl: './rating-config.component.html',
  styleUrls: ['./rating-config.component.scss']
}) export class RatingConfigComponent implements OnInit {
  countryData: any; rating: any; flag: any; cont_name: any; showRatings: any; countryname: any; ratingData: any; email: any; COMMENTS = 'COMMENTS'; Comments = ''; ratings: any; show: boolean = false; displayComments: boolean = false; keydata: any; userData: any; keys: any; keyno: number = 0; ratingkey: any; countryCount: any; ratingscount: any; constructor(private httpService: HttpService) { }
  getColor(i) {
    if (this.countryData) {
      if (i == 0) return "rgba(0, 0, 0, 0.37)";
      else if (i % 2 == 0) return "rgba(0, 0, 0, 0.37)";
      else return "rgba(0, 0, 0, 0.16)";
    }
  }
  getColorlang2(i) {
    if (this.countryData) {
      if (i == 0) return "rgba(0, 0, 0, 0.14)";
      else if (i % 2 == 0) return "rgba(0, 0, 0, 0.14)";
      else return "rgba(232, 232, 232, 1)";
    }
  }
  selectcont(country_name, i) {
    console.log('country_name', country_name);
    this.flag = i;
    this.cont_name = country_name;
  }
  comments = []; addComments(Comments: string) {
    if (Comments) {
      this.comments.push(Comments);
    }
  }
  showComment() {
    this.displayComments = true;
  }
  ratingComments() {
    this.show = true;
  }
  showComments(key) {
    this.ratingkey = key;
  }
  ngOnInit() {
    this.httpService.getCountriesData().subscribe(data => {
      this.countryData = data;
      for (let i = 0; i < this.countryData.length; i++) {
        this.countryCount = this.countryData.length;
        this.ratings = this.countryData[i].ratings;
        this.keys = Object.keys(this.ratings);
        this.ratingscount = this.keys.length;
        for (let key in this.ratings) {
          // this.ratingscount=this.ratings.keys.length; 
          console.log('this.keys inside', key);
        }
        this.ratingscount = this.keys.length;
        console.log('this.keys', this.keys);
      }
      //     for(let i=0;i<this.countryData.length;i++){      // this.countryname=this.countryData[i].country_name;      // this.ratingData=this.countryData[i].ratings;       console.log('this.ratingData',this.ratingData);          // }      
      console.log('country data', this.countryData, this.countryname);
    }
    )
    this.httpService.getratingData().subscribe(data => {
      this.ratingData = data;
      Object.keys(this.ratingData);
      for (let key in this.ratingData) {
      this.keydata = key;
        //console.log('this.keydata',this.ratingData[key]);  
      }
    })
    this.httpService.getUsersData().subscribe(data => {
      this.userData = data;
      for (let i = 0; i < this.userData; i++) {
        this.email = this.userData[i].user_email;
      }
    })
  }
}