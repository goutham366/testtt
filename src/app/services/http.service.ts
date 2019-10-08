import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url: string = 'http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform';
  lambda: string = 'https://z0lcb1siad.execute-api.us-west-2.amazonaws.com/Stage';
  awsS3Url: string = 'http://10.176.146.45:8082/AWSS3';
  localurl:string='http://10.219.20.213:8082/AWSS3';
  refreshcomp: Subject<any>;
  availrefreshcomp: Subject<any>;
  private messageSource = new BehaviorSubject('New');
  currentMessage = this.messageSource.asObservable();

  relaseuploadURL: string;
  triggerUploadUrl: string;

  constructor(private http: HttpClient) {
    this.refreshcomp = new Subject<any>();
    this.availrefreshcomp = new Subject<any>();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  getlanguagesData() {
    return this.http.get(`./assets/json/languages.json`);
  }
  getAvailsDetails() {
    return this.http.get(`./assets/json/Avails.json`);
  }
  getCountriesData() {
    return  this.http.get(`./assets/json/countries.json`);
  }
  getUsersData() {
    return  this.http.get(`./assets/json/user.json`);
  }
  getUserData(){
    return  this.http.get(`./assets/json/user.json`);
  }
  getratingData() { 
     return  this.http.get(`./assets/json/ratings.json`); 
   }
  
  getAvailDetailsView() {
    return this.http.get(`./assets/json/avails-details.json`);
  }
  getMetaData() {
    return this.http.get(`./assets/json/metaData.json`);
  }
  getItunesData() {
    return  this.http.get(`./assets/json/avails_api.json`);
 }
//  getItunesData() {
//   return  this.http.get(`http://172.21.129.57:8084/WBPlatform/avails/ITUNES`);
// }
  getTelevisionAvailData(){
    return  this.http.get(`./assets/json/television-avail.json`);
  }
  // getAvailData() {
  //   return  this.http.get(`./assets/json/avails_api.json`);
  // }
  // getAPODetails() {
  //   return  this.http.get(`./assets/json/apo_api.json`);
  // }
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
  getAvailData() {
    return this.http.get(this.url + '/avails/FILMS');
  }
  
  uploadToS3(formData) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append("Access-Control-Allow-Origin", "*");
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append("Content-Type", "multipart/form-data");
    var url = this.awsS3Url + '/uploads/uploadFile';
    return this.http.post(url , formData,{ headers: headers });
  }

  uploadS3toAWS(fileName) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append("Access-Control-Allow-Origin", "*");
    var url = this.url + '/data/process/' + fileName;
    return this.http.get(url, { headers: headers });
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
  }
  
}

  



