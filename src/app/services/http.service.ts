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
    return  this.http.get(`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/apo/APO`);
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
    return  this.http.get(`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/avails/FILMS`);
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
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    // headers = headers.append('Content-Type', 'multipart-form/data');
    headers=headers.append("Access-Control-Allow-Origin", "*");
    this.relaseuploadURL=`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/release/uploadRelease`
       return this.http.post(this.relaseuploadURL , formData, { headers: headers });
  
  }
  uploadtrigger(formData){
    let headers: HttpHeaders = new HttpHeaders();
       headers = headers.append('Accept', 'application/json');
      //  headers = headers.append('Content-Type', 'multipart/form-data');
       headers=headers.append("Access-Control-Allow-Origin", "*");
    this.triggerUploadUrl='https://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/data/uploadAPO';
    return this.http.post(this.triggerUploadUrl , formData, { headers: headers });
  }
  uploadAvail(formData)
  {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    //headers = headers.append('Content-Type', 'multipart-form/data');
    headers=headers.append("Access-Control-Allow-Origin", "*");
    return this.http.post(`http://ec2-54-190-182-149.us-west-2.compute.amazonaws.com:8081/WBPlatform/data/uploadAvails`,formData, { headers: headers });
  }
}
