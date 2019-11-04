import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ApoTitlesComponent } from '../apo-titles/apo-titles.component';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-avail-filter',
  templateUrl: './avail-filter.component.html',
  styleUrls: ['./avail-filter.component.scss']
})
export class AvailFilterComponent implements OnInit {
  expS3: any;
  expRep: any;

  @Input() childMessage: string;
  @Input() childUrl: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  backgroundColor = '#000000';
  showProgress: boolean;
  showExportProgress: boolean;
  highlight1: boolean;
  highlight2: boolean;
  highlight3: boolean;
  highlight4: boolean;
  highlight5: boolean;
  highlight6: boolean;
  highlight7: boolean;
  highlight8: boolean;
  highlight9: boolean;
  highlight10: boolean;
  highlight11: boolean;
  highlight12: boolean;
  highlight13: boolean;
  highlight14: boolean;
  highlight15: boolean;
  highlight16: boolean;
  id: any;
  myDate: any;

  startYear: any;
  startDate: any;
  availList: any;
  avail_title: any;
  availCount: number;
  filteredOptions: Observable<string[]>;
  showUpload: boolean = false;
  triggerDocName: any;
  relaseDocumentName: any;
  itunesDocumentName: any;
  errorMessage: any;
  filename: any;
  filterShow: any;
  uploadreleaseData: any;
  triggerData: Object;
  successCase: boolean;
  errorCase: boolean;
  successMessage: any;
  s3Resp: any;
  secndUrlResp: any;
  //thirdUrlData: any;
  apoObject: any;
  exporturl: string;
  apiResp: any;
  errorURl: any;
  apiURL: any;
  errorMessageDownload: any;
  enableSaveFlag: boolean = false;
  hideExport: boolean;
  uploadRunningMessage: string;

  constructor(private httpService: HttpService) {
    this.errorCase = false;
    this.highlight1 = false;
    this.highlight2 = false;
    this.startYear = "2019";
    this.startDate = "";
    this.myDate = "";
    //this.apoObject=new ApoTitlesComponent(httpService,activatedRoute);
    // this.httpService.getAvailsDetails().subscribe(data => {
    //   this.availList = data;
    //   this.availCount = this.availList.length;
    //   this.activatedRoute.queryParams.subscribe(params => {
    //     this.avail_title = params['avail_title'];
    //     console.log('this.avail_title filter', this.avail_title);
    //   });
    //   if (this.avail_title) {
    //     this.startYear = this.avail_title.substring(8);
    //     this.startDate = "";
    //     this.myDate = "";
    //   }
    //   else {
    //     this.startYear = "2019";
    //     this.startDate = "";
    //     this.myDate = "";
    //   }
    // })

  }
  clickDate(c) {
    if (!c) {
      this.startDate = `01/01/` + this.startYear;
    //  console.log('this.startDate', this.startDate);

    } else {
      this.myDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');
     // console.log('this.myDate', this.myDate);
    }
  }

  call(id) {
    switch (id) {
      case 1: {
        if (this.highlight1) {
          this.highlight1 = false;
        } else {
          this.highlight1 = true;
        }
      //  console.log("", "654545");
        break;
      }
      case 2: {
        if (this.highlight2) {
          this.highlight2 = false;
        } else {
          this.highlight2 = true;
        }
      //  console.log("", "5757");
        break;
      }
      case 3: {
        if (this.highlight3) {
          this.highlight3 = false;
        } else {
          this.highlight3 = true;
        }
    //    console.log("", "5757");
        break;
      }
      case 4: {
        if (this.highlight4) {
          this.highlight4 = false;
        } else {
          this.highlight4 = true;
        }
        break;
      }
      case 5: {
        if (this.highlight5) {
          this.highlight5 = false;
        } else {
          this.highlight5 = true;
        }
        break;
      }
      case 6: {
        if (this.highlight6) {
          this.highlight6 = false;
        } else {
          this.highlight6 = true;
        }
        break;
      }
      case 7: {
        if (this.highlight7) {
          this.highlight7 = false;
        } else {
          this.highlight7 = true;
        }
        break;
      }
      case 8: {
        if (this.highlight8) {
          this.highlight8 = false;
        } else {
          this.highlight8 = true;
        }
        break;
      }
      case 9: {
        if (this.highlight9) {
          this.highlight9 = false;
        } else {
          this.highlight9 = true;
        }
        break;
      }
      case 10: {
        if (this.highlight10) {
          this.highlight10 = false;
        } else {
          this.highlight10 = true;
        }
        break;
      }
      case 11: {
        if (this.highlight11) {
          this.highlight11 = false;
        } else {
          this.highlight11 = true;
        }
        break;
      }
      case 12: {
        if (this.highlight12) {
          this.highlight12 = false;
        } else {
          this.highlight12 = true;
        }
        break;
      }
      case 13: {
        if (this.highlight13) {
          this.highlight13 = false;
        } else {
          this.highlight13 = true;
        }
        break;
      }
      case 14: {
        if (this.highlight14) {
          this.highlight14 = false;
        } else {
          this.highlight14 = true;
        }
        break;
      }
    }
  }
  ngOnInit() {
    if (this.childMessage === 'SERIES' || this.childMessage === 'SEASON' || this.childMessage === 'Episodes' || this.childMessage === 'TV' || this.childMessage === 'Account-Titles') {
      this.hideExport = true;
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onClickMe() {
    this.backgroundColor = '#000000';
  }

  uploadDoc() {
    //console.log('uploadDoc')
    this.showUpload = true;
  }
  upload(files: File[], childMessage) {
    var formData = new FormData();
    this.errorMessage = null;
    this.successMessage = null;
    this.successCase = false;
    this.filename = files[0].name;
    Array.from(files).forEach(f => formData.append('file', f))
    this.triggerDocName = this.filename.includes('Trigger');
    this.relaseDocumentName = this.filename.includes('Release');
    this.itunesDocumentName = this.filename.includes('iTunes');
    this.showProgress = true;
 //   console.log(files[0].name, 'filename')
    var extension = this.filename.substr(this.filename.lastIndexOf('.'));
    if ((extension.toLowerCase() === ".xlsx")) {
      if (files[0].size <= 31457280) {
        if (((this.relaseDocumentName || this.triggerDocName) && childMessage === 'APO') || (childMessage === 'iTunes' && this.itunesDocumentName)) {
          this.httpService.uploadToS3(formData).subscribe(data => {
            this.showProgress = true;
            this.s3Resp = data;

            this.httpService.uploadS3toAWS(this.s3Resp.s3filename).subscribe(data => {
              this.showProgress = true;
          //    console.log("second call data : " + data);
              this.secndUrlResp = data;
              if (data['status'] = "success") {
                this.showProgress = false;
                this.successCase = true;
                this.errorCase = false;
                this.successMessage = data['successMessage'];
                if (this.itunesDocumentName) {
                  this.httpService.itunesRefreshComp.next();
                }
                else if (this.relaseDocumentName || this.triggerDocName) {
                  this.httpService.refreshcomp.next();
                }
              }
            },
              error => {
                this.showProgress = false;
                this.errorCase = true;
                this.successCase = false;
                this.successMessage = null;
                if (error.error.message == undefined || error.error.message == null) {
                  //this.errorMessage = "Upload is running in background, Please visit later";
                  this.uploadRunningMessage = "Upload is running in background, Please visit later"
                } else {
                  this.errorMessage = error.error.message;
                }

              }
            )
          },
            error => {
              this.showProgress = false;
              this.errorCase = true;
              this.successCase = false;
              this.successMessage = null;
              this.errorMessage = error.error.message;
              // console.log('S3 Doc Error', error);
            }
          )
        }
        else {
          if (this.childMessage === "APO") {
            this.showProgress = false;
            this.errorMessage = "Not a Release/Trigger Document";
            this.errorCase = true;
            this.successCase = false;
            this.successMessage = null;
          }
          else if (this.childMessage === "iTunes") {
            this.showProgress = false;
            this.errorMessage = "Not an iTunes Document";
            this.errorCase = true;
            this.successCase = false;
            this.successMessage = null;
          }


        }
      }
      else {
        this.showProgress = false;
        this.errorMessage = "Maximum file size exceeded";
        this.errorCase = true;
        this.successCase = false;
        this.successMessage = null;
      }
    }
    else {
      this.showProgress = false;
      this.errorCase = true;
      this.errorMessage = "Is not a valid file format";
      this.successCase = false;
      this.successMessage = null;
    }
  }
  openingModal() {
    this.showProgress = false;
    this.successCase = false;
    this.errorCase = false;
    this.filename = '';
    this.errorMessage = "";
    this.enableSaveFlag = false;
    this.errorMessageDownload = '';
  }
  export(page) {
    this.showExportProgress = true;
    if (page === 'APO') {
      this.httpService.exportToS3('APO').subscribe(data => {
        this.showExportProgress = true;
        this.expRep = data;
        if (data['status'] = "Success") {
          this.successCase = true;
          this.errorCase = false;
          this.showExportProgress = false;
          // console.log('entered');
          this.httpService.exporS3ToLcal('APO').subscribe(data => {
            this.apiResp = data;
            this.apiURL = this.apiResp.url;
            this.enableSaveFlag = true;
          }, error => {
            this.errorCase = true;
            this.successCase = false;
            this.showExportProgress = false;
            this.errorURl = error.error.text;
            this.errorMessageDownload = error.error.message;
          }
          )
        }
      }, error => {
        this.errorCase = true;
        this.successCase = false;
        this.showExportProgress = false;
        this.errorURl = error.error.text;
        this.errorMessageDownload = error.error.message;

      }
      )

    }
    else if (page === 'iTunes') {
      this.showExportProgress = true;
      this.httpService.exportToS3('ITUNES').subscribe(data => {
        this.showExportProgress = true;
        this.expRep = data;
        if (data['status'] = "Success") {
          this.successCase = true;
          this.errorCase = false;
          this.showExportProgress = false;
          this.httpService.exporS3ToLcal('ITUNES').subscribe(data => {
            this.apiResp = data;
            this.apiURL = this.apiResp.url;
            this.enableSaveFlag = true;
          }, error => {
            this.errorCase = true;
            this.successCase = false;
            this.showExportProgress = false;
            this.errorURl = error.error.text;
            this.errorMessageDownload = error.error.message;

          }
          )
        }
      }, error => {
        this.errorCase = true;
        this.successCase = false;
        this.showExportProgress = false;
        this.errorURl = error.error.text;
        this.errorMessageDownload = error.error.message;
      }

      )
    }
    else if (page === 'tv') {
      var url = 'http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/download/TV';
      return url;
    }
  }
  buttons = [
    { text: 'Download', isClicked: true }
  ]
}

