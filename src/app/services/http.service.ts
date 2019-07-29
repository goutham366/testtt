import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  relaseuploadURL:string;
  triggerUploadUrl:string;
  constructor(private http: HttpClient) { }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  checkLoginDetails(user) {
    console.log("in service ", user)
    /*this.http.post("http://localhost:7777/checkUser", user).subscribe(data => {
      console.log('welcome to db', data);
    });*/
  }
  getAPODetails() {
    return  this.http.get(`https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/apo/APO`);
  }
  getlanguagesData() {
    return  this.http.get(`./assets/json/languages.json`);
  }
  getAvailsDetails() {
    return  this.http.get(`./assets/json/Avails.json`);
  }
  getCountriesData() {
    return  this.http.get(`./assets/json/countries.json`);
  }
  getUsersData() {
    return  this.http.get(`./assets/json/users.json`);
  }
  getAvailDetailsView() {
    return this.http.get(`./assets/json/avails-details.json`);
  }
  getAvailData() {
    return  this.http.get(`https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/avails/FILMS`);
  }
    getMetaData() {
    return  this.http.get(`./assets/json/metaData.json`);
  }
  // getAvailData() {
  //   return  this.http.get(`./assets/json/avails_api.json`);
  // }
  // getAPODetails() {
  //   return  this.http.get(`./assets/json/apo_api.json`);
  // }
  uploadrelease(formData){
    this.relaseuploadURL=`https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/release/releaseUpload`
    //let headers: HttpHeaders = new HttpHeaders();
   // headers = headers.append('Content-Type', 'application/octet-stream');
    return this.http.post(this.relaseuploadURL , formData);
  // return this.http.post(``,formData);
  }
  uploadtrigger(formData){
    this.triggerUploadUrl='https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/data/apoUpload';
    return this.http.post(this.triggerUploadUrl , formData);
  }
  uploadAvail(formData){
    return this.http.post(`https://jcm3vwswzd.execute-api.us-west-2.amazonaws.com/Stage/data/availUpload`,formData);
  }
}
