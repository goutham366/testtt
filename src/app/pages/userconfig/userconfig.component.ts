import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-userconfig',
  templateUrl: './userconfig.component.html',
  styleUrls: ['./userconfig.component.scss']
})
export class UserconfigComponent implements OnInit {
  userDataList: any;
  userList: any;
  searchtext: any;
  employeeService: any;
  removeButton: boolean;
  removeAddButton: boolean;
  COMMENTS = 'COMMENTS';
  Comments: string = '';
  multipleList: any = [];
  multipleArray: any = [];
  systemNotificationsList: any;

  // getUsersData() {
  //   console.log('this.userList');
  //   this.employeeService.fetchAllUsers().subscribe(data => {
  //     console.log('&&&&&&&&&&&&&&');
  //     this.userList = data;
  //     console.log(this.userList, 'this.userList');
  //   });
  // }

  constructor(private httpservice: HttpService) {

  }
  ngOnInit() {
    this.httpservice.getUsersData().subscribe(data => {
      this.userDataList = data;
      console.log("user details...........", this.userDataList);
    })

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

}
