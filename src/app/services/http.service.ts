import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url: string = 'http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform';
  lambda: string = 'https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage';
  awsS3Url: string = 'http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8082/AWSS3';
  localurl: string = 'http://10.219.20.213:8082/AWSS3';
  refreshcomp: Subject<any>;
  availrefreshcomp: Subject<any>;
  itunesRefreshComp: Subject<any>;
  tvRefreshComp: Subject<any>;
  private messageSource = new BehaviorSubject('New');
  private messageiTunesSource = new BehaviorSubject('iTunes');
  private tvmessageSource = new BehaviorSubject('New');

  currentMessage = this.messageSource.asObservable();
  iTunesMessage = this.messageiTunesSource.asObservable();
  tvMessage = this.tvmessageSource.asObservable();
  relaseuploadURL: string;
  triggerUploadUrl: string;

  constructor(private http: HttpClient) {
    this.refreshcomp = new Subject<any>();
    this.availrefreshcomp = new Subject<any>();
    this.itunesRefreshComp = new Subject<any>();
    this.tvRefreshComp = new Subject<any>();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeiTunesMessage(message: string) {
    this.messageiTunesSource.next(message);
  }
  changeTvMessage(message: string) {
    this.tvmessageSource.next(message);
  }
  getlanguagesData() {
    return this.http.get(`./assets/json/New_Languages.json`);
  }
  getAvailsDetails() {
    return this.http.get(`./assets/json/Avails.json`);
  }
  getCountriesData() {
    return this.http.get(`./assets/json/countries.json`);
  }
  getUsersData() {
    return this.http.get(`./assets/json/user.json`);
  }
  getUser() {
    return this.http.get(`./assets/json/users.json`);
  }
  getUserData() {
    return this.http.get(`./assets/json/user.json`);
  }
  getratingData() {
    return this.http.get(`./assets/json/ratings.json`);
  }
  getLangMetadata() {
    return this.http.get(`./assets/json/metadata-language.json`);
  }
  getAvailDetailsView() {
    //return this.http.get(this.url + `/avails/all/FILMS/` + availName);
    return this.http.get(`./assets/json/avails-details.json`);
  }
  getAvailDetailsAPIView() {
    //return this.http.get(this.url + `/avails/all/FILMS/` + availName);
    return this.http.get(`./assets/json/avail-details-api.json`);
  }
  getmetadataLangConList(){
    return this.http.get(`./assets/json/metadata_languageInfo.json`);
  }
  getMetaData() {
    return this.http.get(`./assets/json/metaData.json`);
  }
  // getItunesData() {
  //    return  this.http.get(`./assets/json/avails_api.json`);
  // }
  getItunesData() {
    return this.http.get(this.url + '/avails/ITUNES');
    // return  this.http.get(this.lambda + '/avails/ITUNES');
  }
  getTelevisionAvailData() {
    return this.http.get(this.url + `/avails/TV`);
  }
  // getAvailData() {
  //   return  this.http.get(`./assets/json/avails_api.json`);
  // }
  // getAPODetails() {
  //   return  this.http.get(`./assets/json/apo_api.json`);
  // }
  getSeriesDetails(availName) {
    console.log(availName);
    return this.http.get(this.url + `/avails/TV/` + availName);
  }
  getSeasonDetails(availName, series) {
    return this.http.get(this.url + '/avails/TV/' + availName + '/' + series);
  }
  getEpisodeDetails(availName, series, seasonNumber) {
    return this.http.get(this.url + `/avails/TV/` + availName + '/' + series + '/' + seasonNumber);
  }
  // uploadrelease(formData){
  //   let headers: HttpHeaders = new HttpHeaders();
  //   headers = headers.append('Accept', 'application/json');
  //   headers=headers.append("Access-Control-Allow-Origin", "*");
  //   this.relaseuploadURL=this.url+`/release/uploadRelease`;
  //      return this.http.post(this.relaseuploadURL , formData, { headers: headers });

  // }
  // uploadtrigger(formData){
  //   let headers: HttpHeaders = new HttpHeaders();
  //      headers = headers.append('Accept', 'application/json');
  //      headers=headers.append("Access-Control-Allow-Origin", "*");
  //      this.triggerUploadUrl=this.url+'/data/uploadAPO';
  //   return this.http.post(this.triggerUploadUrl , formData, { headers: headers });
  // }
  // uploadAvail(formData)
  // {
  //   let headers: HttpHeaders = new HttpHeaders();
  //   headers = headers.append('Accept', 'application/json');
  //   headers=headers.append("Access-Control-Allow-Origin", "*");
  //   return this.http.post(this.url+`/data/uploadAvails`,formData, { headers: headers });
  // }
  getAPODetails() {
    return this.http.get(this.url + '/apo/APO');
 
  }
  getAPODetail() {
    
    return this.http.get(`./assets/json/apo_api.json`);
  }
  getWorkOrderDetails() {
    return  this.http.get(`./assets/json/metaData.json`);
  }
  getAvailData() {
    return this.http.get(this.url + '/avails/FILMS');
  }

  uploadToS3(formData) {
    //let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append("Access-Control-Allow-Origin", "*");
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append("Content-Type", "multipart/form-data");
    var url = this.awsS3Url + '/uploads/uploadFile'
    return this.http.post(url , formData, {
      headers: { ignoreLoadingBar: '' }
    });
  }

  uploadS3toAWS(fileName) {
    //let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append("Access-Control-Allow-Origin", "*");
    var url = this.url + '/data/process/' + fileName;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  exportToS3(message) {
    console.log('mesaage', message);
    //let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    //headers = headers.append("Access-Control-Allow-Origin", "*");
    var url = this.url + `/export/${message}`;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  exporS3ToLcal(message) {

    var url = this.url + `/export/excel/${message}`
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  // uploadApoToBack(path, relDoc, trigDoc){
  //   var url;
  //   if(relDoc){
  //      url =this.url+'/release/insertReleaseData?filepath='+path;
  //   }else if(trigDoc){
  //      url =this.url+'/data/insertTriggerData?filepath='+path;
  //   }
  //   return this.http.get(url);
  // }

  // uploadAvailToBack(path){
  //   var url =this.url+'/data/insertAvailData?filepath='+path;
  //   return this.http.get(url);
  // }

  refresh(message) {
    if (message === 'apo') {
      return this.refreshcomp;
    }
    else if (message === 'avail') {
      return this.availrefreshcomp;
    }
    else if (message === 'iTunes') {
      return this.itunesRefreshComp;
    }
    else if (message === 'tv') {
      return this.tvRefreshComp;
    }
  }

  getAvailTittlesData(availName) {
    console.log("avail titles name ....", availName);
    //return this.http.get(`./assets/json/avail_titles_api.json`);
    // return this.http.get(this.url + `/avails/FILMS/` + availName);
    return this.http.get(this.url + `/avails/FILMS/` + availName);
  }
  getAccountTittlesData(accountName) {
    //console.log("itunes avails name ....",accountName);
    //return this.http.get(this.url + `/avails/ITUNES/` + accountName);
    return this.http.get(this.url + `/avails/ITUNES/` + accountName);
  }
  exportToSingleAvailS3(message, availname) {
    console.log('avail name in service', availname);
    var url = this.url + `/export/${availname}`;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  exporS3ToLcalToSingle(message, availname) {
    var url = this.url + `/export/excel/${availname}`;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  exportToSingleAPO(message, GlobalTitle) {
    var url = this.url + `/export/apotitle/${GlobalTitle}`;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
  exportAPOS3ToLcalToSingle(message, GlobalTitle) {
    var url = this.url + `/export/apotitle/excel/${GlobalTitle}`;
    return this.http.get(url, {
      headers: { ignoreLoadingBar: '' }
    });
  }
}





