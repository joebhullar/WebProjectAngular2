import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent {
  Posts:any;
  id:any;
  user:any;

  constructor(private objPostService:PostService) { //DO NOT PASS Paramaters in the Constructor
    this.objPostService.getAllUsersByObservable().subscribe(( data => { this.Posts = data;})); //subscribe the data means subscribing to the URL Change
  }

}
