import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
public posts;
public pagination=false;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
     this.getPosts();
  }
getPosts() {
 this._dataService.getPosts().subscribe(
     data => { this.posts = data['result'],this.pagination=data['total_page']},
      err => console.error(err),
      () => console.log('success')
    );
  }
}
