import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  metaDataList:any
  constructor(private httpservice: HttpService) { }
  comments = [{"name":'Windstorm', "date":"1/12"},
              {"name":'Bombasto', "date":"1/12"},
              {"name":'Magneta', "date":"1/12"},
              {"name":'Tornado', "date":"1/12"}];
  addComment(newComment: string) {
    if (newComment) {
      var toDate = Date();
      this.comments.push({"name": newComment, "date": toDate});
    }
  }
  ngOnInit() {
    this.httpservice.getMetaData().subscribe(data=>{
      this.metaDataList=data;
    })
  }

}
