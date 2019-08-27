import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpService
} from '../../services/http.service';
@Component({
  selector: 'app-translation-config',
  templateUrl: './translation-config.component.html',
  styleUrls: ['./translation-config.component.scss']
}) export class TranslationConfigComponent implements OnInit {
  languageData: any;countryData: any;lang_name: any;languageCount:any;cont_name: any;multipleList: any = [];multipleArray: any = [];showContacts: boolean = false;COMMENTS = 'COMMENTS';Comments = '';displayComments: boolean = false;userData: any;email: any;
  countryCount:any;constructor(private httpService: HttpService) {}
  getColor(i) {
      if (this.languageData) {
          if (i == 0) return "rgba(0, 0, 0, 0.37)";
          else if (i % 2 == 0) return "rgba(0, 0, 0, 0.37)";
          else return "rgba(0, 0, 0, 0.16)";
      }
  }
  getColorlang2(i) {
      if (this.languageData) {
          if (i == 0) return "rgba(0, 0, 0, 0.14)";
          else if (i % 2 == 0) return "rgba(0, 0, 0, 0.14)";
          else return "rgba(232, 232, 232, 1)";
      }
  }
  selectLang(langname) {
      this.showContacts = true;
      this.lang_name = langname;
  }
  comments = [];addComments(Comments: string) {
      if (Comments) {
          this.comments.push(Comments);
      }
  }
  showComments() {
      this.displayComments = true;
  }
  ngOnInit() {
      this.httpService.getlanguagesData().subscribe(data => {
          this.languageData = data;
          for (let i = 0; i < this.languageData.length; i++) {
            this.countryCount = this.languageData.length;
            this.languageCount=this.languageData.length;}
          for (let i = 0; i < this.languageData; i++) {
              this.lang_name = this.languageData[i].language_name;
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
